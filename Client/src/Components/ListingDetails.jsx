import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListingDetails = () => {
  const { id } = useParams();  
  const [listing, setListing] = useState(null);
 
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/listings/${id}`);
        setListing(response.data);
      } catch (error) {
        console.error('Error fetching listing:', error);
      }
    }; 
    fetchListing();
  }, [id]);

  if (!listing) return <div>Loading...</div>;  

  return (
    <div className="mt-[150px] min-h-screen md:mt-[280px] max-w-[550px] mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{listing.title}</h1>
        <p className="text-gray-700 mb-4">{listing.type}</p>
        <p className="text-lg font-semibold text-blue-600 mb-4">${listing.price} per night</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 mr-2">★</span>
          <span className="text-gray-700">{listing.rating}</span>
        </div>
        <p className="text-gray-700">Guests: {listing.guests}</p>
        <p className="text-gray-700">Category: {listing.category}</p>
      </div>
    </div>
  );
};

export default ListingDetails;
