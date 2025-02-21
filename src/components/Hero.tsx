import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-bg.jpg")',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Transform Your Vehicle
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8">
            Premium Car Wrapping Services in Australia
          </p>
          <div className="space-x-4">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/gallery"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 