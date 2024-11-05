import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import listingsData from './cardData';

function App() {
  const [category, setCategory] = useState('');
  const [filteredListings, setFilteredListings] = useState(listingsData);

  useEffect(() => {
    const filtered = category ? listingsData.filter(listing => listing.category === category) : listingsData;
    setFilteredListings(filtered);
  }, [category]);

  return (
    <Router>
      <Navbar setCategory={setCategory} />
      <Home listings={filteredListings} />
      <Footer />
    </Router>
  );
}

export default App;
