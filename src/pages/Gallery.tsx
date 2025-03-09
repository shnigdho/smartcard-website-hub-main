
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Smart Card Implementation',
      category: 'smart-cards',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070',
      description: 'Enterprise-level smart card deployment for a multinational corporation, providing secure access control across multiple locations.'
    },
    {
      id: 2,
      title: 'RFID Access System',
      category: 'rfid',
      image: 'https://images.unsplash.com/photo-1617994679330-58dab36963ef?q=80&w=2070',
      description: 'RFID-based access control system implemented at a high-security facility, ensuring authorized personnel entry while maintaining detailed access logs.'
    },
    {
      id: 3,
      title: 'Membership Card Design',
      category: 'membership',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070',
      description: 'Custom-designed membership cards for a premium fitness club chain, featuring brand-aligned aesthetics and integrated payment functionality.'
    },
    {
      id: 4,
      title: 'Scratch Card Production',
      category: 'scratch-cards',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232',
      description: 'High-security scratch card production for a national lottery, incorporating multiple anti-counterfeiting measures and secure code generation.'
    },
    {
      id: 5,
      title: 'Corporate ID Solution',
      category: 'smart-cards',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070',
      description: 'Integrated corporate ID solution featuring employee identification, access control, and cafeteria payment functions in a single smart card.'
    },
    {
      id: 6,
      title: 'RFID Inventory System',
      category: 'rfid',
      image: 'https://images.unsplash.com/photo-1617994679330-58dab36963ef?q=80&w=2070',
      description: 'RFID-based inventory management system for a retail chain, enabling real-time stock monitoring and automated reordering processes.'
    },
    {
      id: 7,
      title: 'Loyalty Program Cards',
      category: 'membership',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070',
      description: 'Custom loyalty program cards for a hotel chain, featuring tiered membership levels and integrated rewards tracking.'
    },
    {
      id: 8,
      title: 'University ID System',
      category: 'smart-cards',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070',
      description: 'Comprehensive campus card solution for a university, providing library access, meal plans, and building entry in a single smart card.'
    },
    {
      id: 9,
      title: 'Event Access Cards',
      category: 'rfid',
      image: 'https://images.unsplash.com/photo-1617994679330-58dab36963ef?q=80&w=2070',
      description: 'RFID event access cards for a major conference, enabling attendee tracking, session authorization, and interactive exhibit engagement.'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'smart-cards', label: 'Smart Cards' },
    { id: 'rfid', label: 'RFID Solutions' },
    { id: 'membership', label: 'Membership Cards' },
    { id: 'scratch-cards', label: 'Scratch Cards' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openImageModal = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl text-gray-600">
              Browse our portfolio of successful smart card implementations and solutions.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => openImageModal(item)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {filters.find(f => f.id === item.category)?.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeImageModal}
        >
          <div 
            className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              onClick={closeImageModal}
            >
              <X size={20} />
            </button>
            
            <div className="h-[50vh] overflow-hidden bg-gray-900">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {filters.find(f => f.id === selectedImage.category)?.label}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{selectedImage.title}</h3>
              <p className="text-gray-600">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 mt-auto">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Inspired by our work?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss how we can create a custom smart card solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                Start Your Project
              </a>
              <a 
                href="/services" 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-8 rounded-lg font-medium transition-colors duration-200"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
