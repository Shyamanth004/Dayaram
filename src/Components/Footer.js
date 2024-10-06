import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faXTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F4C430] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start">

        {/* Left Section with Logo and FSSAI Mark */}
        <div className="flex flex-col items-start sm:items-center mb-6 sm:mb-0">
          <div className="flex items-center mb-4">
            <img
              src="/logo.png"
              alt="Brand Logo"
              className="h-28 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-black">Dayaram Sweets</span>
          </div>

          <div className="mt-2">
            <img
              src="/fssai.png"
              alt="FSSAI Mark"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Right Section with Links and Social Media */}
        <div className="flex flex-col items-start w-full sm:w-auto">
          {/* Quick Links and Conditions */}
          <h2 className="font-bold text-xl text-black mb-4">Quick Links and Conditions</h2>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white pt-4">
            {/* Portal Links */}
            <div>
              <h3 className="font-bold text-lg text-black mb-4">Portal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li><Link
                  to="/about"
                  className="text-white hover:underline"
                >
                  About
                </Link></li>
                <li><Link
                  to="/varieties"
                  className="text-white hover:underline"
                >
                  Search
                </Link></li>
                <li><Link
                  to="/contact"
                  className="text-white hover:underline"
                >
                  Contact
                </Link></li>
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="font-bold text-lg text-black mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link
                  to="/cakes"
                  className="text-white hover:underline"
                >
                  Cakes
                </Link></li>
                <li><Link
                  to="/icecream"
                  className="text-white hover:underline"
                >
                  Ice Cream
                </Link></li>
                <li><Link
                  to="/dryfruits"
                  className="text-white hover:underline"
                >
                  Dry Fruits
                </Link></li>
                <li><Link
                  to="/biscuits"
                  className="text-white hover:underline"
                >
                  Biscuits
                </Link></li>
                <li><Link
                  to="/fastfood"
                  className="text-white hover:underline"
                >
                  Fast Food
                </Link></li>
                <li><Link
                  to="/drinks"
                  className="text-white hover:underline"
                >
                  Drinks
                </Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-bold text-lg text-black mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link
                  to="/termsandconditions"
                  className="text-white hover:underline"
                >
                  Terms and Conditions
                </Link></li>
                <li><Link
                  to="/privacypolicy"
                  className="text-white hover:underline"
                >
                  Privacy Policy
                </Link></li>
                <li><Link
                  to="/returnandexchange"
                  className="text-white hover:underline"
                >
                  Return and Exchange Policy
                </Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 sm:mt-8">
            <div className="flex justify-start space-x-6">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white">
                <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white">
                <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="border-t border-white mt-6 pt-4">
        <p className="text-center text-sm sm:text-base text-black">
          © 2024 Dayaram Sweets | All rights reserved | Powered by SKS Web Services
        </p>
      </div>
    </footer>
  );
};

export default Footer;
