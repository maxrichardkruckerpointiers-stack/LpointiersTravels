
import { Tour, Testimonial, MapMarker, Island } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Walking Tour Ciudad Amurallada',
    category: 'Cultural',
    duration: '3 Horas',
    price: 35, 
    rating: 4.9,
    reviews: 1850,
    // High Quality Unsplash Image for Colonial Street
    image: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583997052308-5645f7945d78?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Recorrido histórico esencial por el "Corralito de Piedra". Visitamos la Torre del Reloj, Plaza de la Aduana, San Pedro Claver y caminamos sobre las murallas escuchando historias de piratas y la Inquisición.',
    highlights: ['Guía Historiador', 'Plazas Coloniales', 'Puesta de Sol en Muralla'],
    ecoScore: {
      level: 'High',
      tags: ['100% Caminata', 'Cultura Local', 'Patrimonio']
    }
  },
  {
    id: '2',
    title: 'Chiva Rumbera: Fiesta Nocturna',
    category: 'Family', // Handled as Party in UI filter
    duration: '3.5 Horas',
    price: 25, 
    rating: 4.7,
    reviews: 2800,
    // High Quality Party/Night Image
    image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97d848?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533174072545-e8d4aa97d848?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800'
    ],
    description: 'La auténtica fiesta cartagenera. Recorrido panorámico en bus colorido con música crossover, barra libre de licor nacional y entrada a discoteca.',
    highlights: ['Barra Libre', 'Animación en Vivo', 'Entrada a Discoteca'],
    ecoScore: {
      level: 'Medium',
      tags: ['Tradición Musical', 'Grupo Compartido']
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
    // High Quality Sailing Sunset
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494639733470-749e623c2a13?q=80&w=800'
    ],
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
    // High Quality Beach Club
    image: 'https://images.unsplash.com/photo-1576014131795-d44019922e96?q=80&w=800&auto=format&fit=crop', 
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
    // High Quality Resort Pool
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop', 
    gallery: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800'
    ],
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
    // High Quality Yacht/Boat Party
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800',
      'https://images.unsplash.com/photo-1544551763-46a875611267?q=80&w=800'
    ],
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
    // High Quality Pristine Beach
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800&auto=format&fit=crop', 
    gallery: [
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800',
      'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=800'
    ],
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
    // High Quality Reef/Water
    image: 'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=800&auto=format&fit=crop', 
    gallery: [
      'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=800',
      'https://images.unsplash.com/photo-1468413253740-806624c219ee?q=80&w=800'
    ],
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
    // High Quality Boho Beach
    image: 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=800&auto=format&fit=crop', 
    gallery: [
      'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=800',
      'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800'
    ],
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
