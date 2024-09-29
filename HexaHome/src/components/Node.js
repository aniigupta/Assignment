const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const PropertyList = require('./components/PropertyList');
const app = express();

app.get('/properties', (req, res) => {
    const searchQuery = req.query.search || '';
    const properties = getProperties(searchQuery);

    const html = ReactDOMServer.renderToString(<PropertyList properties={properties} />);

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="description" content="Find your perfect property with HexaHome">
        <meta name="keywords" content="${searchQuery}, properties, real estate">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Property Listings</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/bundle.js"></script>
      </body>
      </html>
    `);
});

function getProperties(query) {
    return [
        { id: 1, name: "Luxury Apartment", location: "Mumbai" },
        { id: 2, name: "Beach House", location: "Goa" }
    ];
}

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
