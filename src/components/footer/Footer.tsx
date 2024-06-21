import React from 'react';
import "../../custom.d.ts"
import "../../styles/Footer.css"
import share from "../../assets/icons/share.svg"
import headphone from "../../assets/icons/headphone.svg"

const Footer = () => {
  return (
    <>
      <footer className="bg-white footer-main">
        <div className="px-14 py-4 p-6">
          <div className='bg-white mt-4 flex items-center justify-around h-36 w-90 rounded-xl'>
            <h2 className='footer-heading font-bold text-2xl'>Subscribe newsletter</h2>
            <div className='flex items-center'>
                <input type="email" className='rounded-xl relative px-8 py-3 text-white font-sm' placeholder='Email address' />
                <img src={share} alt="email" className='absolute px-6 py-3 cursor-pointer translate-x-52' />
            </div>
            <div className='flex items-center text-xs font-semibold contact'>
            <img src={headphone} alt='headphone' />
            <p className='ms-4'>Call us 24/7:<br/> (+62) 0123 567 789</p>
            </div>
          </div>

          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <button className="hover:underline">Privacy Policy</button>
                  </li>
                  <li>
                    <button className="hover:underline">Terms &amp; Conditions</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;