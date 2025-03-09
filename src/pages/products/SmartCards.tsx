
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { CreditCard, ChevronRight } from 'lucide-react';

const SmartCards = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Cards</h1>
            <p className="text-xl text-gray-600">
              Advanced chip-based cards with enhanced security features for identification, access control, and payment applications.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="text-indigo-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Advanced Security Features</h2>
              <p className="text-gray-600 mb-4">
                Our smart cards employ multiple layers of security, including encrypted chips, tamper-evident design, and advanced authentication protocols to protect sensitive data.
              </p>
              <p className="text-gray-600 mb-6">
                Each card is manufactured with precision and undergoes rigorous quality testing to ensure durability and reliable performance in various environmental conditions.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Security Features:</h3>
                <ul className="space-y-2">
                  {['256-bit encryption', 'Secure element architecture', 'Anti-cloning technology', 'Biometric verification support'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-indigo-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070" 
                alt="Smart Card" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold mb-6">Versatile Applications</h2>
              <p className="text-gray-600 mb-4">
                Our smart cards are designed to serve multiple purposes across various industries. From secure ID verification to contactless payments, our technology adapts to your specific needs.
              </p>
              <p className="text-gray-600 mb-6">
                We offer both contact and contactless interfaces, enabling seamless integration with existing systems while providing the flexibility for future technological advancements.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Common Applications:</h3>
                <ul className="space-y-2">
                  {['Corporate ID badges', 'Access control systems', 'Secure payment cards', 'Government identification', 'Healthcare record systems'].map((app, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-indigo-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-last lg:order-first relative">
              <img 
                src="https://images.unsplash.com/photo-1562604790-00ac94a06f84?q=80&w=2048" 
                alt="Smart Card Applications" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
            <p className="text-gray-600">
              Our smart cards are built with industry-leading technology to ensure security, durability, and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Chip Technology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 32-bit processor</li>
                <li>• 64KB EEPROM</li>
                <li>• Java Card OS</li>
                <li>• GlobalPlatform compliant</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Physical Characteristics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ISO/IEC 7810 ID-1 format</li>
                <li>• 85.60 × 53.98 mm</li>
                <li>• 0.76 mm thickness</li>
                <li>• Temperature resistant</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Security Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AES, DES, and 3DES encryption</li>
                <li>• RSA and ECC cryptography</li>
                <li>• Secure messaging</li>
                <li>• Anti-tampering mechanisms</li>
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
              Ready to implement smart card solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your specific requirements and discover how our products can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
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

export default SmartCards;
