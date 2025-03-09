
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  image: string;
  title: string;
  description: string;
  cta: {
    text: string;
    link: string;
  };
}

const SLIDES: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1617994679330-58dab36963ef?q=80&w=2070",
    title: "Next-Gen Smart Card Solutions",
    description: "Unlock the future of security and access management with our innovative smart card technology.",
    cta: {
      text: "Explore Products",
      link: "/products"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
    title: "Advanced RFID Technology",
    description: "Seamless integration and unmatched security with our state-of-the-art RFID solutions.",
    cta: {
      text: "Learn More",
      link: "/products/rfid-solutions"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070",
    title: "Custom Membership Cards",
    description: "Elevate your brand with premium, personalized membership cards designed for your business.",
    cta: {
      text: "Get Started",
      link: "/products/membership-cards"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
    title: "Secure Payment Solutions",
    description: "Implement cutting-edge payment systems with our comprehensive scratch card technology.",
    cta: {
      text: "View Services",
      link: "/services"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232",
    title: "End-to-End Smart Platform",
    description: "A complete ecosystem for managing smart card implementation, deployment, and monitoring.",
    cta: {
      text: "Contact Us",
      link: "/contact"
    }
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  
  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };
  
  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide]);
  
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-gray-900">
      {/* Carousel slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container-custom">
              <div 
                className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <Link
                  to={slide.cta.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  {slide.cta.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
