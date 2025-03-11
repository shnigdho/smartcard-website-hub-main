import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smartcardImage from '../assets/smartcard.jpg';  // Correctly import the image
import smartsimcardImage from '../assets/smartsimcard.jpg';  // Import the new image
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';







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

//       <div className="bg-gray-50 min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
//           Our Solutions
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Info Section - Smart Card Technology */}
//           <InfoSection
//             title="Next-Generation Smart Card Technology"
//             subtitle="ADVANCED SECURITY"
//             description="Our smart cards utilize state-of-the-art chip technology and encryption methods to provide unmatched security for your identification and access control needs."
//             image={smartcardImage}
//             imageAlt="Smart Card Technology"
//             ctaText="Explore Smart Card Solutions"
//             ctaLink="/products/smart-cards"
//           />

//           {/* Info Section - RFID Solutions */}
//           <InfoSection
//             title="Seamless RFID Integration"
//             subtitle="CONTACTLESS TECHNOLOGY"
//             description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience."
//             image={smartsimcardImage}
//             imageAlt="RFID Solutions"
//             ctaText="Discover RFID Solutions"
//             ctaLink="/products/rfid-solutions"
//           />

//           {/* Info Section - Membership Card */}
//           <InfoSection
//             title="Membership Card"
//             subtitle="CONTACTLESS CARD TECHNOLOGY"
//             description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience."
//             image={smartsimcardImage}
//             imageAlt="RFID Solutions"
//             ctaText="Membership Card Solutions"
//             ctaLink="/products/membership-cards"
//           />

//           {/* Add more InfoSection components as needed */}
//         </div>
//       </div>
//     </div>







      {/* Info Section - Smart Card Technology */}
      {/* <InfoSection
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
      {/* <InfoSection
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
      <InfoSection
        title="Membership Card"
        subtitle="CONTACTLESS Card TECHNOLOGY"
        description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience. From access control to inventory management, our technology enables quick, reliable, and secure transactions without physical contact."
        image={smartsimcardImage} // Use the new imported image
        imageAlt="RFID Solutions"
        ctaText="Membership Card Solutions"
        ctaLink="/products/membership-cards"
        backgroundColor="bg-white"
      />
      <InfoSection
        title="Seamless RFID Integration"
        subtitle="CONTACTLESS TECHNOLOGY"
        description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience. From access control to inventory management, our technology enables quick, reliable, and secure transactions without physical contact."
        image={smartsimcardImage} // Use the new imported image
        imageAlt="RFID Solutions"
        imagePosition="left"
        ctaText="Discover RFID Solution"
        ctaLink="/products/scratch-cards"
        backgroundColor="bg-white"
      />
      <InfoSection
        title="Seamless RFID Integration"
        subtitle="CONTACTLESS TECHNOLOGY"
        description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience. From access control to inventory management, our technology enables quick, reliable, and secure transactions without physical contact."
        image={smartsimcardImage} // Use the new imported image
        imageAlt="RFID Solutions"
        ctaText="Discover RFID Solutions"
        ctaLink="/products/Sim-Cards"
        backgroundColor="bg-white"
      /> */} 
          





//       <Footer />
//     </div>
//   );
// };

// export default Index;




const Index = () => {
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

      {/* Swiper Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Solutions
          </h1>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop
            modules={[Autoplay, Navigation, Pagination]}
          >
            {/* Info Section - Smart Card Technology */}
            <SwiperSlide>
              <InfoSection
                title="Next-Generation Smart Card Technology"
                subtitle="ADVANCED SECURITY"
                description="Our smart cards utilize state-of-the-art chip technology and encryption methods to provide unmatched security for your identification and access control needs."
                image={smartcardImage}
                imageAlt="Smart Card Technology"
                ctaText="Explore Smart Card Solutions"
                ctaLink="/products/smart-cards"
              />
            </SwiperSlide>

            {/* Info Section - RFID Solutions */}
            <SwiperSlide>
              <InfoSection
                title="Seamless RFID Integration"
                subtitle="CONTACTLESS TECHNOLOGY"
                description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience."
                image={smartsimcardImage}
                imageAlt="RFID Solutions"
                ctaText="Discover RFID Solutions"
                ctaLink="/products/rfid-solutions"
              />
            </SwiperSlide>

            {/* Info Section - Membership Card */}
            <SwiperSlide>
              <InfoSection
                title="Membership Card"
                subtitle="CONTACTLESS CARD TECHNOLOGY"
                description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience."
                image={smartsimcardImage}
                imageAlt="RFID Solutions"
                ctaText="Membership Card Solutions"
                ctaLink="/products/membership-cards"
              />
            </SwiperSlide>
            

            <SwiperSlide>
              <InfoSection
                title="Membership Card"
                subtitle="CONTACTLESS CARD TECHNOLOGY"
                description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience."
                image={smartsimcardImage}
                imageAlt="RFID Solutions"
                ctaText="Membership Card Solutions"
                ctaLink="/products/membership-cards"
              />
            </SwiperSlide>


            <SwiperSlide>
              <InfoSection
                title="Membership Card"
                subtitle="CONTACTLESS CARD TECHNOLOGY"
                description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience."
                image={smartsimcardImage}
                imageAlt="RFID Solutions"
                ctaText="Membership Card Solutions"
                ctaLink="/products/membership-cards"
              />
            </SwiperSlide>


            <SwiperSlide>
              <InfoSection
                title="Membership Card"
                subtitle="CONTACTLESS CARD TECHNOLOGY"
                description="Our RFID solutions provide contactless identification and data collection capabilities that streamline operations and enhance user experience."
                image={smartsimcardImage}
                imageAlt="RFID Solutions"
                ctaText="Membership Card Solutions"
                ctaLink="/products/membership-cards"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
