  import React, { useEffect, useState } from 'react';
  import ListingCard from './Cards/ListingCard';
  import axios from 'axios';

  const Home = () => {
    const [listings, setListings] = useState([]);
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
    

    return (
      <div className='mt-[150px] min-h-screen md:mt-[280px]'> 

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  py-4 xl:px-[75px] px-4">
          {listings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    );
  };

  export default Home;
