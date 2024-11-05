import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Home = () => {
  const [listings, setListings] = useState([]);
  //const fullStars = Math.floor(listing.rating);
  //const hasHalfStar = listing.rating % 1 >= 0.5;

  const navigate = useNavigate();

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/listings`);
      setListings(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching listings:', error);
      setListings([]);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/listing/${id}`);
  };

  return (
    <div className='mt-[150px] min-h-screen md:mt-[280px]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4 xl:px-[75px] px-4">
        {listings.map(listing => (
          <div
            key={listing.id}
            onClick={() => handleCardClick(listing.id)}
            className="overflow-hidden cursor-pointer"
          >
            <img src={listing.image} loading='lazy' alt={listing.title} className="m-2 h-[290px] w-[95%] border rounded-xl hover:shadow-xl transition duration-200" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{listing.title}</h2>
              <p className="text-gray-500">{listing.type}</p>
              <p className="text-gray-700">Guests: {listing.guests}</p>
              <p className="font-bold text-lg">${listing.price} / night</p>
              <div className="flex">
                {[...Array(Math.floor(listing.rating))].map((_, index) => (
                  <FaStar
                    size={22}
                    key={`full-${index}`}
                    className="text-yellow-500"
                  />
                ))}
                {(listing.rating % 1 >= 0.5) && (
                  <FaStarHalfAlt
                    size={22}
                    key="half"
                    className="text-yellow-500"
                  />
                )}
                {[...Array(5 - (Math.floor(listing.rating)) - ((listing.rating % 1 >= 0.5) ? 1 : 0))].map((_, index) => (
                  <FaStar
                    size={22}
                    key={`empty-${index}`}
                    className="text-gray-300"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

/*<ListingCard key={listing.id} listing={listing} onClick={() => handleCardClick(listing.id)} />
*/
