
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Cpu, ChevronRight } from 'lucide-react';

const RfidSolutions = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">RFID Solutions</h1>
            <p className="text-xl text-gray-600">
              Contactless identification technology for efficient tracking, authentication, and data exchange across multiple applications.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="text-purple-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Advanced RFID Technology</h2>
              <p className="text-gray-600 mb-4">
                Our RFID solutions utilize cutting-edge radio frequency identification technology to enable contactless data capture and seamless asset tracking across various environments.
              </p>
              <p className="text-gray-600 mb-6">
                With both passive and active RFID options available, we can customize the perfect solution for your specific range, data storage, and security requirements.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Technology Features:</h3>
                <ul className="space-y-2">
                  {['Multiple frequency options (LF, HF, UHF)', 'Extended read ranges', 'Bulk scanning capabilities', 'Environmentally rugged design'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1617994679330-58dab36963ef?q=80&w=2070" 
                alt="RFID Technology" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold mb-6">Industry Applications</h2>
              <p className="text-gray-600 mb-4">
                RFID technology has revolutionized operations across numerous industries, providing unprecedented visibility into supply chains, inventory management, and access control.
              </p>
              <p className="text-gray-600 mb-6">
                Our solutions can be tailored to meet specific industry standards and regulatory requirements while delivering improved efficiency and accuracy.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Industry Solutions:</h3>
                <ul className="space-y-2">
                  {['Retail inventory management', 'Manufacturing supply chain', 'Healthcare asset tracking', 'Logistics and warehousing', 'Event management'].map((app, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-last lg:order-first relative">
              <img 
                src="https://images.unsplash.com/photo-1566669347682-51d59354de6a?q=80&w=2070" 
                alt="RFID Applications" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RFID Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">RFID Technology Types</h2>
            <p className="text-gray-600">
              We offer a complete range of RFID solutions to meet different operational requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Passive RFID</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• No internal power source</li>
                <li>• Reader-powered operation</li>
                <li>• Lower cost per tag</li>
                <li>• Shorter read ranges</li>
                <li>• Ideal for access control</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Active RFID</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Battery-powered</li>
                <li>• Extended read ranges</li>
                <li>• Continuous signal transmission</li>
                <li>• Higher data storage capacity</li>
                <li>• Ideal for real-time tracking</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Semi-Passive RFID</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Battery-assisted</li>
                <li>• Longer read range than passive</li>
                <li>• Extended battery life</li>
                <li>• Sensor capabilities</li>
                <li>• Ideal for environmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white mt-auto">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to implement RFID technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your specific requirements and discover how our RFID solutions can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link 
                to="/products" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RfidSolutions;
