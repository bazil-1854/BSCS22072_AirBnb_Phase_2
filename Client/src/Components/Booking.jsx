import { FaStar, FaShieldAlt, FaInfoCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { BsCircle, BsCheckCircle } from "react-icons/bs";

const Booking = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto p-4 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="border rounded-lg p-4 space-y-2 bg-gray-50">
          <h2 className="text-lg font-semibold">Request to book</h2>
          <p className="text-pink-600 flex items-center space-x-2">
            <FaShieldAlt />
            <span>This is a rare find. Bo's place is usually booked.</span>
          </p>
        </div>

        {/* Trip Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your trip</h3>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-gray-500">Dates</p>
              <p>Jun 25 – Jul 4, 2025</p>
            </div>
            <MdEdit className="text-gray-500 cursor-pointer" />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Guests</p>
              <p>2 guests</p>
            </div>
            <MdEdit className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Choose how to pay</h3>
          <div className="border rounded-lg p-4 space-y-4">
            {/* Full Payment Option */}
            <div className="flex items-start space-x-2">
              <BsCheckCircle className="text-black mt-1 cursor-pointer" />
              <div>
                <p>Pay $1,208.81 now</p>
              </div>
            </div>
            {/* Part Payment Option */}
            <div className="flex items-start space-x-2">
              <BsCircle className="text-gray-500 mt-1 cursor-pointer" />
              <div>
                <p>Pay part now, part later</p>
                <p className="text-gray-500 text-sm">$604.41 due today, $604.40 on Jun 16, 2025. No extra fees. <FaInfoCircle className="inline text-gray-500 cursor-pointer" /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Log in or sign up to book</h3>
          <div className="border rounded-lg p-4 space-y-2">
            <label className="text-sm text-gray-500">Country code</label>
            <select className="w-full border rounded-md p-2">
              <option>Pakistan (+92)</option>
              {/* Add more options as needed */}
            </select>
            <input type="text" placeholder="Phone number" className="w-full border rounded-md p-2 mt-2" />
            <p className="text-xs text-gray-500 mt-1">We’ll call or text you to confirm your number. Standard message and data rates apply. <p className="text-blue-500 underline">Privacy Policy</p></p>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-pink-700 to-pink-900 text-white font-semibold rounded-lg">Continue</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 md:max-w-md space-y-4">
        <div className="border rounded-lg p-4 space-y-2 bg-gray-50">
          <h3 className="text-lg font-semibold">Cosy Private Room - In the Heart of Copenhagen</h3>
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-500" />
            <p>4.96 (124 reviews) • <FaShieldAlt className="inline" /> Superhost</p>
          </div>
          <div className="text-sm text-gray-500">Room in casa particular</div>
        </div>

        {/* Price Details */}
        <div className="border rounded-lg p-4 space-y-2 bg-gray-50">
          <h3 className="text-lg font-semibold">Price details</h3>
          <div className="flex justify-between">
            <p>$125.88 x 9 nights</p>
            <p>$1,132.90</p>
          </div>
          <div className="flex justify-between text-green-600">
            <p>Weekly stay discount</p>
            <p>-$113.28</p>
          </div>
          <div className="flex justify-between">
            <p>Cleaning fee</p>
            <p>$29.16</p>
          </div>
          <div className="flex justify-between">
            <p>Airbnb service fee</p>
            <p>$160.03</p>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <p>Total (USD)</p>
            <p>$1,208.81</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
