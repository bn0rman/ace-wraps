'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

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
                  className="h-auto filter brightness-0 invert transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(147,51,234,1)]"
                />
              </Link>
            </motion.div>
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
          </div>
        </div>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">SERVING BRISBANE AND GOLD COAST</h2>
              <p className="text-gray-400">Premium vehicle transformation specialists, delivering exceptional quality and stunning results.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 glow-text-hover">Home</Link></li>
                <li><Link href="/gallery" className="text-gray-400 glow-text-hover">Gallery</Link></li>
                <li><Link href="/about" className="text-gray-400 glow-text-hover">About Us</Link></li>
                <li><Link href="/faq" className="text-gray-400 glow-text-hover">FAQ</Link></li>
                <li><Link href="/quote" className="text-gray-400 glow-text-hover">RECEIVE A QUOTE</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">3 14/16 Imboon St,</li>
                <li className="text-gray-400">Deception Bay QLD 4508</li>
                <li className="text-gray-400">0431 618 134</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-4">INFO@ACEWRAPS.COM.AU</p>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/acewraps" target="_blank" rel="noopener noreferrer" className="text-gray-400 glow-text-hover">Facebook</a>
                <a href="https://www.instagram.com/acewraps" target="_blank" rel="noopener noreferrer" className="text-gray-400 glow-text-hover">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 