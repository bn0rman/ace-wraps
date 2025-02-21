'use client';

import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="bg-dark">
      {/* Contact Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/green-bmw.jpg"
            alt="Contact Ace Wraps"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/40" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Get in touch for a free quote and consultation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-secondary p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Get a Quote</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-neon text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-neon text-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-neon text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-neon text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-neon text-white"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="car-wrapping">Car Wrapping</option>
                  <option value="ppf">Paint Protection Film</option>
                  <option value="ceramic-coating">Ceramic Coating</option>
                  <option value="headlight-tint">Headlight & Tail Light Tint</option>
                  <option value="window-tinting">Window Tinting</option>
                  <option value="matte-satin-ppf">Matte/Satin PPF</option>
                  <option value="colour-ppf">Colour PPF Conversion</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-neon text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Workshop</h2>
              <div className="bg-dark-secondary p-8 rounded-2xl space-y-4">
                <div>
                  <h3 className="text-neon font-medium mb-2">Address</h3>
                  <p className="text-gray-300">3 14/16 Imboon St,<br />Deception Bay QLD 4508</p>
                </div>
                <div>
                  <h3 className="text-neon font-medium mb-2">Opening Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: By Appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="bg-dark-secondary p-8 rounded-2xl space-y-4">
                <div>
                  <h3 className="text-neon font-medium mb-2">Phone</h3>
                  <p className="text-gray-300">0431 618 134</p>
                </div>
                <div>
                  <h3 className="text-neon font-medium mb-2">Email</h3>
                  <p className="text-gray-300">info@acewraps.com.au</p>
                </div>
                <div>
                  <h3 className="text-neon font-medium mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/acewraps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-neon transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/acewraps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-neon transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 