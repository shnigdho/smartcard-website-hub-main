
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Puzzle, ChevronRight } from 'lucide-react';

const CardPersonalization = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-rose-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Card Personalization</h1>
            <p className="text-xl text-gray-600">
              Custom printing, encoding, and programming of smart cards to meet your specific requirements and branding standards.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <Puzzle className="text-rose-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Custom Card Production</h2>
              <p className="text-gray-600 mb-4">
                Our card personalization services transform blank cards into fully-functional, branded identification tools that represent your organization professionally.
              </p>
              <p className="text-gray-600 mb-6">
                We handle every aspect of card creation from graphic design and layout to printing, encoding, and quality assurance testing.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Personalization Options:</h3>
                <ul className="space-y-2">
                  {['Full-color printing', 'Variable data and images', 'QR and barcodes', 'Magnetic stripe encoding', 'Chip programming'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-rose-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070" 
                alt="Card Personalization" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
            <div className="order-first lg:order-last">
              <h2 className="text-3xl font-bold mb-6">Secure Production Process</h2>
              <p className="text-gray-600 mb-4">
                Security is paramount in our card personalization process. We maintain strict protocols to ensure your sensitive data and card materials are protected throughout production.
              </p>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art facilities include secure areas for data handling, controlled access to production equipment, and comprehensive tracking systems.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Security Measures:</h3>
                <ul className="space-y-2">
                  {['Secure data transmission', 'Controlled production environment', 'Serialized inventory control', 'Secure destruction of waste', 'Audit trails and reporting'].map((app, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="text-rose-600 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-last lg:order-first relative">
              <img 
                src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2070" 
                alt="Secure Production" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Personalization Process</h2>
            <p className="text-gray-600">
              We follow a comprehensive process to ensure your cards meet the highest standards of quality and functionality.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-1 bg-rose-200 transform -translate-x-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 gap-12 relative z-10">
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-16 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">1. Consultation & Design</h3>
                    <p className="text-gray-600">
                      We begin by understanding your requirements and creating custom designs that align with your brand identity.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="text-xl font-bold">1</span>
                  </div>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center transform translate-x-1/2">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                <div className="md:pl-16">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">2. Data Preparation</h3>
                    <p className="text-gray-600">
                      Your variable data is securely processed and prepared for integration with the card design.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-16 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">3. Production</h3>
                    <p className="text-gray-600">
                      Cards are printed, encoded, and programmed according to your specifications in our secure facility.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center transform translate-x-1/2">
                    <span className="text-xl font-bold">4</span>
                  </div>
                </div>
                <div className="md:pl-16">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">4. Quality Control</h3>
                    <p className="text-gray-600">
                      Each card undergoes rigorous testing to ensure visual quality and proper functionality.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-16">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">5. Delivery & Support</h3>
                    <p className="text-gray-600">
                      Finished cards are securely packaged and delivered, with ongoing support for any questions or issues.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center transform -translate-x-1/2">
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
              Ready to create personalized cards?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your card personalization requirements and get started on your custom solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-rose-600 hover:bg-rose-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
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

export default CardPersonalization;
