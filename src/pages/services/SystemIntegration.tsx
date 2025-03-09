
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Workflow, ChevronRight } from 'lucide-react';

const SystemIntegration = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">System Integration</h1>
            <p className="text-xl text-gray-600">
              Seamless integration of smart card technology with your existing IT infrastructure, security systems, and business processes.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Workflow className="text-cyan-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Seamless Integration Solutions</h2>
              <p className="text-gray-600 mb-4">
                Our integration services ensure that smart card technology works harmoniously with your existing systems, minimizing disruption while maximizing functionality.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in connecting smart card systems with various enterprise applications, including access control, time and attendance, payment processing, and more.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Integration Capabilities:</h3>
                <ul className="space-y-2">
                  {['API development and implementation', 'Database synchronization', 'Legacy system compatibility', 'Cloud service integration', 'Mobile application connectivity'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034" 
                alt="System Integration" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold mb-6">Custom Development Approach</h2>
              <p className="text-gray-600 mb-4">
                We understand that every organization has unique requirements. Our team of experienced developers creates tailored integration solutions that address your specific needs.
              </p>
              <p className="text-gray-600 mb-6">
                Using industry-standard protocols and best practices, we ensure secure, reliable connections between your smart card system and other critical business applications.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Development Services:</h3>
                <ul className="space-y-2">
                  {['Custom middleware creation', 'Protocol adapters', 'Data transformation services', 'Automated synchronization tools', 'Integration testing and validation'].map((app, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-last lg:order-first relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" 
                alt="Custom Development" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Integration Types</h2>
            <p className="text-gray-600">
              We offer a wide range of integration solutions to connect your smart card system with other enterprise applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Access Control</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Physical security systems</li>
                <li>• Door controllers</li>
                <li>• Elevator management</li>
                <li>• Visitor management</li>
                <li>• Alarm and monitoring systems</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">HR & Identity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Employee databases</li>
                <li>• Time and attendance</li>
                <li>• Payroll systems</li>
                <li>• Training and compliance</li>
                <li>• Single sign-on solutions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Business Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ERP systems</li>
                <li>• CRM platforms</li>
                <li>• Payment processing</li>
                <li>• Loyalty programs</li>
                <li>• Resource management</li>
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
              Ready to integrate smart card technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your integration requirements and discover how we can connect your systems seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
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

export default SystemIntegration;
