
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Wrench, ChevronRight } from 'lucide-react';

const Maintenance = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Maintenance Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive support and maintenance services to ensure optimal performance and longevity of your smart card systems.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="text-orange-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Proactive System Maintenance</h2>
              <p className="text-gray-600 mb-4">
                Our maintenance services are designed to keep your smart card systems running at peak performance, preventing issues before they impact your operations.
              </p>
              <p className="text-gray-600 mb-6">
                We offer flexible maintenance plans that can be tailored to your specific needs, from basic support to comprehensive 24/7 coverage.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Maintenance Services:</h3>
                <ul className="space-y-2">
                  {['Scheduled system inspections', 'Preventive maintenance', 'Software updates and patches', 'Hardware diagnostics', 'Performance optimization'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070" 
                alt="System Maintenance" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold mb-6">Responsive Support</h2>
              <p className="text-gray-600 mb-4">
                When issues do arise, our dedicated support team is ready to respond quickly, minimizing downtime and resolving problems efficiently.
              </p>
              <p className="text-gray-600 mb-6">
                With multiple support channels and experienced technicians, we ensure you always have access to the help you need, when you need it.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Support Features:</h3>
                <ul className="space-y-2">
                  {['Dedicated support portal', 'Multi-channel assistance', 'Remote diagnostics', 'Emergency on-site support', 'Detailed incident reporting'].map((app, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-last lg:order-first relative">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069" 
                alt="Support Services" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Maintenance & Support Plans</h2>
            <p className="text-gray-600">
              Choose the level of support that's right for your organization's needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-gray-500 text-sm">For smaller organizations</p>
              </div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Business hours support</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Email & phone assistance</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Quarterly maintenance</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Software updates</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Knowledge base access</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/contact" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-orange-200 transform scale-105">
              <div className="mb-4 text-center">
                <span className="bg-orange-100 text-orange-600 text-xs font-semibold py-1 px-3 rounded-full">POPULAR</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Standard</h3>
                <p className="text-gray-500 text-sm">For medium organizations</p>
              </div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Extended hours support</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Priority response times</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Monthly maintenance</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Remote troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Dedicated support manager</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/contact" className="inline-flex bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg items-center font-medium">
                  Contact Us <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <p className="text-gray-500 text-sm">For enterprise needs</p>
              </div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>24/7 support availability</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Emergency on-site support</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Weekly maintenance</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Customized SLAs</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Proactive monitoring</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/contact" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white mt-auto">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Keep your systems running smoothly
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your maintenance and support requirements and find the right plan for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maintenance;
