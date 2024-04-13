// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Follow Us */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us on 
            <span></span>
            </h2>
            <div className="flex items-center mb-4 space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-square text-3xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter-square text-3xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram-square text-3xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <nav>
              <ul>
                <li><a href="#" className="text-white hover:text-gray-300 block mb-2">Home</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 block mb-2">About Us</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 block mb-2">Services</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 block mb-2">Contact Us</a></li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div>
            <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex items-center">
              <input type="email" placeholder="Your email address" className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright and Disclaimer */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Application. All rights reserved.</p>
          <p className="mt-2">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
