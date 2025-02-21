'use client';

import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <div className="bg-dark">
      <Hero 
        title="PREMIUM<br />CAR WRAPPING<br />SERVICES"
        description="Transform your vehicle with Sydney's leading car wrap specialists. Professional installation, premium materials, and stunning results guaranteed."
      />

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-6xl font-bold mb-8">
                EXPERIENCE<br />
                THE FUTURE OF<br />
                VEHICLE WRAPPING
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-gray-300 mb-8">
                We drive innovation and sustainability into the future of vehicle transformation. 
                Our range of premium wrapping services is designed to redefine your vehicle&apos;s appearance.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4}>
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/images/green-bmw.jpg"
                    alt="Premium Wraps"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/images/ceramic_image.jpg"
                    alt="Ceramic Coating"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/images/img_3343.jpg"
                    alt="Paint Protection"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right">
            <div className="relative h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src="/images/img_3018.jpg"
                alt="Premium Vehicle Wrap"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-dark-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative h-[400px] rounded-[40px] overflow-hidden">
                <Image
                  src="/images/img_3365.jpg"
                  alt="Premium Services"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <h2 className="text-5xl font-bold mb-8">
                  LEARN ABOUT<br />
                  OUR PREMIUM<br />
                  SERVICES
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-gray-300 mb-8">
                  We&apos;re committed to leading the way in premium vehicle transformation. 
                  Our services combine cutting-edge techniques with premium materials, 
                  ensuring exceptional results every time.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Link 
                  href="/services"
                  className="inline-flex items-center bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90"
                >
                  Explore Services
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ScrollReveal>
                <h2 className="text-5xl font-bold mb-8">
                  ADVANTAGES OF<br />
                  OUR SERVICES
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-gray-300">
                  Say goodbye to ordinary vehicle appearances. Our premium services 
                  deliver unmatched quality and durability, making a lasting impact 
                  on your vehicle&apos;s aesthetics.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "PREMIUM MATERIALS",
                description: "Only the highest quality materials for superior durability and finish."
              },
              {
                title: "EXPERT INSTALLATION",
                description: "Certified installers with years of experience and attention to detail."
              },
              {
                title: "CUSTOM DESIGNS",
                description: "Personalized solutions that bring your vision to life."
              },
              {
                title: "SATISFACTION GUARANTEED",
                description: "Backed by our commitment to excellence and customer satisfaction."
              }
            ].map((advantage, index) => (
              <ScrollReveal key={advantage.title} delay={index * 0.1}>
                <div className="bg-dark-secondary p-8 rounded-2xl hover-card">
                  <h3 className="text-neon text-2xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-secondary rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-5xl font-bold mb-8">TRANSFORM YOUR VEHICLE</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 w-64"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Started
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
