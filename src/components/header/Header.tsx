import React from 'react';
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
      <div className='flex justify-between px-8 py-4'>
        <p>Need help? Call us: (+98) 0234 456 789</p>
        <div className='flex cursor-pointer'>
          <img className="px-3 w-10" src={location} alt="logo" />
          Our store
          <img className="px-3 w-10" alt="track" src={track} />
          Track your order
        </div>
      </div>

      <nav>
        <div className='header-nav flex items-center justify-between px-8 py-6'>
        <img alt='logo' src={logo} />
        <div className='flex'>
          <div className='relative'>
            <input type="search" placeholder='Search anything' className='relative rounded-xl p-4 pl-6 w-80' />
            <button className='absolute text-white font-semibold rounded-xl px-6 py-4 focus:outline-none right-0'>Search</button>
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
    </header>
  );
};

export default Header;
