
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Layers, ChevronRight } from 'lucide-react';

const MembershipCards = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Membership Cards</h1>
            <p className="text-xl text-gray-600">
              Personalized cards with integrated technology for loyalty programs, club memberships, and organization access.
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
                <Layers className="text-green-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Customized Membership Solutions</h2>
              <p className="text-gray-600 mb-4">
                Our membership cards are fully customizable to reflect your brand identity while incorporating the latest in smart card technology for enhanced functionality.
              </p>
              <p className="text-gray-600 mb-6">
                From design to production, we offer end-to-end solutions that can integrate with your existing membership management systems or help you build a new program from the ground up.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Design Options:</h3>
                <ul className="space-y-2">
                  {['Custom graphics and branding', 'Multiple material choices', 'Specialty finishes and effects', 'Sustainable eco-friendly options'].map((feature, i) => (
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
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070" 
                alt="Membership Cards" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold mb-6">Loyalty Program Integration</h2>
              <p className="text-gray-600 mb-4">
                Transform your customer engagement with integrated loyalty programs that track purchases, award points, and deliver personalized rewards.
              </p>
              <p className="text-gray-600 mb-6">
                Our membership card solutions include easy-to-use management software that provides valuable analytics on member behavior and program performance.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Loyalty Features:</h3>
                <ul className="space-y-2">
                  {['Points accumulation and redemption', 'Tiered membership levels', 'Personalized offers and rewards', 'Birthday and anniversary recognition', 'Integration with POS systems'].map((app, i) => (
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
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2070" 
                alt="Loyalty Program" 
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
            <h2 className="text-3xl font-bold mb-6">Membership Card Applications</h2>
            <p className="text-gray-600">
              Our membership cards are adaptable to a wide range of organizations and purposes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Retail & Hospitality</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Store loyalty programs</li>
                <li>• Restaurant membership clubs</li>
                <li>• Hotel rewards cards</li>
                <li>• Shopping mall VIP passes</li>
                <li>• Entertainment venue memberships</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Clubs & Associations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Sports club memberships</li>
                <li>• Professional associations</li>
                <li>• Alumni organizations</li>
                <li>• Community groups</li>
                <li>• Exclusive clubs</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Corporate & Education</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Employee ID badges</li>
                <li>• Corporate benefits cards</li>
                <li>• Student ID cards</li>
                <li>• Library memberships</li>
                <li>• Campus access cards</li>
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
              Ready to launch your membership program?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your membership card requirements and discover how we can help increase customer loyalty and engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
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

export default MembershipCards;
