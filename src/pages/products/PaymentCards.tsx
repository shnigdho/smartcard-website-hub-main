
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Key, ChevronRight } from 'lucide-react';

const ScratchCards = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Scratch Cards</h1>
            <p className="text-xl text-gray-600">
              Secure prepaid and promotional cards with concealed information protected by a scratch-off layer.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Key className="text-amber-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Secure Scratch Card Solutions</h2>
              <p className="text-gray-600 mb-4">
                Our scratch cards combine advanced security features with eye-catching designs to create effective promotional and prepaid solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Using specialized printing techniques and tamper-evident materials, we ensure your scratch cards maintain their integrity and resist counterfeit attempts.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Security Features:</h3>
                <ul className="space-y-2">
                  {['Tamper-evident scratch panels', 'Unique serial numbers', 'Holographic overlays', 'UV-reactive inks', 'Anti-copying patterns'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-amber-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232" 
                alt="Scratch Cards" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold mb-6">Applications and Uses</h2>
              <p className="text-gray-600 mb-4">
                Scratch cards are versatile tools that can be used for a wide range of purposes, from promotional campaigns to prepaid services.
              </p>
              <p className="text-gray-600 mb-6">
                Our cards can be customized to suit your specific needs, whether you're looking to drive customer engagement, provide secure access to services, or create memorable marketing campaigns.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Popular Applications:</h3>
                <ul className="space-y-2">
                  {['Prepaid phone cards', 'Lottery and gaming', 'Promotional campaigns', 'Gift cards and vouchers', 'Loyalty program rewards'].map((app, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-amber-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-last lg:order-first relative">
              <img 
                src="https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=2070" 
                alt="Scratch Card Applications" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Scratch Card Features</h2>
            <p className="text-gray-600">
              Our scratch cards come with a variety of features to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Design Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Full-color custom printing</li>
                <li>• Metallic and specialty inks</li>
                <li>• Custom shapes and sizes</li>
                <li>• Eco-friendly materials</li>
                <li>• Scannable QR codes</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Security Elements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Secure PIN generation</li>
                <li>• Validation databases</li>
                <li>• Unique identifiers</li>
                <li>• Secure shipping options</li>
                <li>• Real-time activation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Integration Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Online validation systems</li>
                <li>• Mobile app integration</li>
                <li>• Retail POS compatibility</li>
                <li>• Digital redemption options</li>
                <li>• Analytics and reporting</li>
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
              Ready to create custom scratch cards?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your scratch card requirements and get started on your custom solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
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

export default ScratchCards;
