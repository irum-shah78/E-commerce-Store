import React from 'react';
import share from "../../assets/icons/share.svg";
import headphone from "../../assets/icons/headphone.svg";
import footerLogo from "../../assets/images/footer-logo.svg";
import google from "../../assets/icons/google.svg";
import facebook from "../../assets/icons/facebook.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="bg-customLightBlue">
      <div className="px-4 md:px-8 lg:px-28 py-4">
        <div className="bg-white mt-4 flex flex-col lg:flex-row items-center justify-around h-auto lg:h-36 rounded-xl p-4 lg:p-0">
          <p className="font-bold text-xl md:text-2xl text-customBlue mb-4 lg:mb-0">Subscribe newsletter</p>
          <div className="relative flex items-center mb-4 lg:mb-0">
            <input
              type="email"
              className="rounded-xl px-8 py-3 bg-customYellow text-white placeholder-white placeholder-opacity-70 text-sm focus:outline-none"
              placeholder="Email address"
            />
            <img src={share} alt="email" className="absolute right-4 cursor-pointer" />
          </div>
          <div className="flex items-center text-xs font-semibold text-customGray">
            <img src={headphone} alt="headphone" />
            <p className="ml-4">Call us 24/7:<br /> (+62) 0123 567 789</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-6">
          <div className="flex-1 mb-6 lg:mb-0">
            <img src={footerLogo} className="h-8 mb-3" alt="Logo" />
            <p className="mt-6 text-xs text-customBlue">64 st james boulevard<br /> hoswick, ze2 7zj</p>
            <hr className="mt-6 w-1/2 border-t-1 border-customGray" />
            <div className="flex items-center gap-4 mt-4 cursor-pointer">
              {[google, facebook, whatsapp].map((icon, index) => (
                <img key={index} src={icon} alt={`icon-${index}`} className="h-5 w-5" />
              ))}
            </div>
          </div>

          {[{
            title: "Find Product", items: [
              "Brownze arnold",
              "Chronograph blue",
              "Smart phones",
              "Automatic watch",
              "Hair straighteners",
            ],
          }, {
            title: "Get help", items: [
              "About us",
              "Contact us",
              "Return policy",
              "Privacy policy",
              "Payment policy",
            ],
          }, {
            title: "About us", items: ["News", "Service", "Our policy", "Customer care", "Faq's"],
          },
          ].map((section, index) => (
            <div key={index} className="text-base flex-1 mb-6 lg:mb-0">
              <p className="font-semibold mb-2 text-customBlue">{section.title}</p>
              <ul className="ml-4 list-disc font-medium text-customBlue marker:text-customMarker space-y-2 cursor-pointer">
                {section.items.map((item, i) => (
                  <li key={i} className="hover:underline">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;