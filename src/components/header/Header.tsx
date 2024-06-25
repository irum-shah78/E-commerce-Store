import React from 'react';
import "../../custom.d.ts"
// import { Link } from 'react-router-dom';
import "../../styles/Header.css"
import location from "../../assets/icons/location.svg";
import track from "../../assets/icons/track.svg";
import logo from "../../assets/images/logo.png";
import user from "../../assets/icons/user.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/shopping-cart.svg";

const Header = () => {
  return (
    <header className='text-sm'>
      <div className='flex flex-row justify-between px-32 py-4'>
        <p>Need help? Call us: (+98) 0234 456 789</p>
        <div className='flex cursor-pointer md:justify-end'>
          <img className="px-3 w-10" src={location} alt="logo" />
          Our store
          <img className="px-3 w-10" alt="track" src={track} />
          Track your order
        </div>
      </div>

      <nav>
        <div className='header-nav flex items-center justify-between px-32 py-6'>
          <img alt='logo' src={logo} />
          <div className='flex'>
            <div className='relative'>
              <input type="search" placeholder='Search anything' className='relative rounded-xl p-3 pl-6 w-80' />
              <button className='absolute text-white font-semibold rounded-xl px-6 py-3 focus:outline-none right-0 search-btn'>Search</button>
            </div>
          </div>

          <div className='flex items-center text-white cursor-pointer gap-3'>
            <img alt='user' src={user} className="w-4 h-10" />
            <span>Sign in</span>
            <div className='flex items-center gap-1'>
              <img alt='heart' src={heart} className="w-4 h-10" />
              <div className='circle-dot rounded-full px-1 text-white text-xs'>0</div>
              <span className='pl-2'>Sign in</span>
            </div>

            <div className='flex items-center gap-1'>
              <img alt='cart' src={cart} className="w-4 h-10" />
              <span className='circle-dot rounded-full px-1 text-white text-xs'>0</span>
              <span className='pl-2'>Cart</span>
            </div>
          </div>
        </div>
      </nav>



      <nav className="bg-gray-200 border-none">
        <div className="flex items-center justify-between px-32">
          <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-yellow-500 focus:outline-none font-semibold text-sm p-4 text-center inline-flex items-center dark:hover:bg-yellow-500" type="button">
            Browse Categories
            <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            {/* {categories.map(category => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))} */}
          </button>

          <div className='flex items-center'>
            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-transparent focus:outline-none text-sm p-4 text-center inline-flex items-center hover:text-yellow-500" type="button">
              Home
              <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-transparent focus:outline-none text-sm p-4 text-center inline-flex items-center hover:text-yellow-500" type="button">
              Catalog
              <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <button className="text-black bg-transparent focus:outline-none text-sm p-4 text-center inline-flex items-center hover:text-yellow-500" type="button">
              Blog
            </button>

            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-transparent focus:outline-none text-sm p-4 text-center inline-flex items-center hover:text-yellow-500" type="button">
              Pages
              <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <button className="text-black bg-transparent focus:outline-none text-sm p-4 text-center inline-flex items-center hover:text-yellow-500" type="button">
              About us
            </button>
          </div>

          <div className=" flex items-end">
            <p className='free-return font-bold'>30 Days Free Return</p>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
