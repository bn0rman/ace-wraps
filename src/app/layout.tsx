import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ace Wraps | Premium Car Wrapping Services",
  description: "Transform your vehicle with Sydney's leading car wrap specialists. Professional installation, premium materials, and stunning results guaranteed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark text-white min-h-screen`}>
        <nav className="fixed w-full top-0 z-50 bg-dark/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              <div className="flex-shrink-0">
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="/images/ace_wraps3.png"
                    alt="Ace Wraps Logo"
                    width={200}
                    height={60}
                    className="h-auto filter brightness-0 invert"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <Link href="/" className="text-lg text-white hover:text-neon">Home</Link>
                  <Link href="/services" className="text-lg text-white hover:text-neon">Services</Link>
                  <Link href="/gallery" className="text-lg text-white hover:text-neon">Gallery</Link>
                  <Link href="/about" className="text-lg text-white hover:text-neon">About Us</Link>
                  <Link href="/faq" className="text-lg text-white hover:text-neon">FAQ</Link>
                  <Link href="/contact" className="bg-neon text-dark px-6 py-3 rounded-full text-lg font-medium hover:bg-opacity-90">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
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
                  <li><Link href="/" className="text-gray-400 hover:text-neon">Home</Link></li>
                  <li><Link href="/services" className="text-gray-400 hover:text-neon">Services</Link></li>
                  <li><Link href="/ppf" className="text-gray-400 hover:text-neon">PPF</Link></li>
                  <li><Link href="/faq" className="text-gray-400 hover:text-neon">FAQ</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-neon">RECEIVE A QUOTE</Link></li>
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
                  <a href="https://www.facebook.com/acewraps" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon">Facebook</a>
                  <a href="https://www.instagram.com/acewraps" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
