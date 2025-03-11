import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { title: 'Home', path: '/' },
  {
    title: 'Products',
    path: '/products',
    dropdown: [
      { title: 'Smart Cards', path: '/products/smart-cards' },
      { title: 'RFID Solutions', path: '/products/rfid-solutions' },
      { title: 'Membership Cards', path: '/products/membership-cards' },
      { title: 'Scratch Cards', path: '/products/scratch-cards' },
      { title: 'Sim Cards', path: '/products/sim-cards' },
    ],
  },
  {
    title: 'Services',
    path: '/services',
    dropdown: [
      { title: 'Card Personalization', path: '/services/card-personalization' },
      { title: 'System Integration', path: '/services/system-integration' },
      { title: 'Consulting', path: '/services/consulting' },
      { title: 'Maintenance', path: '/services/maintenance' },
      { title: 'Custom Solutions', path: '/services/custom-solutions' },
    ],
  },
  { title: 'Gallery', path: '/gallery' },
  { title: 'About Us', path: '/about' },
  { title: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-200 to-blue-400 shadow-lg py-4 transition-all duration-500 ease-in-out">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        </Link>
        
        <nav className="hidden lg:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.title} className="relative group">
              <Link to={item.path} className={`relative text-gray-800 font-medium text-lg transition-all duration-300 hover:text-blue-700 ${location.pathname === item.path ? 'after:content-[\"\"] after:block after:h-[3px] after:w-full after:bg-blue-700' : ''}`}>
                {item.title}
              </Link>
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform scale-95 group-hover:scale-100">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out"
                    >
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <Link to="/contact" className="hidden lg:block px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-500 ease-in-out transform hover:scale-105">
          Get Started
        </Link>
        
        <button className="lg:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-blue-200 to-blue-400 shadow-md py-4 transition-all duration-500 ease-in-out transform scale-95">
          {NAV_ITEMS.map((item) => (
            <div key={item.title} className="px-6 py-2 border-b border-blue-300">
              <Link to={item.path} className="block text-gray-800 font-medium text-lg hover:text-blue-700 transition duration-500 ease-in-out">
                {item.title}
              </Link>
              {item.dropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className="block text-gray-700 hover:text-blue-700 transition duration-500 ease-in-out"
                    >
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-6 py-4">
            <Link to="/contact" className="block text-center text-white bg-gradient-to-r from-blue-500 to-blue-700 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-500 ease-in-out transform hover:scale-105">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
