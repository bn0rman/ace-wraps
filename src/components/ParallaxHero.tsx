import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxHeroProps {
  title: string;
  description: string;
}

export default function ParallaxHero({ title, description }: ParallaxHeroProps) {
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
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale, y }}
      >
        <img
          src="/images/green-bmw.jpg"
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40"
          style={{ opacity }}
        />
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <motion.div 
          className="max-w-2xl"
          style={{ y: titleY, opacity }}
        >
          <motion.h1 
            className="text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <motion.p 
            className="text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex items-center gap-2 text-gray-300">
          <span>Scroll to explore</span>
          <svg 
            className="w-5 h-5 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
} 