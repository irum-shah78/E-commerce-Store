import React from 'react';
import { Link } from 'react-router-dom';
import location from "../../assets/icons/location.svg";
import track from "../../assets/icons/track.svg";
import logo from "../../assets/images/logo.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import arrowCategories from "../../assets/icons/arrow-down-categories.svg"
import user from "../../assets/icons/user.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/cart.svg";
import useHeaderState from './useHeader';
import { pages } from 'src/constants/pages';

const Header: React.FC = () => {
  const { isDropdownOpen, toggleDropdown, isCartOpen, toggleCart, cartItems, isWishlistOpen, toggleWishlist, wishlistItems, isMenuOpen, toggleMenu, } = useHeaderState();

  return (
    <header className='text-sm'>
      <div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-4 xl:px-27 lg:px-16 py-5'>
        <div className='h-[24px]'>
          <p className='text-center md:text-left'>Need help? Call us: (+98) 0234 456 789</p>
        </div>
        <div className='flex items-center justify-center md:flex-row cursor-pointer text-center gap-6'>
          <div className='flex text-nowrap items-center justify-center md:justify-end lg:gap-1 sm:gap-3'>
            <img className="w-5" src={location} alt="location" />
            <span className="sm:block">Our store</span>
          </div>
          <div className='flex text-nowrap items-center justify-center md:justify-end lg:gap-1 sm:gap-3'>
            <img className="w-5" alt="track" src={track} />
            <span className="sm:block">Track your order</span>
          </div>
        </div>
      </div>
      <nav>
        <div className='bg-customBlue flex md:flex-row items-center justify-between px-4 md:px-4 v lg:px-16 py-6'>
          <Link to="/">
            <img alt='logo' src={logo} className="w-24 md:w-auto" />
          </Link>
          <div className='hidden md:flex xl:w-96 lg:w-80 md:w-64'>
            <div className='relative w-full'>
              <input
                type="search"
                placeholder='Search anything'
                className='rounded-xl p-3 pl-6 w-full border-customYellow focus:outline-none focus:border-customYellow placeholder-black'
              />
              <button className='absolute text-white font-semibold rounded-xl px-6 py-3 focus:outline-none right-0 bg-customYellow'>
                Search
              </button>
            </div>
          </div>

          <div className='flex items-center text-white cursor-pointer gap-4 h-[24px]'>
            <div className='flex items-center gap-2'>
              <img alt='user' src={user} className="w-5 h-5" />
              <span className="hidden sm:block">Sign in</span>
            </div>

            <div className='relative flex items-center gap-1' onClick={toggleWishlist}>
              <img alt='heart' src={heart} className="w-5 h-5" />
              <div className='bg-customYellow h-4 w-4 rounded-full flex items-center justify-center text-white text-xs'>
                {wishlistItems?.length}
              </div>
              <span className='hidden sm:block pl-2'>Wishlist</span>

              {isWishlistOpen && (
                <div className='absolute right-0 w-48 bg-white shadow-lg rounded-lg pb-4 z-10 mt-24'>
                  {wishlistItems?.length > 0 ? (
                    <ul>
                      {wishlistItems?.map(item => (
                        <li key={item.id} className='flex justify-between p-2'>
                          <span className='text-customBlue'>{item?.title}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='flex text-center'>Your wishlist is empty.</p>
                  )}
                  <Link to="/wishlist" className="text-center block font-semibold text-customBlue">
                    View Wishlist
                  </Link>
                </div>
              )}
            </div>

            <div className='relative flex items-center gap-1' onClick={toggleCart}>
              <img alt='cart' src={cart} className="w-5 h-5" />
              <span className='bg-customYellow h-4 w-4 rounded-full flex items-center justify-center text-white text-xs'>
                {cartItems?.length}
              </span>
              <span className='hidden sm:block pl-2'>Cart</span>

              {isCartOpen && (
                <div className='absolute right-0 w-48 bg-white shadow-lg rounded-lg pb-4 z-10 mt-24'>
                  {cartItems?.length > 0 ? (
                    <ul>
                      {cartItems?.map(item => (
                        <li key={item?.id} className='flex justify-between p-2'>
                          <span className='text-customBlue'>{item?.title}</span>
                          <span className='text-black font-semibold'>{item?.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='text-center'>Your cart is empty.</p>
                  )}
                  <Link to="/cart" className="text-center block font-semibold text-customBlue">
                    View Cart
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-200 h-auto">
        <div className="flex flex-col md:flex-row items-center justify-between px-2 md:px-2 xl:px-27 lg:px-16">
          <div className="relative">
            <button id="dropdownHoverButton"
              className="text-white bg-customYellow focus:outline-none font-semibold text-sm py-4 px-2 inline-flex items-center"
              type="button"
              onClick={toggleDropdown}>
              Browse Categories
              <img src={arrowCategories} alt='dropdown' className="mt-1 ms-2 " />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 w-full bg-white shadow-lg rounded-lg p-2 z-10">
                <li className="p-3 hover:bg-gray-100">
                  <Link to={`/category/all`} onClick={toggleDropdown}>
                    All categories
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <button className="md:hidden text-black" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div className={`flex-col md:flex-row items-center mt-4 md:mt-0 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
            {pages?.map(({ to, label, hasDropdown }, index) => (
              <Link key={index} to={to} className="text-black bg-transparent focus:outline-none text-sm p-3 inline-flex items-center hover:text-customYellow">
                {label}
                {hasDropdown && <img src={arrowDown} alt="dropdown" className="mt-1 ms-2" />}
              </Link>
            ))}
          </div>
          <div className="flex items-end mt-4 md:mt-0">
            <p className='text-customBlue font-bold'>30 Days Free Return</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;