import React, { useState } from 'react';
import axios from 'axios';

const SearchModal = ({ isOpen, onClose }) => {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        // Clear results before new search
        setResults([]);
        try {
            const response = await axios.get('http://localhost:3001/api/search', {
                params: { type, title, category }
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        isOpen ? (
            <div className="fixed inset-0 pt-[150px] bg-gray-800 bg-opacity-50 overflow-auto flex justify-center items-center">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                    <h2 className="text-lg font-bold mb-4">Search Listings</h2>
                    <p className="text-sm mb-2">You can search by type, title, or category. Only one field is required.</p>
                    <form onSubmit={handleSearch} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Type</label>
                            <input
                                type="text"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="mt-1 p-2 border rounded w-full"
                                placeholder="Enter type (optional)"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 p-2 border rounded w-full"
                                placeholder="Enter title (optional)"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="mt-1 p-2 border rounded w-full"
                                placeholder="Enter category (optional)"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded"
                        >
                            Search
                        </button>
                    </form>
                    <button
                        onClick={onClose}
                        className="mt-4 w-full text-gray-700 underline"
                    >
                        Close
                    </button>
                    {results.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold">Results:</h3>
                            <ul className="mt-2">
                                {results.map((listing) => (
                                    <li key={listing.id} className="border-b py-2">
                                        <h4 className="font-bold">{listing.title}</h4>
                                        <p>{listing.type} - {listing.category}</p>
                                        <p>Guests: {listing.guests}, Price: ${listing.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        ) : null
    );
};

export default SearchModal;
