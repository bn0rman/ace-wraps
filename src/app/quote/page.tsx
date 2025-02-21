'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ErrorBoundary>
      <div className="bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-center mb-4">
              Get a Quote
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-gray-300 text-center mb-12">
              Tell us about your project and we&apos;ll provide a custom quote
            </p>
          </ScrollReveal>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-dark-secondary rounded-lg border border-gray-700 focus:border-neon focus:ring-1 focus:ring-neon glow-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-dark-secondary rounded-lg border border-gray-700 focus:border-neon focus:ring-1 focus:ring-neon glow-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-dark-secondary rounded-lg border border-gray-700 focus:border-neon focus:ring-1 focus:ring-neon glow-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Vehicle Details
                </label>
                <input
                  type="text"
                  required
                  placeholder="Year, Make, Model"
                  className="w-full px-4 py-3 bg-dark-secondary rounded-lg border border-gray-700 focus:border-neon focus:ring-1 focus:ring-neon glow-input"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Service Interested In
              </label>
              <div className="relative">
                <select
                  required
                  className="appearance-none w-full px-4 py-3 bg-dark-secondary rounded-lg border border-gray-700 focus:border-neon focus:ring-1 focus:ring-neon glow-input pr-10 text-white"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="" className="bg-dark text-gray-400">Select a service</option>
                  <option value="Car Wrapping" className="bg-dark py-2">Car Wrapping</option>
                  <option value="Paint Protection Film" className="bg-dark py-2">Paint Protection Film</option>
                  <option value="Ceramic Coating" className="bg-dark py-2">Ceramic Coating</option>
                  <option value="Chrome Delete" className="bg-dark py-2">Chrome Delete</option>
                  <option value="Headlight Tint" className="bg-dark py-2">Headlight Tint</option>
                  <option value="Commercial Wrap" className="bg-dark py-2">Commercial Wrap</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neon">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Additional Details
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-dark-secondary rounded-lg border border-gray-700 focus:border-neon focus:ring-1 focus:ring-neon glow-input"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 glow-on-hover"
              >
                Get Your Quote
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </ErrorBoundary>
  );
} 