'use client';

import Image from 'next/image';
import Link from 'next/link';

// Gallery items with before/after images
const galleryItems = [
  {
    title: 'Matte Black BMW M4',
    category: 'Color Change Wrap',
    image: '/gallery/bmw-m4.jpg'
  },
  {
    title: 'Satin Chrome Mercedes AMG',
    category: 'Premium Wrap',
    image: '/gallery/mercedes-amg.jpg'
  },
  {
    title: 'Gloss White Porsche 911',
    category: 'Paint Protection Film',
    image: '/gallery/porsche-911.jpg'
  },
  {
    title: 'Pearl Blue Audi RS6',
    category: 'Color Change Wrap',
    image: '/gallery/audi-rs6.jpg'
  },
  {
    title: 'Satin Black Tesla Model 3',
    category: 'Full Vehicle Wrap',
    image: '/gallery/tesla-3.jpg'
  },
  {
    title: 'Clear Bra Ferrari F8',
    category: 'Paint Protection Film',
    image: '/gallery/ferrari-f8.jpg'
  },
  {
    title: 'Commercial Fleet Branding',
    category: 'Commercial Wrap',
    image: '/gallery/commercial-1.jpg'
  },
  {
    title: 'Matte Military Green G-Wagon',
    category: 'Color Change Wrap',
    image: '/gallery/g-wagon.jpg'
  },
  {
    title: 'Gloss Black Chrome Delete',
    category: 'Chrome Delete',
    image: '/gallery/chrome-delete.jpg'
  }
];

export default function GalleryPage() {
  return (
    <div className="bg-dark">
      {/* Gallery Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full mt-24">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6">
              Our Work
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Explore our portfolio of premium vehicle transformations
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.title} 
              className="group relative h-80 bg-dark-secondary rounded-2xl overflow-hidden hover-card"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-neon text-sm font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your project
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90"
          >
            <span className="mr-2">Get Started</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 