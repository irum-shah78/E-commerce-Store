import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import location from "../../assets/icons/location.svg";
import track from "../../assets/icons/track.svg";
import logo from "../../assets/images/logo.png";
import user from "../../assets/icons/user.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/shopping-cart.svg";

const categories = ["All categories"];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className='text-sm'>
      <div className='flex flex-row justify-between px-32 py-4'>
        <p>Need help? Call us: (+98) 0234 456 789</p>
        <div className='flex cursor-pointer md:justify-end'>
          <img className="px-3 w-10" src={location} alt="location" />
          Our store
          <img className="px-3 w-10" alt="track" src={track} />
          Track your order
        </div>
      </div>

      <nav>
        <div className='bg-customBlue flex items-center justify-between px-32 py-6'>
          <img alt='logo' src={logo} />
          <div className='flex'>
            <div className='relative'>
              <input
                type="search"
                placeholder='Search anything'
                className='relative rounded-xl p-3 pl-6 w-80 border-customYellow focus:outline-none focus:border-customYellow placeholder-black'
              />
              <button className='absolute text-white font-semibold rounded-xl px-6 py-3 focus:outline-none right-0 bg-customYellow'>
                Search
              </button>
            </div>
          </div>

          <div className='flex items-center text-white cursor-pointer gap-3'>
            <img alt='user' src={user} className="w-4 h-10" />
            <span>Sign in</span>
            <div className='flex items-center gap-1'>
              <img alt='heart' src={heart} className="w-4 h-10" />
              <div className='bg-customYellow h-4 w-4 rounded-full flex items-center justify-center text-white text-xs'>0</div>
              <span className='pl-2'>Wishlist</span>
            </div>

            <div className='flex items-center gap-1'>
              <img alt='cart' src={cart} className="w-4 h-10" />
              <span className='bg-customYellow h-4 w-4 rounded-full flex items-center justify-center text-white text-xs'>0</span>
              <span className='pl-2'>Cart</span>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-200">
        <div className="flex items-center justify-between px-32">
          <div className="relative">
            <button
              id="dropdownHoverButton"
              className="text-white bg-customYellow focus:outline-none font-semibold text-sm p-4 inline-flex items-center"
              type="button"
              onClick={toggleDropdown}
            >
              Browse Categories
              <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 w-full bg-white shadow-lg rounded-lg p-2 z-10">
                {categories.map(category => (
                  <li key={category} className="p-2 hover:bg-gray-200">
                    <Link to={`/category/${category}`} onClick={() => setDropdownOpen(false)}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className='flex items-center'>
            <Link to="/" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
              Home
              <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </Link>

            <Link to="/catalog" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
              Catalog
              <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </Link>

            <Link to="/blog" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
              Blog
            </Link>

            <Link to="/pages" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
              Pages
              <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </Link>

            <Link to="/about" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
              About us
            </Link>
          </div>

          <div className="flex items-end">
            <p className='text-customBlue font-bold'>30 Days Free Return</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;