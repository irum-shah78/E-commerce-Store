// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import { Link } from 'react-router-dom';
// import location from "../../assets/icons/location.svg";
// import track from "../../assets/icons/track.svg";
// import logo from "../../assets/images/logo.png";
// import user from "../../assets/icons/user.svg";
// import heart from "../../assets/icons/heart.svg";
// import cart from "../../assets/icons/shopping-cart.svg";

// const Header: React.FC = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const toggleCart = () => {
//     setCartOpen(!cartOpen);
//   };

//   return (
//     <header className='text-sm'>
//       <div className='flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-32 py-4'>
//         <p className='text-center md:text-left'>Need help? Call us: (+98) 0234 456 789</p>
//         <div className='flex flex-col md:flex-row cursor-pointer text-center md:text-right'>
//           <div className='flex items-center justify-center md:justify-end'>
//             <img className="px-3 w-6 md:w-10" src={location} alt="location" />
//             <span className="hidden sm:block">Our store</span>
//           </div>
//           <div className='flex items-center justify-center md:justify-end'>
//             <img className="px-3 w-6 md:w-10" alt="track" src={track} />
//             <span className="hidden sm:block">Track your order</span>
//           </div>
//         </div>
//       </div>

//       <nav>
//         <div className='bg-customBlue flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-32 py-6'>
//           <img alt='logo' src={logo} className="w-24 md:w-auto" />
//           <div className='flex mt-4 md:mt-0 w-full md:w-auto'>
//             <div className='relative w-full md:w-80'>
//               <input type="search" placeholder='Search anything'
//                 className='relative rounded-xl p-3 pl-6 w-full border-customYellow focus:outline-none focus:border-customYellow placeholder-black' />
//               <button className='absolute text-white font-semibold rounded-xl px-6 py-3 focus:outline-none right-0 bg-customYellow'>
//                 Search
//               </button>
//             </div>
//           </div>

//           <div className='flex items-center text-white cursor-pointer gap-3 mt-4 md:mt-0'>
//             <img alt='user' src={user} className="w-6 h-10" />
//             <span className="hidden sm:block">Sign in</span>
//             <div className='flex items-center gap-1'>
//               <img alt='heart' src={heart} className="w-6 h-10" />
//               <div className='bg-customYellow h-4 w-4 rounded-full flex items-center justify-center text-white text-xs'>0</div>
//               <span className='hidden sm:block pl-2'>Wishlist</span>
//             </div>

//             <div className='relative'>
//               <div className='flex items-center gap-1' onClick={toggleCart}>
//                 <img alt='cart' src={cart} className="w-6 h-10" />
//                 <span className='bg-customYellow h-4 w-4 rounded-full flex items-center justify-center text-white text-xs'>
//                   {cartItems.length}
//                 </span>
//                 <span className='hidden sm:block pl-2'>Cart</span>
//               </div>
//               {cartOpen && (
//                 <div className='absolute right-0 w-48 bg-white shadow-lg rounded-lg pb-4 z-10'>
//                   {cartItems.length > 0 ? (
//                     <ul>
//                       {cartItems.map(item => (
//                         <li key={item.id} className='flex justify-between p-2'>
//                           <span className='text-customBlue'>{item.title}</span>
//                           <span className='text-black font-semibold'>{item.quantity}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className='text-center'>Your cart is empty.</p>
//                   )}
//                   <Link to="/cart" className="text-center block font-semibold text-customBlue">
//                     View Cart
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       <nav className="bg-gray-200">
//         <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-32 py-4">
//           <div className="relative">
//             <button id="dropdownHoverButton"
//               className="text-white bg-customYellow focus:outline-none font-semibold text-sm p-4 inline-flex items-center"
//               type="button"
//               onClick={toggleDropdown}>
//               Browse Categories
//               <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//               </svg>
//             </button>
//             {dropdownOpen && (
//               <ul className="absolute left-0 w-full bg-white shadow-lg rounded-lg p-2 z-10">
//                 <li className="p-3 hover:bg-gray-100">
//                   <Link to={`/category/all`} onClick={() => setDropdownOpen(false)}>
//                     All categories
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </div>

//           <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0'>
//             <Link to="/" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
//               Home
//               <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//               </svg>
//             </Link>

