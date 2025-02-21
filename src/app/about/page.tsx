import Image from 'next/image';
import Link from 'next/link';

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
      {/* About Hero */}
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
              About Ace Wraps
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your trusted partner in vehicle transformation
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-xl text-gray-300">
              <p>
                Founded in 2010, Ace Wraps has grown to become one of Australia's leading vehicle transformation specialists. Our journey began with a simple mission: to provide the highest quality car wrapping services with unmatched attention to detail.
              </p>
              <p>
                Over the years, we've expanded our services to include paint protection films, ceramic coatings, and commercial fleet branding, always staying at the forefront of industry innovations and techniques.
              </p>
              <p>
                Today, we're proud to be the trusted choice for car enthusiasts, luxury vehicle owners, and businesses across Australia.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-[40px] overflow-hidden">
            <Image
              src="/images/img_3018.jpg"
              alt="Ace Wraps Workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-dark-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark p-8 rounded-[40px] hover-card">
              <div className="text-5xl font-bold text-neon mb-4">10+</div>
              <h3 className="text-2xl font-semibold mb-4">Years Experience</h3>
              <p className="text-xl text-gray-300">
                Decade of expertise in vehicle transformation
              </p>
            </div>
            <div className="bg-dark p-8 rounded-[40px] hover-card">
              <div className="text-5xl font-bold text-neon mb-4">1000+</div>
              <h3 className="text-2xl font-semibold mb-4">Projects Completed</h3>
              <p className="text-xl text-gray-300">
                Successful transformations and satisfied clients
              </p>
            </div>
            <div className="bg-dark p-8 rounded-[40px] hover-card">
              <div className="text-5xl font-bold text-neon mb-4">100%</div>
              <h3 className="text-2xl font-semibold mb-4">Satisfaction</h3>
              <p className="text-xl text-gray-300">
                Committed to excellence in every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold text-center mb-16">Cars We Specialise In</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <Image
              src="/images/logos/tesla-logo.png"
              alt="Tesla"
              fill
              className="object-contain hover:scale-110 transition-transform duration-300 grayscale"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <Image
              src="/images/logos/bmw-logo.png"
              alt="BMW"
              fill
              className="object-contain hover:scale-110 transition-transform duration-300 grayscale"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <Image
              src="/images/logos/ferrari-logo.png"
              alt="Ferrari"
              fill
              className="object-contain hover:scale-110 transition-transform duration-300 grayscale"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <Image
              src="/images/logos/lambo-logo.png"
              alt="Lamborghini"
              fill
              className="object-contain hover:scale-110 transition-transform duration-300 grayscale"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <Image
              src="/images/logos/ford-logo.png"
              alt="Ford"
              fill
              className="object-contain hover:scale-110 transition-transform duration-300 grayscale"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-dark-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-dark rounded-[40px] overflow-hidden hover-card">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Vehicle?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation
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