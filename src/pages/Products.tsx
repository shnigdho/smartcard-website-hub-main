
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { CreditCard, Cpu, Layers, Key, Shield, ChevronRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Smart Cards',
      path: '/products/smart-cards',
      icon: <CreditCard className="text-blue-600" size={24} />,
      description: 'Advanced chip-based cards with enhanced security features for identification, access control, and payment applications.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070',
      features: [
        'Contact and contactless interfaces',
        'Advanced encryption protocols',
        'Tamper-evident design',
        'Customizable appearance'
      ]
    },
    {
      id: 2,
      title: 'RFID Solutions',
      path: '/products/rfid-solutions',
      icon: <Cpu className="text-purple-600" size={24} />,
      description: 'Contactless identification technology for efficient tracking, authentication, and data exchange across multiple applications.',
      image: 'https://images.unsplash.com/photo-1617994679330-58dab36963ef?q=80&w=2070',
      features: [
        'Long-range reading capabilities',
        'Bulk reading of multiple tags',
        'Durable tag construction',
        'Encrypted data transmission'
      ]
    },
    {
      id: 3,
      title: 'Membership Cards',
      path: '/products/membership-cards',
      icon: <Layers className="text-green-600" size={24} />,
      description: 'Personalized cards with integrated technology for loyalty programs, club memberships, and organization access.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070',
      features: [
        'Custom branding options',
        'Integrated loyalty programs',
        'Multi-tiered access levels',
        'Analytics and reporting'
      ]
    },
    {
      id: 4,
      title: 'Scratch Cards',
      path: '/products/scratch-cards',
      icon: <Key className="text-amber-600" size={24} />,
      description: 'Secure prepaid and promotional cards with concealed information protected by a scratch-off layer.',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232',
      features: [
        'Tamper-evident scratch panels',
        'Secure printing technology',
        'Anti-counterfeiting features',
        'Customizable designs'
      ]
    },
    {
      id: 5,
      title: 'Access Control',
      path: '/products/access-control',
      icon: <Shield className="text-red-600" size={24} />,
      description: 'Comprehensive systems combining smart cards, readers, and software for secure facility and resource access management.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070',
      features: [
        'Multi-factor authentication',
        'Time-based access restrictions',
        'Real-time monitoring',
        'Integration with existing systems'
      ]
    }
  ];

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-600">
              Explore our comprehensive range of smart card solutions designed for security, efficiency, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-20">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="flex flex-col lg:flex-row gap-10 items-center"
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="p-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      {product.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">
                      {product.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <ChevronRight className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to={product.path} 
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg font-medium transition-colors duration-200"
                    >
                      Learn More
                      <ChevronRight size={18} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white mt-auto">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to implement a smart card solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to discuss your specific requirements and discover how our products can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
