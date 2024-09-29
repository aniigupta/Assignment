import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ filters }) => {
    const properties = [
        {
            id: 1,
            name: '2BHK Apartment in Noida',
            price: '₹50L',
            type: 'Apartment',
            area: 950,
            postedBy: 'owner',
            facing: 'East',
            location: 'Sector 62, Noida'
        },
        {
            id: 2,
            name: '3BHK Independent House in Gurgaon',
            price: '₹2.75Cr',
            type: 'Independent House',
            area: 2500, 
            postedBy: 'dealer',
            facing: 'North',
            location: 'DLF Phase 2, Gurgaon'
        },
        {
            id: 3,
            name: 'Residential Plot in Noida',
            price: '₹1.5Cr',
            type: 'Plot/Land',
            area: 1500, 
            postedBy: 'builder', // Changed 'Builder' to 'builder'
            facing: 'South-West',
            location: 'Sector 135, Noida'
        },
        {
            id: 4,
            name: '4BHK Independent Villa in Jaipur',
            price: '₹3.1Cr',
            type: 'Independent Villa',
            area: 3000, 
            postedBy: 'dealer',
            facing: 'West',
            location: 'Malviya Nagar, Jaipur'
        },
        {
            id: 5,
            name: 'Studio Apartment in Mumbai',
            price: '₹85L',
            type: '1Rk/Studio House',
            area: 550, 
            postedBy: 'owner',
            facing: 'North-East',
            location: 'Andheri East, Mumbai'
        },
        {
            id: 6,
            name: '5BHK Individual Floor in Delhi',
            price: '₹4.5Cr',
            type: 'Individual Floor',
            area: 3500, 
            postedBy: 'builder', // Changed 'Builder' to 'builder'
            facing: 'South',
            location: 'Greater Kailash, Delhi'
        },
        {
            id: 7,
            name: 'Residential Plot in Bangalore',
            price: '₹2.2Cr',
            type: 'Plot/Land',
            area: 2000, 
            postedBy: 'dealer',
            facing: 'East',
            location: 'Whitefield, Bangalore'
        },
        {
            id: 8,
            name: '3BHK Individual Floor in Pune',
            price: '₹1.1Cr',
            type: 'Individual Floor',
            area: 1800, 
            postedBy: 'owner',
            facing: 'West',
            location: 'Kharadi, Pune'
        },
        {
            id: 9,
            name: '2BHK Independent Villa in Goa',
            price: '₹1.85Cr',
            type: 'Independent Villa',
            area: 2000, 
            postedBy: 'builder', // Changed 'Builder' to 'builder'
            facing: 'South-East',
            location: 'Candolim, Goa'
        },
        {
            id: 10,
            name: '1BHK Apartment in Hyderabad',
            price: '₹65L',
            type: 'Apartment',
            area: 800, 
            postedBy: 'owner',
            facing: 'North-West',
            location: 'Hitech City, Hyderabad'
        }
    ];

    const filteredProperties = properties.filter((property) => {
        return (
            property.name.toLowerCase().includes(filters.search.toLowerCase()) &&
            (filters.propertyType.length ? filters.propertyType.includes(property.type) : true) && // Check if property type is in the selected types
            (filters.postedBy.length ? filters.postedBy.includes(property.postedBy) : true) // Add filter for postedBy if needed
        );
    });

    return (
        <div className="property-list">
            {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;
