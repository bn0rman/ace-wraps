import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export default function ServiceCard({ title, description, imageUrl, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={href}
          className="inline-block bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
} 