//             <Link to="/catalog" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
//               Catalog
//               <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//               </svg>
//             </Link>

//             <Link to="/blog" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
//               Blog
//             </Link>

//             <Link to="/pages" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
//               Pages
//               <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//               </svg>
//             </Link>

//             <Link to="/about" className="text-black bg-transparent focus:outline-none text-sm p-4 inline-flex items-center hover:text-customYellow">
//               About us
//             </Link>
//           </div>

//           <div className="flex items-end mt-4 md:mt-0">
//             <p className='text-customBlue font-bold'>30 Days Free Return</p>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import location from "../../assets/icons/location.svg";
import track from "../../assets/icons/track.svg";
import logo from "../../assets/images/logo.png";
import user from "../../assets/icons/user.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/shopping-cart.svg";

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='text-sm'>
      <div className='flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-32 py-4'>
        <p className='text-center md:text-left'>Need help? Call us: (+98) 0234 456 789</p>
        <div className='flex flex-col md:flex-row cursor-pointer text-center md:text-right'>
          <div className='flex items-center justify-center md:justify-end'>
            <img className="px-3 w-6 md:w-10" src={location} alt="location" />
            <span className="hidden sm:block">Our store</span>
          </div>
          <div className='flex items-center justify-center md:justify-end'>
            <img className="px-3 w-6 md:w-10" alt="track" src={track} />
            <span className="hidden sm:block">Track your order</span>
          </div>
        </div>
      </div>

      <nav>
        <div className='bg-customBlue flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-32 py-6'>
          <img alt='logo' src={logo} className="w-24 md:w-auto" />
          <div className='flex mt-4 md:mt-0 w-full md:w-auto'>
            <div className='relative w-full md:w-80'>
              <input type="search" placeholder='Search anything'
                className='relative rounded-xl p-3 pl-6 w-full border-customYellow focus:outline-none focus:border-customYellow placeholder-black' />
              <button className='absolute text-white font-semibold rounded-xl px-6 py-3 focus:outline-none right-0 bg-customYellow'>
                Search
              </button>
            </div>
          </div>

          <div className='flex items-center text-white cursor-pointer gap-3 mt-4 md:mt-0'>
            <img alt='user' src={user} className="w-6 h-10" />
            <span className="hidden sm:block">Sign in</span>
            <div className='flex items-center gap-1'>
              <img alt='heart' src={heart} className="w-6 h-10" />
              <div className='bg-customYellow h-4 w-4 rounded-full flex items-center justify-center text-white text-xs'>0</div>
              <span className='hidden sm:block pl-2'>Wishlist</span>
            </div>

            <div className='relative'>
              <div className='flex items-center gap-1' onClick={toggleCart}>
                <img alt='cart' src={cart} className="w-6 h-10" />
                <span className='bg-customYellow h-4 w-4 rounded-full flex items-center justify-center text-white text-xs'>
                  {cartItems.length}
                </span>
                <span className='hidden sm:block pl-2'>Cart</span>
              </div>
              {cartOpen && (
                <div className='absolute right-0 w-48 bg-white shadow-lg rounded-lg pb-4 z-10'>
                  {cartItems.length > 0 ? (
                    <ul>
                      {cartItems.map(item => (
                        <li key={item.id} className='flex justify-between p-2'>
                          <span className='text-customBlue'>{item.title}</span>
                          <span className='text-black font-semibold'>{item.quantity}</span>
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

      <nav className="bg-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-32 py-4">
          <div className="relative">
            <button id="dropdownHoverButton"
              className="text-white bg-customYellow focus:outline-none font-semibold text-sm p-4 inline-flex items-center"
              type="button"
              onClick={toggleDropdown}>
              Browse Categories
              <svg className="w-3 h-4 mt-1 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 w-full bg-white shadow-lg rounded-lg p-2 z-10">
                <li className="p-3 hover:bg-gray-100">
                  <Link to={`/category/all`} onClick={() => setDropdownOpen(false)}>
                    All categories
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <button className="md:hidden text-black" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          <div className={`flex-col md:flex-row items-center mt-4 md:mt-0 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
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

          <div className="flex items-end mt-4 md:mt-0">
            <p className='text-customBlue font-bold'>30 Days Free Return</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
