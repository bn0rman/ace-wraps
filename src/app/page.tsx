'use client';

import Link from 'next/link'
import VideoParallaxHero from '../components/VideoParallaxHero'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { services, Service } from '@/data/services'

function ServiceItem({ service }: { service: Service }) {
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
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full"
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
                {service.features[0]}
              </motion.span>
              <motion.h2 
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              >
                {service.title}
              </motion.h2>
              <motion.p 
                className="text-2xl md:text-3xl text-white/90 mb-4 font-light"
              >
                {service.description}
              </motion.p>
              <motion.ul 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl md:text-2xl text-white/70 font-light leading-relaxed"
              >
                {service.features.slice(1).map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-[#ddc9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </motion.ul>
              <motion.div className="mt-8">
                <Link 
                  href="/quote"
                  className="inline-flex items-center bg-[#ddc9ff] text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 glow-on-hover"
                >
                  Get Started
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="bg-dark">
      <VideoParallaxHero 
        title="PREMIUM<br />CAR WRAPPING<br />SERVICES"
        description="Transform your vehicle with Sydney's leading car wrap specialists. Professional installation, premium materials, and stunning results guaranteed."
      />

      <div className="w-full">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-center pt-32 pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Our <span className="text-[#ddc9ff] glow-text-hover">Services</span>
        </motion.h1>

        <div>
          {services.map((service) => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </div>
      </div>

      {/* Advantages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              >
                ADVANTAGES OF<br />
                OUR <span className="text-[#ddc9ff] glow-text-hover">SERVICES</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 font-light"
              >
                Say goodbye to ordinary vehicle appearances. Our premium services 
                deliver unmatched quality and durability, making a lasting impact 
                on your vehicle&apos;s aesthetics.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              {
                title: "PREMIUM MATERIALS",
                highlight: "PREMIUM",
                description: "Only the highest quality materials for superior durability and finish."
              },
              {
                title: "EXPERT INSTALLATION",
                highlight: "INSTALLATION",
                description: "Certified installers with years of experience and attention to detail."
              },
              {
                title: "CUSTOM DESIGNS",
                highlight: "CUSTOM",
                description: "Personalized solutions that bring your vision to life."
              },
              {
                title: "SATISFACTION GUARANTEED",
                highlight: "SATISFACTION",
                description: "Backed by our commitment to excellence and customer satisfaction."
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="bg-dark-secondary p-6 rounded-[30px] hover:scale-105 transition-transform duration-500 glow-card">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {advantage.title.split(' ').map(word => 
                      word === advantage.highlight ? 
                        <span key={word} className="text-[#ddc9ff] glow-text-hover">{word} </span> : 
                        <span key={word}>{word} </span>
                    )}
                  </h3>
                  <p className="text-gray-300 text-base font-light">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-secondary rounded-t-[30px] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              TRANSFORM YOUR <span className="text-[#ddc9ff] glow-text-hover">VEHICLE</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  href="/quote"
                  className="inline-flex items-center justify-center bg-[#ddc9ff] text-dark px-10 py-5 rounded-full text-lg font-medium hover:bg-opacity-90 glow-on-hover"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
