
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Workflow, Settings, MessageSquare, Wrench, Puzzle, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Card Personalization',
      path: '/services/card-personalization',
      icon: <Puzzle className="text-purple-600" size={24} />,
      description: 'Custom printing, encoding, and programming of smart cards to meet your specific requirements and branding standards.',
      features: [
        'High-quality printing capabilities',
        'Variable data encoding',
        'Multi-factor security features',
        'Brand-aligned design services'
      ],
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070'
    },
    {
      id: 2,
      title: 'System Integration',
      path: '/services/system-integration',
      icon: <Workflow className="text-blue-600" size={24} />,
      description: 'Seamless integration of smart card technology with your existing IT infrastructure, security systems, and business processes.',
      features: [
        'Custom API development',
        'Legacy system compatibility',
        'Cross-platform solutions',
        'Phased implementation options'
      ],
      image: 'https://images.unsplash.com/photo-1617994679330-58dab36963ef?q=80&w=2070'
    },
    {
      id: 3,
      title: 'Consulting',
      path: '/services/consulting',
      icon: <MessageSquare className="text-green-600" size={24} />,
      description: 'Expert guidance on smart card implementation, security best practices, and technology selection tailored to your organization.',
      features: [
        'Needs assessment',
        'Solution architecture',
        'Security audit services',
        'Cost-benefit analysis'
      ],
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232'
    },
    {
      id: 4,
      title: 'Maintenance',
      path: '/services/maintenance',
      icon: <Wrench className="text-amber-600" size={24} />,
      description: 'Comprehensive support and maintenance services to ensure optimal performance and longevity of your smart card systems.',
      features: [
        'Preventive maintenance',
        'Emergency support',
        'Performance monitoring',
        'Regular system updates'
      ],
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070'
    },
    {
      id: 5,
      title: 'Custom Solutions',
      path: '/services/custom-solutions',
      icon: <Settings className="text-red-600" size={24} />,
      description: 'Bespoke smart card solutions developed from the ground up to address unique business challenges and requirements.',
      features: [
        'Custom software development',
        'Specialized hardware integration',
        'End-to-end solution design',
        'Ongoing evolution support'
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070'
    }
  ];

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive smart card solutions to support your business at every stage, from consultation to implementation and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to={service.path} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Support Your Business
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive range of services is designed to provide end-to-end support for all your smart card implementation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="flex flex-col lg:flex-row gap-10 items-center"
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="p-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <ChevronRight className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      to={service.path} 
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg font-medium transition-colors duration-200"
                    >
                      View Service Details
                      <ChevronRight size={18} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Service Process</h2>
            <p className="text-lg text-gray-300">
              We follow a structured approach to ensure successful implementation of smart card solutions tailored to your needs.
            </p>
          </div>

          <div className="relative">
            {/* Desktop process line */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-1 bg-blue-600/30 transform -translate-x-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-16 mb-8 md:mb-0">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3">1. Consultation</h3>
                    <p className="text-gray-300">
                      We begin with a thorough consultation to understand your business needs, challenges, and objectives for implementing smart card technology.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transform -translate-x-1/2">
                    <span className="text-xl font-bold">1</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transform translate-x-1/2">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                <div className="md:pl-16">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3">2. Solution Design</h3>
                    <p className="text-gray-300">
                      Our experts design a customized solution that addresses your specific requirements, including hardware, software, and integration aspects.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-16 mb-8 md:mb-0">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3">3. Implementation</h3>
                    <p className="text-gray-300">
                      We handle the complete implementation process, including system setup, integration with existing platforms, and thorough testing.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transform -translate-x-1/2">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="hidden md:flex justify-end items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transform translate-x-1/2">
                    <span className="text-xl font-bold">4</span>
                  </div>
                </div>
                <div className="md:pl-16">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3">4. Training & Support</h3>
                    <p className="text-gray-300">
                      We provide comprehensive training for your team and offer ongoing support to ensure smooth operation of your smart card system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Contact our team today to discuss your smart card service needs and discover how we can help you implement the perfect solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                  >
                    Request a Consultation
                  </Link>
                  <Link 
                    to="/gallery" 
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative h-full min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070" 
                  alt="Smart card technology" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
