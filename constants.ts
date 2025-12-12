import { Tour, Testimonial, MapMarker } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Cartagena Colonial & Legendaria',
    category: 'Cultural',
    duration: '4 Horas',
    price: 45, // Adjusted for market competitiveness (High volume, lower margin strategy)
    rating: 4.9,
    reviews: 1450,
    // Premium image of Palenqueras/Streets
    image: 'https://images.unsplash.com/photo-1583997052308-5645f7945d78?q=80&w=800&auto=format&fit=crop',
    description: 'Sumérgete en la historia. Una experiencia única caminando por las calles amuralladas, descubriendo leyendas coloniales y arquitectura viva.',
    highlights: ['Guía Historiador', 'Degustación de Café', 'Entrada a Museos'],
    ecoScore: {
      level: 'High',
      tags: ['Cultura Local', 'Cero Plástico', 'Apoyo Comunitario']
    }
  },
  {
    id: '2',
    title: 'Paraíso Islas del Rosario VIP',
    category: 'Adventure',
    duration: 'Día Completo',
    price: 95, // Psychological pricing (under 100)
    rating: 4.8,
    reviews: 920,
    // Crystal clear water image
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop',
    description: 'Navega en lancha deportiva hacia aguas cristalinas. Snorkel en arrecifes vivos, playa privada y almuerzo gourmet caribeño incluido.',
    highlights: ['Lancha Rápida', 'Snorkel Guiado', 'Barra Abierta'],
    ecoScore: {
      level: 'Medium',
      tags: ['Protección de Arrecifes', 'Turismo Responsable']
    }
  },
  {
    id: '3',
    title: 'Gastro-Tour: Sabores del Caribe',
    category: 'Gastronomic',
    duration: '3.5 Horas',
    price: 65, // Competitive pricing for food tours
    rating: 5.0,
    reviews: 510,
    // Vibrant food image
    image: 'https://images.unsplash.com/photo-1574567295843-9878dc137c87?q=80&w=800&auto=format&fit=crop',
    description: 'Una explosión de sabor. Desde arepas de huevo hasta ceviches frescos en el mercado. Descubre por qué nuestra cocina es inolvidable.',
    highlights: ['7 Paradas de Comida', 'Mercado Bazurto', 'Bebidas Exóticas'],
    ecoScore: {
      level: 'High',
      tags: ['Ingredientes Locales', 'Apoyo a Vendedores']
    }
  },
  {
    id: '4',
    title: 'Atardecer Mágico en Velero',
    category: 'Family',
    duration: '2 Horas',
    price: 79, // Adjusted from 85 for better value perception
    rating: 4.9,
    reviews: 340,
    // Sunset sailing image
    image: 'https://images.unsplash.com/photo-1566415606622-a988184d0092?q=80&w=800&auto=format&fit=crop',
    description: 'La mejor vista de la ciudad moderna y antigua mientras el sol se pone. Cócteles, buena música y un ambiente de alta reputación.',
    highlights: ['Cóctel de Bienvenida', 'Música en Vivo', 'Vistas Panorámicas'],
    ecoScore: {
      level: 'Medium',
      tags: ['Energía Eólica', 'Conservación Oceánica']
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Emily Thompson',
    location: 'London, UK',
    rating: 5,
    text: "EcoExplorer Mundo gave us the most unforgettable experience. The attention to detail and the price were unbeatable.",
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    platform: 'TripAdvisor'
  },
  {
    id: 't2',
    name: 'Carlos Mendez',
    location: 'Mexico City',
    rating: 5,
    text: "La reputación de esta agencia es merecida. Calidad top y guías que realmente aman su ciudad. ¡Volveré!",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    platform: 'Google'
  },
  {
    id: 't3',
    name: 'Sophie Dubois',
    location: 'Paris, France',
    rating: 5,
    text: "Unique experiences you can't find elsewhere. The eco-focus and connection with locals made it special.",
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    platform: 'TripAdvisor'
  }
];

export const MAP_MARKERS: MapMarker[] = [
  { id: 'm1', x: 45, y: 30, title: 'Ciudad Amurallada', description: 'Historia viva.', image: 'https://images.unsplash.com/photo-1583997052308-5645f7945d78?q=80&w=200&auto=format&fit=crop' },
  { id: 'm2', x: 20, y: 60, title: 'Bocagrande', description: 'Playas y modernidad.', image: 'https://images.unsplash.com/photo-1569420268578-e5db3a3a4128?q=80&w=200&auto=format&fit=crop' },
  { id: 'm3', x: 70, y: 25, title: 'Castillo San Felipe', description: 'La gran fortaleza.', image: 'https://images.unsplash.com/photo-1629833590742-02c31e428df1?q=80&w=200&auto=format&fit=crop' },
  { id: 'm4', x: 55, y: 50, title: 'Getsemaní', description: 'Arte y cultura.', image: 'https://images.unsplash.com/photo-1624657929427-0233b821421c?q=80&w=200&auto=format&fit=crop' },
];