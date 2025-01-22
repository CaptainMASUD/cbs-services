import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { SiApacheopenoffice, SiOnlyoffice } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <SiOnlyoffice className="text-3xl mr-2 text-green-500" />
              <span className="text-xl font-bold">Salebird Limited</span>
            </div>
            <p className="text-sm mb-4">Providing professional services since 2023</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition duration-300"><FaFacebook className="text-2xl" /></a>
              <a href="#" className="hover:text-green-400 transition duration-300"><FaTwitter className="text-2xl" /></a>
              <a href="#" className="hover:text-green-400 transition duration-300"><FaLinkedin className="text-2xl" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-400 transition duration-300">Home</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition duration-300">Services</Link></li>
              <li><Link to="/about" className="hover:text-green-400 transition duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaPhone className="mr-2 text-green-400" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-green-400" />
                <span>info@cbsservices.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-green-400" />
                <span>123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2023 CBS Services. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-green-400 hover:underline mr-4">Privacy Policy</Link>
            <Link to="/terms-of-services" className="text-sm text-green-400 hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
