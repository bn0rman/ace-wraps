'use client';

import { useState } from 'react';
import Link from 'next/link';
import ErrorBoundary from '@/components/ErrorBoundary';
import { motion } from 'framer-motion';

const faqs = [
  {
    category: "Paint Protection Film (PPF)",
    questions: [
      {
        question: "What is Paint Protection Film (PPF)?",
        answer: "Paint Protection Film (PPF) is a transparent, durable, and self-healing film applied to the exterior of a vehicle to protect its paint from scratches, stone chips, bug splatters, and other environmental damage. PPF is virtually invisible and preserves the car's original appearance."
      },
      {
        question: "How does PPF work?",
        answer: "PPF is made of a thermoplastic urethane material that is designed to absorb and disperse impacts, preventing them from reaching the vehicle's paint. Its self-healing properties allow minor scratches to disappear over time, especially when exposed to heat or sunlight."
      },
      {
        question: "How long does PPF last?",
        answer: "PPF can last anywhere from 5 to 10 years, depending on the quality of the film, installation, and maintenance. At Ace Wraps, we use high-quality films that come with a manufacturer's warranty covering issues like yellowing, cracking, peeling, and bubbling."
      },
      {
        question: "Will PPF affect the appearance of my car?",
        answer: "No, PPF is designed to be virtually invisible. It enhances your car's appearance by giving it a glossy finish and protecting it from damage, helping maintain its showroom look."
      },
      {
        question: "Can PPF be removed, and will it damage my paint?",
        answer: "Yes, PPF can be safely removed without damaging the original paint. It is important to have it removed by a professional to ensure that no adhesive residue is left behind."
      },
      {
        question: "How do I care for my car after PPF installation?",
        answer: "After PPF installation, avoid washing your car for at least 48 hours. Use a pH-balanced car wash soap, and avoid abrasive cleaners, automatic car washes, or high-pressure water jets. We recommend hand washing for the best results."
      },
      {
        question: "How much does PPF cost in Australia?",
        answer: "The cost of PPF varies depending on the size of the vehicle, the areas you want to protect, and the type of film used. Prices typically range from a few hundred dollars for partial coverage to several thousand dollars for full coverage. Contact us for a personalized quote."
      },
      {
        question: "How long does the PPF installation take?",
        answer: "Installation times vary depending on the vehicle and the extent of the coverage. A partial PPF installation may take a few hours, while full coverage could take up to 2-3 days."
      },
      {
        question: "Can PPF be applied over ceramic coating?",
        answer: "Yes, PPF can be applied over ceramic coating, but typically, it is more effective to apply PPF first and then apply a ceramic coating on top to enhance protection and gloss."
      },
      {
        question: "Is PPF better than ceramic coating?",
        answer: "PPF and ceramic coating serve different purposes. PPF offers superior protection against physical damage like stone chips and scratches, while ceramic coating provides a protective layer against UV rays, water spots, and chemical stains, enhancing the car's gloss. They can be used together for maximum protection."
      },
      {
        question: "How do I know if PPF is right for my vehicle?",
        answer: "If you want to protect your vehicle's paint from daily wear and tear, such as stone chips, scratches, and minor abrasions, PPF is a great option. It's particularly beneficial for new cars, high-end vehicles, and those frequently driven on highways or in areas with gravel roads."
      },
      {
        question: "Does PPF affect my car's resale value?",
        answer: "Yes, PPF can help maintain or even increase your car's resale value by keeping the paint in pristine condition, reducing the need for touch-ups or repainting."
      }
    ]
  },
  {
    category: "Car Wrapping",
    questions: [
      {
        question: "How long does a car wrap last?",
        answer: "A high-quality car wrap, when properly maintained, typically lasts 5-7 years. The lifespan can vary depending on environmental conditions, usage, and care."
      },
      {
        question: "Can I wash my wrapped car?",
        answer: "Yes, you can wash your wrapped vehicle. We recommend hand washing with mild soap and water, avoiding high-pressure washers. Wait at least a week after installation before the first wash."
      },
      {
        question: "Will a wrap damage my original paint?",
        answer: "No, a professional car wrap will not damage your vehicle's original paint. In fact, it can help protect the paint from UV rays and minor scratches. When removed properly, the paint underneath remains in its original condition."
      },
      {
        question: "How long does the installation take?",
        answer: "A full vehicle wrap typically takes 3-5 days to complete. Partial wraps or simple color changes might take 1-2 days. The exact time depends on the complexity of the design and vehicle size."
      }
    ]
  },
  {
    category: "Window Tinting",
    questions: [
      {
        question: "What are the legal tint limits in Australia?",
        answer: "In Australia, the legal limit for window tint is a Visible Light Transmission (VLT) of 35% on all side windows and rear window. The windscreen can only have a tint strip across the top."
      },
      {
        question: "How long does window tint take to cure?",
        answer: "Window tint typically takes 3-5 days to fully cure. During this time, you should keep your windows up and avoid cleaning them. The exact time can vary based on weather conditions."
      }
    ]
  },
  {
    category: "Ceramic Coating",
    questions: [
      {
        question: "What are the benefits of ceramic coating?",
        answer: "Ceramic coating provides long-lasting protection against UV rays, chemical stains, and oxidation. It enhances gloss, makes cleaning easier, and offers hydrophobic properties that repel water and contaminants."
      },
      {
        question: "How long does ceramic coating last?",
        answer: "Our professional ceramic coating lasts 5+ years with proper maintenance. Regular washing and annual inspections help maintain its protective properties and appearance."
      }
    ]
  },
  {
    category: "General",
    questions: [
      {
        question: "Do you offer warranties?",
        answer: "Yes, we offer warranties on all our services. Specific warranty terms vary by service: PPF (10 years), Ceramic Coating (5 years), Car Wraps (3-5 years), and Window Tinting (Lifetime)."
      },
      {
        question: "How do I book a service?",
        answer: "You can book a service by contacting us through our website, calling us directly, or visiting our workshop. We'll provide a detailed quote and timeline for your specific requirements."
      }
    ]
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-none">
      <button
        className="py-4 w-full flex justify-between items-center text-left hover:text-neon transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <p className="pb-4 text-gray-300 text-base">{answer}</p>
      </div>
    </div>
  );
}

function CategorySection({ category, questions }: { category: string; questions: { question: string; answer: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="bg-dark-secondary rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        bounce: 0.3
      }}
    >
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-dark/20 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-bold">{category}</h2>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-6 pb-4">
          <div className="space-y-2">
            {questions.map((faq) => (
              <FAQItem 
                key={faq.question} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <ErrorBoundary>
      <div className="bg-dark min-h-screen">
        <motion.div 
          className="pt-32 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[#ddc9ff]">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Find answers to common questions about our services and processes
          </p>
        </motion.div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {faqs.map((category) => (
              <CategorySection 
                key={category.category}
                category={category.category}
                questions={category.questions}
              />
            ))}
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section className="bg-dark-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4">Still Have <span className="text-[#ddc9ff]">Questions</span>?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us directly and we&apos;ll be happy to help
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Contact Us
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
} 