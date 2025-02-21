'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParallaxHero from '@/components/ParallaxHero';

interface GalleryItemData {
  title: string;
  category: string;
  image: string;
  description: string;
  details: string;
}

const galleryItems = [
  {
    title: 'Matte Black BMW M4',
    category: 'Color Change Wrap',
    image: '/images/gallery/bmw-m4.jpg',
    description: 'Sleek matte black finish that enhances the M4\'s aggressive lines.',
    details: 'Premium matte black vinyl wrap installation showcasing the BMW M4\'s iconic design with a stealthy, sophisticated appearance.'
  },
  {
    title: 'Satin Chrome Mercedes AMG',
    category: 'Premium Wrap',
    image: '/images/gallery/mercedes-amg.jpg',
    description: 'Eye-catching satin chrome finish that turns heads.',
    details: 'Luxurious satin chrome wrap that transforms this Mercedes-AMG into a stunning masterpiece of modern automotive styling.'
  },
  {
    title: 'Gloss White Porsche 911',
    category: 'Paint Protection Film',
    image: '/images/gallery/porsche-911.jpg',
    description: 'Crystal clear protection for a timeless classic.',
    details: 'Full-body PPF installation protecting the Porsche 911\'s pristine white finish while maintaining its iconic aesthetics.'
  },
  {
    title: 'Pearl Blue Audi RS6',
    category: 'Color Change Wrap',
    image: '/images/gallery/audi-rs6.jpg',
    description: 'Mesmerizing pearl blue that shifts with every angle.',
    details: 'Color-shifting wrap that brings a dynamic presence to the RS6\'s powerful stance, drawing attention day and night.'
  }
] as const;

function GalleryItem({ item, index }: { item: GalleryItemData; index: number }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, 1, 1, 0]
  );
  
  const y = useTransform(scrollYProgress,
    [0, 1],
    ["0vh", "-10vh"]
  );

  const scale = useTransform(scrollYProgress,
    [0, 0.5, 1],
    [1.1, 1, 1.1]
  );

  const textY = useTransform(scrollYProgress,
    [0.3, 0.5],
    ["50px", "0px"]
  );

  const textOpacity = useTransform(scrollYProgress,
    [0.3, 0.5],
    [0, 1]
  );

  return (
    <motion.div
      ref={itemRef}
      className="relative min-h-[150vh] flex items-center justify-center"
    >
      <motion.div 
        className="sticky top-0 h-screen w-full flex items-center justify-center py-20 overflow-hidden"
        style={{ opacity }}
      >
        <motion.div 
          className="relative w-full h-full rounded-[40px] overflow-hidden"
          style={{ y, scale }}
        >
          <div className="absolute inset-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
          </div>
          
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-12 md:p-24"
            style={{ y: textY, opacity: textOpacity }}
          >
            <div className="max-w-3xl">
              <motion.span 
                className="text-neon text-xl md:text-2xl mb-4 block font-light tracking-wide"
              >
                {item.category}
              </motion.span>
              <motion.h2 
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              >
                {item.title}
              </motion.h2>
              <motion.p 
                className="text-2xl md:text-3xl text-white/90 mb-4 font-light"
              >
                {item.description}
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl text-white/70 font-light leading-relaxed"
              >
                {item.details}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  return (
    <div className="bg-dark">
      <ParallaxHero 
        title="Our Work"
        description="Explore our portfolio of premium vehicle transformations"
      />

      <div className="w-full">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-center pt-32 pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Featured <span className="text-[#ddc9ff] glow-text-hover">Projects</span>
        </motion.h1>

        <div>
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>

      <section className="bg-dark-secondary py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to <span className="text-[#ddc9ff]">Transform</span> Your Vehicle?
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contact us today to discuss your project
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-neon text-dark px-12 py-6 rounded-full text-xl font-medium hover:bg-opacity-90 glow-on-hover"
            >
              Get Started
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 