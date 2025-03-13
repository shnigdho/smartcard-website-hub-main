
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Shield, Users, Clock, Globe, Heart } from 'lucide-react';
import { ArrowRight } from 'lucide-react';



const About = () => {
  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-5 skew-y-3 transform origin-top-right"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 mb-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">Our Company</span>
            <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">Galaxy Technology (Bangladesh) Limited</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              We're a dedicated team of smart card technology experts committed to providing innovative solutions that enhance security, streamline operations, and improve user experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center transition-all shadow-lg hover:shadow-xl">
                Contact Us <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>



      

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                GALAXY TECHNOLOGY (BANGLADESH) LIMITED is a high-tech joint-Venture company specialized in developing , manufacturing and marketing of SIM, Smart Card & Scratch Card products in Bangladesh and abroad in order to fulfil the future rising demand of Chip based Smart Card for Telecome, Banking different GOVT. ID Card projects and Transportation Sectors. We are established in 2016 based in Dhaka, Bangladesh. Through the summation of hard work, high skilled industry professionals and continuous innovation, will try to win the excellence reputation as one of the high quality and trusted suppliers in Smart Card and Scratch Card industry.
              </p>
              <p className="text-gray-600 mb-6">
                We will support a wide range of Smart Card products for Mobile Operators, Banks, BMET, BRTA Driving License etc. and at the same time will maintain our product quality, goods service and endless innovation to cope up with the market's needs & preference.
              </p>
              <p className="text-gray-600">
                In future we can perceive tha digital Bangladesh will require different comprehensive eco system for digital cities where security and identification ill bethe challenge and will try to expand our resources and R&D to support Smart Technologies to create multiple entities to integrate together to perform in a comprehensive platform in order join the movement for digitalization and development of the country as a whole.
              </p>
            </div>
            <div className="relative">
              <img 
                src="" 
                alt="SmartCardTech team" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg">
                <p className="font-semibold">Established 2010</p>
                <p className="text-sm text-blue-100">13+ years of excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-6">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="text-gray-600">
                We prioritize security in every solution we create, ensuring the highest standards of data protection and privacy for our clients and their users.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from product quality to service delivery, constantly pushing boundaries to exceed expectations.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients are at the heart of our business. We listen carefully to their needs and develop tailored solutions that address their specific challenges.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously invest in research and development to stay ahead of industry trends and bring innovative solutions to our clients.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical standards in all our business dealings, building trust with our clients, partners, and team members.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
              <p className="text-gray-600">
                With clients around the world, we bring a global perspective to our solutions while respecting local needs and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-6">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the experienced professionals who guide our company and ensure we deliver excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" 
                  alt="CEO" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-blue-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in security technology, Michael leads our company with vision and strategic direction.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" 
                  alt="CTO" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sophia Rodriguez</h3>
                <p className="text-blue-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Sophia drives our technology innovation, bringing cutting-edge solutions to life through her expertise in smart card systems.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974" 
                  alt="COO" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Park</h3>
                <p className="text-blue-600 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">
                  David ensures our operations run smoothly, overseeing project delivery and client satisfaction with meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
