import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/listings/search`, {
        params: { query }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching listings:', error);
    }
  };

  const handleCardClick = (id) => {
    onClose();
    navigate(`/listing/${id}`);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Search Listings</h2>
        <div className="flex mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white rounded-r-lg px-4 py-2"
          >
            <FaSearch />
          </button>
        </div>
        <div className="max-h-60 overflow-y-auto">
          {searchResults.map(listing => (
            <div
              key={listing.id}
              onClick={() => handleCardClick(listing.id)}
              className="cursor-pointer p-4 border-b hover:bg-gray-100 transition duration-200"
            >
              <h3 className="font-semibold">{listing.title}</h3>
              <p className="text-gray-500">{listing.type}</p>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 bg-gray-200 rounded-lg py-2 px-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
