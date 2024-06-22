import React from 'react';
import "../../custom.d.ts"
import "../../styles/Footer.css"
import share from "../../assets/icons/share.svg"
import headphone from "../../assets/icons/headphone.svg"
import logo1 from "../../assets/images/logo-1.png"
import google from "../../assets/icons/google.svg"
import facebook from "../../assets/icons/facebook.svg"
import whatsapp from "../../assets/icons/whatsapp.svg"


const Footer = () => {
  return (
    <>
      <footer className="bg-white footer-main">
        <div className="px-14 py-4 p-6">
          <div className='bg-white mt-4 flex items-center justify-around h-36 w-90 rounded-xl'>
            <p className='footer-heading font-bold text-2xl'>Subscribe newsletter</p>

            <div className='flex items-center'>
              <input type="email" className='rounded-xl relative px-8 py-3 text-white font-sm' placeholder='Email address' />
              <img src={share} alt="email" className='absolute px-6 py-3 cursor-pointer translate-x-52' />
            </div>

            <div className='flex items-center text-xs font-semibold contact'>
              <img src={headphone} alt='headphone' />
              <p className='ms-4'>Call us 24/7:<br /> (+62) 0123 567 789</p>
            </div>
          </div>

          <div className="flex justify-between mt-6">

            <div className="mb-6 flex-1">
              <img src={logo1} className="h-8 me-3" alt="Logo" />
              <p className='mt-6 text-xs'>64 st james boulevard<br />
                hoswick , ze2 7zj</p>
              <hr className='mt-6 w-1/2' style={{ border: '1px solid rgba(157, 157, 157, 1)' }} />

              <div className='flex items-center justify-start gap-4 mt-4 cursor-pointer'>
                <img src={google} alt='google ' className='h-5 w-5' />
                <img src={facebook} alt='facebook' className='h-5 w-5' />
                <img src={whatsapp} alt='whatsapp' className='h-5 w-5' />
              </div>
            </div>

            <div className='text-base flex-1'>
              <p className="font-semibold mb-2">Find Product</p>
              <ul className="ml-4 list-disc font-medium cursor-pointer space-y-2">
                <li className="hover:underline">Brwnonze arnold</li>
                <li className="hover:underline">Chronograph blue</li>
                <li className="hover:underline">Smart phones</li>
                <li className="hover:underline">Automatic watch</li>
                <li className="hover:underline">Hair starighteners</li>
              </ul>
            </div>

            <div className='text-base flex-1'>
              <p className="font-semibold mb-2">Get help</p>
              <ul className="ml-4 list-disc font-medium cursor-pointer space-y-2">
                <li className="hover:underline">About us</li>
                <li className="hover:underline">Contact us</li>
                <li className="hover:underline">Return policy </li>
                <li className="hover:underline">Privacy policy</li>
                <li className="hover:underline">Payment policy</li>
              </ul>
            </div>

            <div className='text-base'>
              <p className="font-semibold mb-2">About us</p>
              <ul className="ml-4 list-disc font-medium cursor-pointer space-y-2">
                <li className="hover:underline">News</li>
                <li className="hover:underline">Service</li>
                <li className="hover:underline">Our policy</li>
                <li className="hover:underline">Customer care</li>
                <li className="hover:underline">Faq's</li>
              </ul>
            </div>
          </div>
        </div>
      </footer >
    </>
  )
}

export default Footer;