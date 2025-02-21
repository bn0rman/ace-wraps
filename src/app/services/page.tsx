import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Car Wrapping',
    description: 'Transform your vehicle with our premium vinyl wraps. Choose from a wide range of colors and finishes.',
    features: [
      'Full Vehicle Wraps',
      'Partial Wraps',
      'Color Change Wraps',
      'Commercial Fleet Wrapping',
      'Custom Designs',
      'Paint Protection Film'
    ],
    image: '/images/green-bmw.jpg'
  },
  {
    title: 'Paint Protection Film',
    description: "Protect your vehicle's paint with our high-quality PPF. Our clear PPF provides ultimate protection against rock chips, scratches, and environmental damage. Starting from $2,100 for full front end protection, with options for full vehicle coverage at $4,999.",
    features: [
      'Full Front Protection (From $2,100)',
      'Full Vehicle Coverage (From $4,999)',
      'Track Pack PPF (From $2,900)',
      'Self-Healing Technology',
      'UV Protection',
      '10 Year Warranty'
    ],
    image: '/images/img_3343.jpg'
  },
  {
    title: 'Ceramic Coating',
    description: "Premium ceramic coating service starting from $1,499. Our ceramic coating creates a permanent bond with your vehicle's paint, providing long-lasting protection against environmental contaminants while maintaining a deep, glossy finish that's easier to clean.",
    features: [
      'Full Vehicle Coating (From $1,499)',
      'Paint Protection',
      'Hydrophobic Properties',
      'UV Protection',
      'Enhanced Gloss',
      '5 Year Warranty'
    ],
    image: '/images/ceramic_image.jpg'
  },
  {
    title: 'Headlight & Tail Light Tint',
    description: "Professional headlight and tail light tinting service starting from $200 per set. Using premium PPF technology, we provide a perfect blend of style and protection. Available in multiple shades to match your vehicle's aesthetic while maintaining optimal visibility.",
    features: [
      'Headlights (From $200/set)',
      'Tail Lights (From $200/set)',
      'Self-Healing Technology',
      'Multiple Shade Options',
      'UV Protection',
      'Professional Installation'
    ],
    image: '/images/img_3365.jpg'
  },
  {
    title: 'Window Tinting',
    description: "Professional window tinting service starting from $299 for a full vehicle. We use premium films that offer superior heat rejection, UV protection, and enhanced privacy. All our tints comply with Australian legal requirements while providing maximum benefits.",
    features: [
      'Full Car Tint (From $299)',
      'Ceramic Film Options',
      'UV Protection',
      'Heat Reduction',
      'Enhanced Privacy',
      'Professional Installation'
    ],
    image: '/images/tinting.jpg'
  },
  {
    title: 'Matte / Satin PPF',
    description: "Transform your vehicle's finish with our Satin PPF conversion. Starting from $5,300 for full vehicle coverage, this premium service not only provides ultimate protection but also gives your car a stunning satin finish that turns heads while maintaining the paint's integrity.",
    features: [
      'Full Vehicle Coverage (From $5,300)',
      'Rock Chip Protection',
      'Scratch Resistance',
      'Unique Matte Finish',
      'Self-Healing Technology',
      'Professional Installation'
    ],
    image: '/images/img_3014.png'
  },
  {
    title: 'Colour PPF Conversion',
    description: "Transform your vehicle with our Color PPF service, starting from $5,500 for full vehicle coverage. Choose from our range of stunning colors to completely change your car's appearance while getting the same protective benefits as our clear PPF.",
    features: [
      'Full Vehicle Coverage (From $5,500)',
      'Multiple Color Options',
      'Paint Protection',
      'Self-Healing Technology',
      'UV Protection',
      '10 Year Warranty'
    ],
    image: '/images/img_3018.jpg'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-dark">
      {/* Services Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium vehicle transformation services with guaranteed satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-5xl font-bold mb-8">{service.title}</h2>
                <p className="text-xl text-gray-300 mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-neon flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90"
                >
                  Get a Quote
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className={`relative h-[500px] rounded-[40px] overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-secondary rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Vehicle?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-neon text-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 w-64"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 