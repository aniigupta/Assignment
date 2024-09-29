import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <h4>{property.name}</h4>
      <p>Price: ₹{property.price}L</p>
      <p>Area: {property.area} sqft</p>
      <p>Posted By: {property.postedBy}</p>
      <p>Facing: {property.facing}</p>
      <p>Location: {property.location}</p>
    </div>
  );
};

export default PropertyCard;
