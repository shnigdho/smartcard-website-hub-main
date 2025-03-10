// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
// import InfoSection from '../components/InfoSection';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import smartcardImage from '../assets/smartcard.jpg';

// const Index = () => {
//   // Add scroll animations
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('.section');
//       sections.forEach((section) => {
//         const sectionTop = section.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         if (sectionTop < windowHeight * 0.75) {
//           section.classList.add('animate-slide-in');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="page-transition bg-gray-50">
//       <Navbar />
//       <Hero />

//       {/* Featured Solutions Section */}
//       <section className="section py-16 md:py-20 bg-white">
//         <div className="container-custom">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Innovative Smart Card Solutions
//             </h2>
//             <p className="text-lg text-gray-600">
//               Discover our comprehensive range of smart card technologies designed to enhance security, streamline operations, and improve user experience.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Card 1 */}
//             <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">Smart Cards</h3>
//                 <p className="text-gray-600 mb-4">
//                   Advanced chip-based cards with enhanced security features for identification, access control, and payment applications.
//                 </p>
//                 <Link to="/products/smart-cards" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
//                   Learn more <span className="ml-1">→</span>
//                 </Link>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">RFID Solutions</h3>
//                 <p className="text-gray-600 mb-4">
//                   Contactless identification technology for efficient tracking, authentication, and data exchange across multiple applications.
//                 </p>
//                 <Link to="/products/rfid-solutions" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
//                   Learn more <span className="ml-1">→</span>
//                 </Link>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">Membership Cards</h3>
//                 <p className="text-gray-600 mb-4">
//                   Personalized cards with integrated technology for loyalty programs, club memberships, and organization access.
//                 </p>
//                 <Link to="/products/membership-cards" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
//                   Learn more <span className="ml-1">→</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Info Section - Smart Card Technology */}
//       <InfoSection
//         title="Next-Generation Smart Card Technology"
//         subtitle="ADVANCED SECURITY"
//         description="Our smart cards utilize state-of-the-art chip technology and encryption methods to provide unmatched security for your identification and access control needs. Each card is designed with multiple authentication factors and tamper-evident features to protect critical data and prevent unauthorized use."
//         image= "smartcardImage"
//         imageAlt="Smart Card Technology"
//         ctaText="Explore Smart Card Solutions"
//         ctaLink="/products/smart-cards"
//         backgroundColor="bg-gray-50"
//       />

//       {/* Info Section - RFID Solutions */}
//       <InfoSection
//         title="Seamless RFID Integration"
//         subtitle="CONTACTLESS TECHNOLOGY"
//         description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience. From access control to inventory management, our technology enables quick, reliable, and secure transactions without physical contact."
//         image="https://images.unsplash.com/photo-1617994679330-58dab36963ef?q=80&w=2070"
//         imageAlt="RFID Solutions"
//         imagePosition="left"
//         ctaText="Discover RFID Solutions"
//         ctaLink="/products/rfid-solutions"
//         backgroundColor="bg-white"
//       />

//       {/* Why Choose Us Section */}
//       <section className="section py-16 md:py-24 bg-gradient-to-r from-blue-50 to-white">
//         <div className="container-custom">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SmartCardTech</h2>
//             <p className="text-lg text-gray-600">
//               We combine cutting-edge technology with industry expertise to deliver smart card solutions that exceed expectations.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//             {/* Feature 1 */}
//             <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">Industry-Leading Security</h3>
//                 <p className="text-gray-600">
//                   Advanced encryption and authentication protocols to protect sensitive data and prevent unauthorized access.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
//                 <p className="text-gray-600">
//                   With years of experience in the industry, we deliver reliable solutions backed by extensive technical knowledge.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">Innovative Technology</h3>
//                 <p className="text-gray-600">
//                   Continuous investment in research and development to provide cutting-edge smart card solutions.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 4 */}
//             <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
//                 <p className="text-gray-600">
//                   Flexible and adaptable systems that grow with your business needs, from small operations to enterprise-level deployments.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 5 */}
//             <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">Customized Products</h3>
//                 <p className="text-gray-600">
//                   Tailor-made smart card solutions designed to meet your specific business requirements and brand standards.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 6 */}
//             <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">Comprehensive Support</h3>
//                 <p className="text-gray-600">
//                   End-to-end service including consultation, implementation, training, and ongoing technical support for all our solutions.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="section py-20 bg-white">
//         <div className="container-custom">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
//             <div className="grid grid-cols-1 lg:grid-cols-2">
//               <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to enhance your card solution?</h2>
//                 <p className="text-lg text-gray-200 mb-8">
//                   Contact our team to discuss how our smart card technology can benefit your organization. We're here to answer your questions and provide personalized solutions.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link 
//                     to="/contact" 
//                     className="bg-white text-blue-600 text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100"
//                   >
//                     Get in Touch
//                   </Link>
//                   <Link 
//                     to="/products" 
//                     className="bg-transparent border border-white text-white text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200 hover:bg-white/10"
//                   >
//                     Explore Products
//                   </Link>
//                 </div>
//               </div>
//               <div className="hidden lg:block relative h-full min-h-[300px]">
//                 <img 
//                   src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070" 
//                   alt="Smart card technology" 
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Index;





import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smartcardImage from '../assets/smartcard.jpg';  // Correctly import the image
import smartsimcardImage from '../assets/smartsimcard.jpg';  // Import the new image

const Index = () => {
  // Add scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate-slide-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-transition bg-gray-50">
      <Navbar />
      <Hero />

      {/* Featured Solutions Section */}
      <section className="section py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Innovative Smart Card Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Discover our comprehensive range of smart card technologies designed to enhance security, streamline operations, and improve user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Smart Cards</h3>
                <p className="text-gray-600 mb-4">
                  Advanced chip-based cards with enhanced security features for identification, access control, and payment applications.
                </p>
                <Link to="/products/smart-cards" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">RFID Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Contactless identification technology for efficient tracking, authentication, and data exchange across multiple applications.
                </p>
                <Link to="/products/rfid-solutions" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Membership Cards</h3>
                <p className="text-gray-600 mb-4">
                  Personalized cards with integrated technology for loyalty programs, club memberships, and organization access.
                </p>
                <Link to="/products/membership-cards" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section - Smart Card Technology */}
      <InfoSection
        title="Next-Generation Smart Card Technology"
        subtitle="ADVANCED SECURITY"
        description="Our smart cards utilize state-of-the-art chip technology and encryption methods to provide unmatched security for your identification and access control needs. Each card is designed with multiple authentication factors and tamper-evident features to protect critical data and prevent unauthorized use."
        image={smartcardImage} // Use imported image
        imageAlt="Smart Card Technology"
        ctaText="Explore Smart Card Solutions"
        ctaLink="/products/smart-cards"
        backgroundColor="bg-gray-50"
      />

      {/* Info Section - RFID Solutions */}
      <InfoSection
        title="Seamless RFID Integration"
        subtitle="CONTACTLESS TECHNOLOGY"
        description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience. From access control to inventory management, our technology enables quick, reliable, and secure transactions without physical contact."
        image={smartsimcardImage} // Use the new imported image
        imageAlt="RFID Solutions"
        imagePosition="left"
        ctaText="Discover RFID Solutions"
        ctaLink="/products/rfid-solutions"
        backgroundColor="bg-white"
      />

      <Footer />
    </div>
  );
};

export default Index;
