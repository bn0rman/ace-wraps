import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export default function PageHero({ title, description, imageUrl, className = "h-[60vh]" }: PageHeroProps) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const titleY = useTransform(scrollY, [0, 200], [0, 100]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale, y }}
      >
        <Image
          src={imageUrl}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40"
          style={{ opacity }}
        />
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div 
          className="max-w-2xl"
          style={{ y: titleY, opacity }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 