'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-dark/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/ace_wraps3.png"
                  alt="Ace Wraps Logo"
                  width={200}
                  height={60}
                  className="h-auto w-[150px] md:w-[200px] filter brightness-0 invert transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(147,51,234,1)]"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <motion.div 
                className="ml-10 flex items-center space-x-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/" className="text-lg text-white glow-text-hover">Home</Link>
                <Link href="/gallery" className="text-lg text-white glow-text-hover">Gallery</Link>
                <Link href="/about" className="text-lg text-white glow-text-hover">About Us</Link>
                <Link href="/faq" className="text-lg text-white glow-text-hover">FAQ</Link>
                <Link 
                  href="/quote" 
                  className="bg-neon text-dark px-6 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 glow-on-hover"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white p-2 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full bg-gradient-to-b from-dark via-dark/98 to-dark/95 backdrop-blur-xl md:hidden"
            >
              <div className="pt-24 px-4">
                <div className="flex flex-col space-y-6 items-center text-center">
                  <Link 
                    href="/" 
                    className="text-xl text-white glow-text-hover w-full py-3 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/gallery" 
                    className="text-xl text-white glow-text-hover w-full py-3 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-xl text-white glow-text-hover w-full py-3 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/faq" 
                    className="text-xl text-white glow-text-hover w-full py-3 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link 
                    href="/quote" 
                    className="bg-neon text-dark px-8 py-4 rounded-full text-xl font-medium hover:bg-opacity-90 glow-on-hover w-full max-w-xs transition-transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="bg-dark-secondary mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-4">SERVING BRISBANE AND GOLD COAST</h2>
              <p className="text-sm sm:text-base text-gray-400">Premium vehicle transformation specialists, delivering exceptional quality and stunning results.</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm sm:text-base text-gray-400 glow-text-hover">Home</Link></li>
                <li><Link href="/gallery" className="text-sm sm:text-base text-gray-400 glow-text-hover">Gallery</Link></li>
                <li><Link href="/about" className="text-sm sm:text-base text-gray-400 glow-text-hover">About Us</Link></li>
                <li><Link href="/faq" className="text-sm sm:text-base text-gray-400 glow-text-hover">FAQ</Link></li>
                <li><Link href="/quote" className="text-sm sm:text-base text-gray-400 glow-text-hover">RECEIVE A QUOTE</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Address</h3>
              <ul className="space-y-2">
                <li className="text-sm sm:text-base text-gray-400">3 14/16 Imboon St,</li>
                <li className="text-sm sm:text-base text-gray-400">Deception Bay QLD 4508</li>
                <li className="text-sm sm:text-base text-gray-400">0431 618 134</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">INFO@ACEWRAPS.COM.AU</p>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/acewraps" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-400 glow-text-hover">Facebook</a>
                <a href="https://www.instagram.com/acewraps" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-400 glow-text-hover">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 