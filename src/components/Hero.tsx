import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: "src/assets/smartcard.jpg",
    title: "Innovative Smart Cards",
    description: "Secure and customizable smart card solutions for various applications.",
    cta: { text: "Explore Smart Cards", link: "/products/smart-cards" },
  },
  {
    image: "src/assets/smartsimcard.jpg",
    title: "Advanced SIM Card Technology",
    description: "Reliable and secure SIM cards designed for seamless connectivity.",
    cta: { text: "Learn More", link: "/products/sim-cards" },
  },
  {
    image: "src/assets/bankingcard.jpg",
    title: "Secure Banking Cards",
    description: "Top-tier banking cards ensuring secure transactions and financial operations.",
    cta: { text: "View Banking Cards", link: "/products/banking-cards" },
  },
  {
    image: "src/assets/membershipcard.jpg",
    title: "Exclusive Membership Cards",
    description: "Custom membership cards to enhance brand identity and customer loyalty.",
    cta: { text: "Get Your Membership Card", link: "/products/membership-cards" },
  },
  {
    image: "src/assets/scratchcard.jpg",
    title: "Premium Scratch Cards",
    description: "Scratch cards designed for secure and promotional use cases.",
    cta: { text: "Discover Scratch Cards", link: "/products/scratch-cards" },
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const startSlideTimer = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-gray-100">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg mb-6">{slide.description}</p>
              <Link
                to={slide.cta.link}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {slide.cta.text}
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Hero;




