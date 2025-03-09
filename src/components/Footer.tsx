
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-5">SmartCardTech</h3>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of smart card solutions and RFID technology, empowering businesses with secure and efficient identification systems.
            </p>
            <div className="flex space-x-4 pt-2">
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

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-5">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/smart-cards" className="text-gray-400 hover:text-white transition-colors">
                  Smart Cards
                </Link>
              </li>
              <li>
                <Link to="/products/rfid-solutions" className="text-gray-400 hover:text-white transition-colors">
                  RFID Technology
                </Link>
              </li>
              <li>
                <Link to="/products/membership-cards" className="text-gray-400 hover:text-white transition-colors">
                  Membership Cards
                </Link>
              </li>
              <li>
                <Link to="/products/scratch-cards" className="text-gray-400 hover:text-white transition-colors">
                  Scratch Cards
                </Link>
              </li>
              <li>
                <Link to="/products/access-control" className="text-gray-400 hover:text-white transition-colors">
                  Access Control
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-gray-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  123 Smart Card Avenue, Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-gray-400 flex-shrink-0" size={18} />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-gray-400 flex-shrink-0" size={18} />
                <a href="mailto:info@smartcardtech.com" className="text-gray-400 hover:text-white transition-colors">
                  info@smartcardtech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SmartCardTech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
