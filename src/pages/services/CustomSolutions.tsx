
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Settings, ChevronRight, Check } from 'lucide-react';

const CustomSolutions = () => {
  const features = [
    "Bespoke software development tailored to your unique requirements",
    "Custom hardware integration with existing systems",
    "Industry-specific smart card adaptations",
    "Proprietary security protocols implementation",
    "Specialized interface design for your organization",
    "Custom reporting and analytics dashboards",
    "Integration with your proprietary systems"
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Healthcare Provider Access Management",
      description: "Developed a custom solution for a major hospital chain to manage staff access across multiple facilities with varying security levels.",
      results: ["Reduced unauthorized access incidents by 94%", "Streamlined staff onboarding process by 65%", "Integrated with existing HR and security systems"]
    },
    {
      id: 2,
      title: "University Multifunction Card System",
      description: "Created a comprehensive smart card solution for a university that combined student ID, building access, library functions, and payment systems.",
      results: ["Unified 5 separate card systems into one", "Reduced administrative overhead by 70%", "Enabled new service integrations in 1/3 the previous time"]
    },
    {
      id: 3, 
      title: "Manufacturing Facility Compliance Tracking",
      description: "Engineered a custom solution to track employee training and certification for hazardous area access in a chemical manufacturing plant.",
      results: ["Achieved 100% compliance with safety regulations", "Automated certification expiration notifications", "Reduced safety incidents by 83%"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block p-3 bg-red-100 rounded-lg mb-5">
              <Settings className="text-red-600" size={30} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Solutions</h1>
            <p className="text-xl text-gray-600">
              Bespoke smart card solutions developed from the ground up to address your unique business challenges and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tailored to Your Exact Specifications</h2>
              <p className="text-lg text-gray-600 mb-8">
                When off-the-shelf solutions aren't enough, our custom development team creates purpose-built smart card systems that perfectly align with your unique business processes and objectives.
              </p>
              
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check size={14} className="text-red-600" />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
              >
                Request a Custom Solution
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070" 
                alt="Custom smart card solution" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Custom Solution Process</h2>
            <p className="text-lg text-gray-600">
              We follow a comprehensive approach to ensure your custom smart card solution precisely meets your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-red-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery & Analysis</h3>
              <p className="text-gray-600">
                We begin with a thorough assessment of your requirements, challenges, and objectives to develop a comprehensive understanding of your needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-red-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Solution Design</h3>
              <p className="text-gray-600">
                Our experts design a custom solution architecture that addresses your specific requirements, including hardware, software, and integration aspects.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-red-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Development & Testing</h3>
              <p className="text-gray-600">
                We develop your custom solution using agile methodologies, with regular checkpoints to ensure alignment with your expectations throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
            <p className="text-lg text-gray-600">
              Explore how our custom smart card solutions have addressed complex challenges for various organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {study.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check size={16} className="text-red-600 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Custom Solution?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our team today to discuss your specific requirements and discover how we can create a bespoke smart card solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-red-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/services" 
                className="bg-red-700 hover:bg-red-800 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200 border border-red-500"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSolutions;
