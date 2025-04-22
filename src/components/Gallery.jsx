import React from 'react';
import TourCard from './TourCard';

const tours = [
    { id: 1, name: 'Beach Paradise', location: 'Hawaii', price: '$2000' },
    { id: 2, name: 'Mountain Adventure', location: 'Colorado', price: '$1500' },
    { id: 3, name: 'City Lights', location: 'New York', price: '$1800' },
];

const Gallery = () => {
    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
            ))}
        </div>
    );
};

export default Gallery;