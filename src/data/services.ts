export interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
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
    title: 'Chrome Delete',
    description: "Transform your vehicle's chrome trim with our premium chrome delete service. We use high-quality vinyl wrap materials to achieve a sleek, modern appearance that complements any color scheme.",
    features: [
      'Complete Chrome Delete',
      'Custom Color Options',
      'Window Trim',
      'Grille Trim',
      'Door Handles',
      'Professional Installation'
    ],
    image: '/images/img_3018.jpg'
  },
  {
    title: 'Commercial Fleet Wrapping',
    description: "Professional fleet branding solutions for businesses of all sizes. Turn your vehicles into mobile billboards with our high-quality commercial wrapping services.",
    features: [
      'Fleet Branding',
      'Logo Design',
      'Partial Wraps',
      'Full Wraps',
      'Nationwide Service',
      'Corporate Identity'
    ],
    image: '/images/img_3014.png'
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
  }
]; 