import { Tour, Testimonial, MapMarker } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Historic Walled City Walk',
    category: 'Cultural',
    duration: '3 Hours',
    price: 45,
    rating: 4.9,
    reviews: 1240,
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Discover the secrets of the Spanish colonial era, walking through colorful streets and historic plazas.',
    highlights: ['San Felipe Castle', 'Clock Tower', 'Local Historian Guide'],
    ecoScore: {
      level: 'High',
      tags: ['Walking Tour', 'Zero Carbon', 'Supports Local Heritage']
    }
  },
  {
    id: '2',
    title: 'Rosario Islands Snorkel',
    category: 'Adventure',
    duration: '8 Hours',
    price: 85,
    rating: 4.8,
    reviews: 856,
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Escape to the crystal clear waters of the Caribbean. Snorkel in coral reefs and relax on white sand beaches.',
    highlights: ['Private Boat', 'Snorkeling Gear', 'Fresh Seafood Lunch'],
    ecoScore: {
      level: 'Medium',
      tags: ['Reef Protection Fee', 'No Single-use Plastics']
    }
  },
  {
    id: '3',
    title: 'Street Food Safari',
    category: 'Gastronomic',
    duration: '4 Hours',
    price: 55,
    rating: 5.0,
    reviews: 432,
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Taste the real Cartagena. From buttery arepas to fresh ceviche, eat your way through the local markets.',
    highlights: ['5 Food Tastings', 'Bazurto Market', 'Exotic Fruits'],
    ecoScore: {
      level: 'High',
      tags: ['100% Local Vendors', 'Food Waste Reduction']
    }
  },
  {
    id: '4',
    title: 'Sunset Sailing Experience',
    category: 'Family',
    duration: '2 Hours',
    price: 65,
    rating: 4.9,
    reviews: 210,
    image: 'https://picsum.photos/800/600?random=4',
    description: 'A magical evening sailing around the bay. Perfect for families and couples looking for the best view of the skyline.',
    highlights: ['Open Bar', 'Live Music', 'Sunset Views'],
    ecoScore: {
      level: 'Medium',
      tags: ['Wind Powered', 'Ocean Conservation Donation']
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    location: 'New York, USA',
    rating: 5,
    text: "The best way to see Cartagena! Our guide was knowledgeable and funny. The street food tour is a MUST.",
    avatar: 'https://picsum.photos/100/100?random=10',
    platform: 'TripAdvisor'
  },
  {
    id: 't2',
    name: 'Marco Rossi',
    location: 'Rome, Italy',
    rating: 5,
    text: "Incredible organization. The boat to Rosario Islands was punctual and the snorkeling was breathtaking.",
    avatar: 'https://picsum.photos/100/100?random=11',
    platform: 'Google'
  },
  {
    id: 't3',
    name: 'Elena Gomez',
    location: 'Madrid, Spain',
    rating: 5,
    text: "We felt so safe and welcomed. A perfect mix of history and fun. Highly recommend the walking tour.",
    avatar: 'https://picsum.photos/100/100?random=12',
    platform: 'TripAdvisor'
  }
];

export const MAP_MARKERS: MapMarker[] = [
  { id: 'm1', x: 45, y: 30, title: 'Walled City', description: 'The historic heart.', image: 'https://picsum.photos/200/150?random=20' },
  { id: 'm2', x: 20, y: 60, title: 'Bocagrande', description: 'Modern skyline & beaches.', image: 'https://picsum.photos/200/150?random=21' },
  { id: 'm3', x: 70, y: 25, title: 'San Felipe Castle', description: 'The grand fortress.', image: 'https://picsum.photos/200/150?random=22' },
  { id: 'm4', x: 55, y: 50, title: 'Getsemaní', description: 'Street art & culture.', image: 'https://picsum.photos/200/150?random=23' },
];