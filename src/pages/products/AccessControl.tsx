
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

const AccessControl = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-red-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Access Control</h1>
            <p className="text-xl text-gray-600">
              Comprehensive systems combining smart cards, readers, and software for secure facility and resource access management.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Integrated Security Solutions</h2>
              <p className="text-gray-600 mb-4">
                Our access control systems provide comprehensive security for your facilities, combining smart card technology with advanced readers and management software.
              </p>
              <p className="text-gray-600 mb-6">
                From single-door solutions to enterprise-wide systems, we offer scalable options that can grow with your organization while maintaining the highest security standards.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">System Components:</h3>
                <ul className="space-y-2">
                  {['Smart card credentials', 'Secure card readers', 'Door controllers', 'Management software', 'Monitoring systems'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070" 
                alt="Access Control" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold mb-6">Advanced Features</h2>
              <p className="text-gray-600 mb-4">
                Our access control systems go beyond simple door locks, offering advanced security features and integration capabilities that enhance your overall security posture.
              </p>
              <p className="text-gray-600 mb-6">
                With real-time monitoring, detailed reporting, and flexible permission management, you have complete control over who enters your facilities and when.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Security Capabilities:</h3>
                <ul className="space-y-2">
                  {['Multi-factor authentication', 'Time-based access restrictions', 'Anti-passback prevention', 'Visitor management', 'Emergency lockdown procedures'].map((app, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-last lg:order-first relative">
              <img 
                src="https://images.unsplash.com/photo-1545161296-d9c2c9f607c3?q=80&w=2070" 
                alt="Advanced Security" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Access Control Applications</h2>
            <p className="text-gray-600">
              Our access control systems can be deployed across a wide range of environments and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Corporate Facilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Office buildings</li>
                <li>• Data centers</li>
                <li>• Research facilities</li>
                <li>• Manufacturing plants</li>
                <li>• Corporate campuses</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Government & Public</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Government buildings</li>
                <li>• Educational institutions</li>
                <li>• Healthcare facilities</li>
                <li>• Transportation hubs</li>
                <li>• Utilities infrastructure</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Commercial & Retail</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Retail locations</li>
                <li>• Hotels and hospitality</li>
                <li>• Entertainment venues</li>
                <li>• Multi-tenant buildings</li>
                <li>• Residential complexes</li>
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
              Ready to enhance your security?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your access control requirements and discover the right solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
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

export default AccessControl;
