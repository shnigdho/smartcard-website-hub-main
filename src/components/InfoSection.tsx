
// import React, { useRef, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// interface InfoSectionProps {
//   title: string;
//   subtitle?: string;
//   description: string;
//   image: string;
//   imageAlt: string;
//   imagePosition?: 'left' | 'right';
//   ctaText?: string;
//   ctaLink?: string;
//   backgroundColor?: string;
//   children?: React.ReactNode;
// }

// const InfoSection: React.FC<InfoSectionProps> = ({
//   title,
//   subtitle,
//   description,
//   image,
//   imageAlt,
//   imagePosition = 'right',
//   ctaText,
//   ctaLink,
//   backgroundColor = 'bg-gray-50',
//   children,
// }) => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className={`py-16 md:py-24 ${backgroundColor}`}>
//       <div className="container-custom">
//         <div className={`grid grid-cols-1 gap-12 items-center ${
//           imagePosition === 'left' 
//             ? 'lg:grid-cols-[1fr_1.2fr]' 
//             : 'lg:grid-cols-[1.2fr_1fr]'
//         }`}>
//           {/* Image Column */}
//           <div 
//             className={`
//               order-2 ${imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}
//               transform transition-all duration-700 
//               ${isVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-10'
//               }
//             `}
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-xl">
//               <img
//                 src={image}
//                 alt={imageAlt}
//                 className="w-full h-auto object-cover aspect-[4/3]"
//               />
//               {/* Optional gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
//             </div>
//           </div>

//           {/* Content Column */}
//           <div 
//             className={`
//               order-1 ${imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}
//               transform transition-all duration-700 delay-100
//               ${isVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-10'
//               }
//             `}
//           >
//             {subtitle && (
//               <p className="inline-block text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider">
//                 {subtitle}
//               </p>
//             )}
            
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
//             <p className="text-gray-600 text-lg leading-relaxed mb-8">{description}</p>
            
//             {children}
            
//             {ctaText && ctaLink && (
//               <div className="mt-6">
//                 <Link
//                   to={ctaLink}
//                   className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
//                 >
//                   {ctaText}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M5 12h14"></path>
//                     <path d="m12 5 7 7-7 7"></path>
//                   </svg>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InfoSection;



import React from 'react';
import { motion } from 'framer-motion'; // For animations

interface InfoSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  ctaText,
  ctaLink,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden relative transform transition-all hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glossy Overlay on Hover */}
      <div className="absolute inset-0 bg-white bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 pointer-events-none"></div>

      {/* Image Section */}
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-32 object-cover"
      />

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <h3 className="text-sm font-semibold text-blue-500">{subtitle}</h3>
        <p className="text-xs text-gray-600">{description}</p>
        <a
          href={ctaLink}
          className="inline-block bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600 transition duration-300"
        >
          {ctaText}
        </a>
      </div>
    </motion.div>
  );
};

export default InfoSection;