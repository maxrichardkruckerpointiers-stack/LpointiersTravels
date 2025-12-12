
import { Tour, Testimonial, MapMarker, Island } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Cartagena Colonial & Legendaria',
    category: 'Cultural',
    duration: '4 Horas',
    price: 45, 
    rating: 4.9,
    reviews: 1450,
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
    price: 95, 
    rating: 4.8,
    reviews: 920,
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
    price: 65,
    rating: 5.0,
    reviews: 510,
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
    price: 79, 
    rating: 4.9,
    reviews: 340,
    image: 'https://images.unsplash.com/photo-1566415606622-a988184d0092?q=80&w=800&auto=format&fit=crop',
    description: 'La mejor vista de la ciudad moderna y antigua mientras el sol se pone. Cócteles, buena música y un ambiente de alta reputación.',
    highlights: ['Cóctel de Bienvenida', 'Música en Vivo', 'Vistas Panorámicas'],
    ecoScore: {
      level: 'Medium',
      tags: ['Energía Eólica', 'Conservación Oceánica']
    }
  }
];

export const ISLANDS_DATA: Island[] = [
  {
    id: 'bora-bora',
    name: 'Bora Bora Beach Club',
    vibe: 'Party & Exclusive',
    price: 105,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?q=80&w=800&auto=format&fit=crop', 
    tags: ['DJ Live', 'Camas de Playa', 'Cóctel Bienvenida'],
    descriptionEn: 'The most famous club in Rosario Islands. Vibrant atmosphere, house music, and a VIP area for those looking to party in style.',
    descriptionEs: 'El club más famoso de las Islas del Rosario. Ambiente vibrante, música house y zona VIP para quienes buscan fiesta con estilo.'
  },
  {
    id: 'isla-encanto',
    name: 'Hotel Isla del Encanto',
    vibe: 'Luxury & Relax',
    price: 115,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop', 
    tags: ['Piscina', 'Buffet Premium', 'Familiar'],
    descriptionEn: 'A true eco-hotel experience. Large pool, private white sand beach, and an exquisite buffet. Perfect for families and couples.',
    descriptionEs: 'Una verdadera experiencia de eco-hotel. Gran piscina, playa privada de arena blanca y un buffet exquisito. Perfecto para familias y parejas.'
  },
  {
    id: 'cholon',
    name: 'Cholón Party Boat',
    vibe: 'Yacht Party',
    price: 85,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544473244-f6895e672d64?q=80&w=800&auto=format&fit=crop', 
    tags: ['Público Joven', 'Rumba en Bote', 'Mariscos'],
    descriptionEn: 'The meeting point for yachts and boats. Loud music, drinks in the water, and a high-energy party atmosphere.',
    descriptionEs: 'El punto de encuentro de yates y lanchas. Música alta, bebidas en el agua y un ambiente de fiesta de alta energía.'
  },
  {
    id: 'bendita-beach',
    name: 'Bendita Beach',
    vibe: 'Private & Eco',
    price: 95,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800&auto=format&fit=crop', 
    tags: ['Exclusivo', 'Playa Virgen', 'Tranquilidad'],
    descriptionEn: 'An island dedicated to privacy. Strictly limited capacity ensuring peace, quiet, and a deep connection with the Caribbean nature.',
    descriptionEs: 'Una isla dedicada a la privacidad. Capacidad estrictamente limitada asegurando paz, tranquilidad y conexión con la naturaleza caribeña.'
  },
  {
    id: 'gente-de-mar',
    name: 'Gente de Mar (Isla Grande)',
    vibe: 'Nature & Coral',
    price: 90,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', 
    tags: ['Agua Cristalina', 'Snorkel', 'Arrecifes'],
    descriptionEn: 'Located on Isla Grande, known for having some of the clearest waters in the archipelago and beautiful coral reefs.',
    descriptionEs: 'Ubicado en Isla Grande, conocido por tener una de las aguas más cristalinas del archipiélago y hermosos arrecifes de coral.'
  },
  {
    id: 'fenix-beach',
    name: 'Fenix Beach (Tierra Bomba)',
    vibe: 'Boho Chic',
    price: 70,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop', 
    tags: ['Cerca a Ciudad', 'Diseño', 'Buena Música'],
    descriptionEn: 'Modern boho style just 15 mins from the city. Great DJs, amazing paella, and a very instagrammable aesthetic.',
    descriptionEs: 'Estilo boho moderno a solo 15 min de la ciudad. Grandes DJs, paella increíble y una estética muy "instagrammable".'
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
