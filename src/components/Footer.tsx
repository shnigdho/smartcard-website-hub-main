
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

import logoImage from '../assets/logo1.png';



const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-white text-black">
      {/* CTA Section */}
      <div className="bg-gray-800 py-8">
        <div className="container-custom text-center">
          {/* <h2 className="text-2xl font-semibold mb-4">Empower Your Business with SmartCardTech</h2> */}
          <p className="text-gray-400 mb-6">
            {/* Discover innovative solutions for secure identification and access control. */}
          </p>

          <div className="overflow-hidden relative">
            <div className="flex animate-carousel">
              <div className="flex-shrink-0 w-32 h-32 mx-4">
                <img src={logoImage} alt="clint1" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          <a
            // href="/contact"
            // className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            {/* Contact Us */}
          </a>
        </div>
      </div>

      

      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: About and Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">SmartCardTech</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of smart card solutions and RFID technology, empowering businesses with secure and efficient identification systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Home", to: "/" },
                  { label: "Products", to: "/products" },
                  { label: "Services", to: "/services" },
                  { label: "Gallery", to: "/gallery" },
                  { label: "About Us", to: "/about" },
                  { label: "Contact Us", to: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-gray-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-400 text-sm">
                    376/B, Uttarkhan (Muktar Bari), Shah Kabir Mazhar Road, Uttarkhan, Dhaka-1230 Bangladesh.
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 text-gray-400 flex-shrink-0" size={18} />
                  <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +8801861678838
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 text-gray-400 flex-shrink-0" size={18} />
                  <a href="mailto:info@smartcardtech.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    info@galaxytech.com.bd
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom text-center">
          <p className="text-gray-500 text-sm">
            &copy;  Sabbir Ahmmed (Galaxy Technology Bangladesh Limited) All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;