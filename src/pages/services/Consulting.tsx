
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronRight } from 'lucide-react';

const Consulting = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consulting Services</h1>
            <p className="text-xl text-gray-600">
              Expert guidance on smart card implementation, security best practices, and technology selection tailored to your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="text-green-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Strategic Technology Advisory</h2>
              <p className="text-gray-600 mb-4">
                Our consulting services provide the expert guidance you need to make informed decisions about smart card technology implementation and optimization.
              </p>
              <p className="text-gray-600 mb-6">
                With deep industry knowledge and technical expertise, our consultants help you navigate the complex landscape of smart card solutions to find the perfect fit for your organization.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Consulting Areas:</h3>
                <ul className="space-y-2">
                  {['Technology selection', 'System architecture design', 'Security assessment', 'Compliance guidance', 'Implementation planning'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232" 
                alt="Consulting Services" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold mb-6">Needs Assessment & Solution Design</h2>
              <p className="text-gray-600 mb-4">
                We begin every consulting engagement with a thorough assessment of your current situation, requirements, and objectives to develop a clear picture of your needs.
              </p>
              <p className="text-gray-600 mb-6">
                Based on this assessment, we create a detailed roadmap that outlines the recommended technologies, processes, and implementation steps to achieve your goals.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Assessment Components:</h3>
                <ul className="space-y-2">
                  {['Current system evaluation', 'Requirements gathering', 'Gap analysis', 'Risk assessment', 'Cost-benefit analysis'].map((app, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-last lg:order-first relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" 
                alt="Needs Assessment" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Consulting Approach</h2>
            <p className="text-gray-600">
              We follow a structured methodology designed to deliver maximum value at every stage of your smart card project.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-1 bg-green-200 transform -translate-x-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 gap-12 relative z-10">
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-16 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">1. Discovery</h3>
                    <p className="text-gray-600">
                      We gather information about your current systems, processes, and objectives through interviews, surveys, and on-site assessments.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="text-xl font-bold">1</span>
                  </div>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center transform translate-x-1/2">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                <div className="md:pl-16">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">2. Analysis</h3>
                    <p className="text-gray-600">
                      We analyze the gathered information to identify requirements, gaps, and potential challenges in implementing smart card technology.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-16 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">3. Solution Design</h3>
                    <p className="text-gray-600">
                      We develop a comprehensive solution design that addresses your specific needs, including technology selection and implementation approach.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center transform translate-x-1/2">
                    <span className="text-xl font-bold">4</span>
                  </div>
                </div>
                <div className="md:pl-16">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">4. Recommendation</h3>
                    <p className="text-gray-600">
                      We present our findings and recommendations, including detailed implementation plans, cost projections, and expected benefits.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-16">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">5. Implementation Support</h3>
                    <p className="text-gray-600">
                      We provide ongoing guidance and support throughout the implementation process to ensure successful deployment of your smart card solution.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="text-xl font-bold">5</span>
                  </div>
                </div>
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
              Ready for expert guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to schedule a consultation and discover how our expertise can help you implement the right smart card solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                Schedule a Consultation
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

export default Consulting;
