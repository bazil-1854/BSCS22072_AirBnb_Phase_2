import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSpring, animated } from 'react-spring';

const SearchBar = () => {
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    const [scrollY, setScrollY] = useState(0);
 
    const style = useSpring({
        transform: `translateY(${-(Math.min(scrollY / 2, 30))}px) scale(${Math.max(1 - scrollY / 50, 0)})`,
        opacity: Math.max(1 - scrollY / 170, 0),
        height: scrollY > 60 ? 0 : 'auto',
    });

    const handleSearch = () => {
        console.log({
            location,
            checkIn,
            checkOut,
            guests,
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY); // Update scrollY state
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <animated.div style={style} className='mb-[15px] xl:mt-[-8px] flex'>
            <div className="xl:scale-[1] lg:scale-[0.9] hidden lg:flex items-center bg-white border-[2px] border-gray-200 rounded-[45px] shadow-md mx-auto">
                <div className="flex pl-[35px] hover:bg-gray-100 px-[15px] rounded-[45px] py-[18px] flex-col">
                    <label className="text-[12px] font-[700] mb-[-2px] text-gray-600">Where</label>
                    <input
                        type="text"
                        placeholder="Search Destinations"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="outline-none bg-none focus:pl-[8px]"
                    />
                </div>

                <div className="flex hover:bg-gray-100 px-[35px] rounded-[45px] py-[10px] flex-col">
                    <label className="text-[12px] font-[700] mb-[-2px]  text-gray-600">Check-In</label>
                    <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                <div className="flex hover:bg-gray-100 px-[35px] rounded-[45px] py-[10px]  flex-col">
                    <label className="text-[12px] font-[700] mb-[-2px] text-gray-600">Check-Out</label>
                    <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className=" outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                <div className="flex hover:bg-gray-100 px-[35px] rounded-[45px] py-[10px] flex-col">
                    <label className="text-[12px] font-[700] mb-[-2px] text-gray-600">Guests</label>
                    <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="outline-none focus:ring-2 focus:ring-red-500"
                    >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num} guest{num > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleSearch}
                    className=" bg-red-500 ml-[85px] mr-[35px] text-white text-[22px] p-[10px] rounded-full hover:bg-red-600 transition duration-200"
                >
                    <AiOutlineSearch />
                </button>
            </div>
        </animated.div>
    );
};

export default SearchBar;
