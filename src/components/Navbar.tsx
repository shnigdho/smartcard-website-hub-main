
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

interface DropdownItem {
  title: string;
  path: string;
}

interface NavItem {
  title: string;
  path: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  { title: 'Home', path: '/' },
  { 
    title: 'Products', 
    path: '/products',
    dropdown: [
      { title: 'Smart Cards', path: '/products/smart-cards' },
      { title: 'RFID Solutions', path: '/products/rfid-solutions' },
      { title: 'Membership Cards', path: '/products/membership-cards' },
      { title: 'Scratch Cards', path: '/products/scratch-cards' },
      { title: 'Access Control', path: '/products/access-control' },
    ]
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
    ]
  },
  { title: 'Gallery', path: '/gallery' },
  { title: 'About Us', path: '/about' },
  { title: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});
  const location = useLocation();

  // Initialize refs for each dropdown
  useEffect(() => {
    NAV_ITEMS.forEach(item => {
      if (item.dropdown) {
        dropdownRefs.current[item.title] = React.createRef();
      }
    });
  }, []);

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside of dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null) {
        const activeRef = dropdownRefs.current[activeDropdown];
        if (activeRef?.current && !activeRef.current.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(prev => prev === title ? null : title);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-md py-3' : 'py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={closeDropdown}
          >
            <span className="text-xl font-bold tracking-tighter text-primary">
              SmartCard<span className="text-blue-500">Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.title} className="relative" ref={item.dropdown ? dropdownRefs.current[item.title] : undefined}>
                {item.dropdown ? (
                  <>
                    <button
                      className={`nav-item ${location.pathname === item.path || location.pathname.startsWith(item.path + '/') ? 'text-blue-600' : ''}`}
                      onClick={() => toggleDropdown(item.title)}
                      aria-expanded={activeDropdown === item.title}
                    >
                      {item.title}
                      <ChevronDown 
                        size={18} 
                        className={`ml-1 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div 
                      className={`nav-dropdown z-50 ${activeDropdown === item.title ? 'nav-dropdown-visible' : ''}`}
                      style={{ transformOrigin: 'top center' }}
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-5 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                            onClick={closeDropdown}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-item ${location.pathname === item.path ? 'text-blue-600' : ''}`}
                    onClick={closeDropdown}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="text-xl font-bold" onClick={() => setMobileMenuOpen(false)}>
              SmartCard<span className="text-blue-500">Tech</span>
            </Link>
            <button
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.title}>
                  {item.dropdown ? (
                    <div className="mb-2">
                      <button
                        className={`flex items-center justify-between w-full p-3 text-left text-gray-800 ${
                          activeDropdown === item.title ? 'bg-gray-100 rounded-lg' : ''
                        }`}
                        onClick={() => toggleDropdown(item.title)}
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div 
                        className={`mt-1 ml-4 pl-2 border-l-2 border-gray-200 overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block py-2.5 px-3 text-gray-600 hover:text-gray-900"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block p-3 rounded-lg ${
                        location.pathname === item.path 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-800 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t">
            <Link
              to="/contact"
              className="block w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
