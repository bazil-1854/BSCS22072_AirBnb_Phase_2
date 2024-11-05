import React, { useState } from 'react';
import axios from 'axios';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const SearchModal = () => {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
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
        <div className="mt-[150px] min-h-screen md:mt-[170px] px-4">
            <h2 className="text-lg font-bold mb-4 text-center">Search Listings</h2>
            <p className="text-sm mb-2 text-center">Search by type, title, or category. Only one field is required.</p>

            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="p-2 border rounded w-full md:w-1/3"
                    placeholder="Type (optional)"
                />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 border rounded w-full md:w-1/3"
                    placeholder="Title (optional)"
                />
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border rounded w-full md:w-1/3"
                    placeholder="Category (optional)"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full md:w-auto"
                >
                    Search
                </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4 xl:px-[75px] px-4">
                {results.map(listing => (
                    <div
                        key={listing.id}
                        onClick={() => window.location.href = `/listing/${listing.id}`}
                        className="overflow-hidden cursor-pointer"
                    >
                        <img
                            src={listing.image}
                            loading='lazy'
                            alt={listing.title}
                            className="m-2 h-[290px] w-[95%] border rounded-xl hover:shadow-xl transition duration-200"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold text-lg">{listing.title}</h2>
                            <p className="text-gray-500">{listing.type}</p>
                            <p className="text-gray-500">{listing.category}</p>
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

export default SearchModal;
