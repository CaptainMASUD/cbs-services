import React from "react"
import { FaBuilding, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <FaBuilding className="text-3xl mr-2 text-blue-400" />
              <span className="text-xl font-bold">CBS Services</span>
            </div>
            <p className="text-sm">Providing professional services since 2023</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>info@cbsservices.com</span>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2023 CBS Services. All rights reserved.</p>
          <Link to="/privacy-policy" className="text-sm text-blue-400 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

