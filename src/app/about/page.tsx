'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Founder & Lead Installer',
    image: '/team/john.jpg',
    description: 'With over 15 years of experience in vehicle wrapping and paint protection.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    image: '/team/sarah.jpg',
    description: 'Ensuring smooth operations and exceptional customer service.',
  },
  {
    name: 'Mike Brown',
    role: 'Senior Installer',
    image: '/team/mike.jpg',
    description: 'Specialized in premium vinyl wraps and paint protection films.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-dark">
      <PageHero 
        title="About Ace Wraps"
        description="Your trusted partner in vehicle transformation"
        imageUrl="/images/ceramic_image.jpg"
        className="h-[36vh]"
      />

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-5xl font-bold mb-8">Our <span className="text-[#ddc9ff]">Story</span></h2>
            </ScrollReveal>
            <div className="space-y-6 text-xl text-gray-300">
              <ScrollReveal delay={0.2}>
                <p>
                  Founded in 2010, Ace Wraps has grown to become one of Australia&apos;s leading vehicle transformation specialists. Our journey began with a simple mission: to provide the highest quality car wrapping services with unmatched attention to detail.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>
                  Over the years, we&apos;ve expanded our services to include paint protection films, ceramic coatings, and commercial fleet branding, always staying at the forefront of industry innovations and techniques.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p>
                  Today, we&apos;re proud to be the trusted choice for car enthusiasts, luxury vehicle owners, and businesses across Australia.
                </p>
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal direction="right">
            <div className="relative h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src="/images/green-bmw.jpg"
                alt="Ace Wraps Workshop"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-dark-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-5xl font-bold text-center mb-16">Why <span className="text-[#ddc9ff]">Choose</span> Us</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "10+",
                title: "Years Experience",
                description: "Decade of expertise in vehicle transformation"
              },
              {
                number: "1000+",
                title: "Projects Completed",
                description: "Successful transformations and satisfied clients"
              },
              {
                number: "100%",
                title: "Satisfaction",
                description: "Committed to excellence in every project"
              }
            ].map((stat, index) => (
              <ScrollReveal key={stat.title} delay={index * 0.2}>
                <motion.div 
                  className="bg-dark p-8 rounded-[40px] hover-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl font-bold text-neon mb-4">{stat.number}</div>
                  <h3 className="text-2xl font-semibold mb-4">{stat.title}</h3>
                  <p className="text-xl text-gray-300">{stat.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <h2 className="text-5xl font-bold text-center mb-16">Cars We Specialise In</h2>
        </ScrollReveal>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {[
            { name: "Tesla", logo: "/images/logos/tesla-logo.png" },
            { name: "BMW", logo: "/images/logos/bmw-logo.png" },
            { name: "Ferrari", logo: "/images/logos/ferrari-logo.png" },
            { name: "Lamborghini", logo: "/images/logos/lambo-logo.png" },
            { name: "Ford", logo: "/images/logos/ford-logo.png" }
          ].map((brand, index) => (
            <ScrollReveal key={brand.name} delay={index * 0.1}>
              <motion.div 
                className="relative w-40 h-40 md:w-48 md:h-48"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-dark-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-5xl font-bold text-center mb-16">Meet Our <span className="text-[#ddc9ff]">Team</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.2}>
                <motion.div 
                  className="bg-dark rounded-[40px] overflow-hidden hover-card"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-neon text-lg mb-4">{member.role}</p>
                    <p className="text-gray-300">{member.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-5xl font-bold mb-8">Ready to <span className="text-[#ddc9ff]">Transform</span> Your Vehicle?</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a free consultation
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 w-64"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Started
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
} 