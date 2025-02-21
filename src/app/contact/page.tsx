'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="bg-dark">
      <PageHero 
        title="Contact Us"
        description="Get in touch for a free consultation and quote"
        imageUrl="/images/green-bmw.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-8">Send Us a <span className="text-[#ddc9ff]">Message</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-dark-secondary rounded-lg focus:ring-2 focus:ring-neon focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-dark-secondary rounded-lg focus:ring-2 focus:ring-neon focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-dark-secondary rounded-lg focus:ring-2 focus:ring-neon focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-dark-secondary rounded-lg focus:ring-2 focus:ring-neon focus:outline-none"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="car-wrapping">Car Wrapping</option>
                    <option value="ppf">Paint Protection Film</option>
                    <option value="ceramic-coating">Ceramic Coating</option>
                    <option value="window-tinting">Window Tinting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-secondary rounded-lg focus:ring-2 focus:ring-neon focus:outline-none"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div>
            <ScrollReveal direction="right">
              <h2 className="text-4xl font-bold mb-8">Get in <span className="text-[#ddc9ff]">Touch</span></h2>
            </ScrollReveal>
            <div className="space-y-8">
              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <h3 className="text-xl font-medium mb-4">Location</h3>
                  <p className="text-gray-300">
                    3 14/16 Imboon St<br />
                    Deception Bay QLD 4508
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <div>
                  <h3 className="text-xl font-medium mb-4">Contact</h3>
                  <p className="text-gray-300">
                    Phone: 0431 618 134<br />
                    Email: info@acewraps.com.au
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.4}>
                <div>
                  <h3 className="text-xl font-medium mb-4">Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9am - 5pm<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.5}>
                <div>
                  <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-neon"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-neon"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 