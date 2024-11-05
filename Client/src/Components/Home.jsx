import React, { useEffect, useState } from 'react';
import ListingsGrid from './Cards/ListingsGrid ';
import axios from 'axios';

const Home = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/listings`);
      setListings(response.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  return (
    <div className='mt-[150px] md:mt-[280px]'>
      <ListingsGrid listings={listings} />
    </div>
  );
};

export default Home;
