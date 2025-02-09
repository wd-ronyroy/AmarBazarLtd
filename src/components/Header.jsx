import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to='/' className="w-8 h-8 flex items-center justify-center rounded-full">
            <img src="./public/img/ab-logo.png" alt="" />
          </Link>
          <Link to='/' className="text-2xl font-bold text-blue-600">AMAR BAZAR</Link>
        </div>

        {/* Menu Items For Web */}
        <div className="flex space-x-6 bg-gray-100 px-4 py-2 rounded-md">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Sell
          </Link>
          <Link to="/buy" className="text-gray-700 hover:text-blue-600">
            Buy
          </Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">
            Offers
          </Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">
            Rental
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search to buy..."  
            className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m2.3-6.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
              />
            </svg>
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-gray-700 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20c0-2.67 4-4 8-4s8 1.33 8 4"
              />
            </svg>
          </a>
          <a
            href="/cart"
            className="relative text-gray-700 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l1.5 5h7L17 13M9 18h.01M15 18h.01"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
              0
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
