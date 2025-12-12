
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
    // Updated Main Image
    image: 'https://www.freetour.com/images/tours/7995/cartagena-free-walking-tour-39.jpg',
    // Added Gallery
    gallery: [
      'https://www.freetour.com/images/tours/7995/cartagena-free-walking-tour-39.jpg',
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/0c/b8/39.jpg'
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
    category: 'Family', // Maps to "Party/Group" in the filter logic
    duration: '3.5 Horas',
    price: 25, 
    rating: 4.7,
    reviews: 2800,
    image: 'https://www.planessantamarta.com.co/wp-content/uploads/2023/12/Chiva-40-pax.jpeg',
    gallery: [
      'https://www.planessantamarta.com.co/wp-content/uploads/2023/12/Chiva-40-pax.jpeg',
      'https://brisasdelmar.co/wp-content/uploads/2023/03/CHIVA-RUMBERA.jpg'
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
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/b0/c4/bc.jpg',
    gallery: [
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/b0/c4/bc.jpg',
      'https://static.wixstatic.com/media/12aa80_812ac5621cb84f0cb28639f965c078ae~mv2.jpg/v1/fit/w_327,h_327,q_90/12aa80_812ac5621cb84f0cb28639f965c078ae~mv2.jpg'
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
    image: 'https://th.bing.com/th/id/R.4ff4df37f98c5aa7077cae622aee130d?rik=92LEEGA5JpwGRw&pid=ImgRaw&r=0', 
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
    image: 'https://tourspalmerasparaiso.com/wp-content/uploads/2018/10/16.jpg', 
    gallery: [
      'https://tourspalmerasparaiso.com/wp-content/uploads/2018/10/16.jpg',
      'https://tourporelcaribe.com/wp-content/uploads/2022/12/hotel-islas-del-encanto-en-cartagena.jpeg'
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
    image: 'https://tourporelcaribe.com/wp-content/uploads/2022/09/rumba-en-cholon-1.jpg',
    gallery: [
      'https://tourporelcaribe.com/wp-content/uploads/2022/09/rumba-en-cholon-1.jpg',
      'https://www.grtourscartagena.com.co/wp-content/uploads/2022/12/IMG-20210905-WA0057-copia.jpg',
      'https://estrellatourscartagena.com/wp-content/uploads/2018/10/CHOLON-2.jpg'
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
    image: 'https://benditabeach.com/wp-content/uploads/2015/07/BenditaBeach-Isla-Privada-78-1.jpg', 
    gallery: [
      'https://benditabeach.com/wp-content/uploads/2015/07/BenditaBeach-Isla-Privada-78-1.jpg',
      'https://benditabeach.com/wp-content/uploads/2015/07/BenditaBeach-Isla-Privada-21.jpg'
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
    image: 'https://tse1.mm.bing.net/th/id/OIP.nnwigbYTjib6AglEYFfp9AHaEI?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3', 
    gallery: [
      'https://tse1.mm.bing.net/th/id/OIP.nnwigbYTjib6AglEYFfp9AHaEI?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://www.geckoroutes.com/wp-content/uploads/2022/12/Isla-Grande-Colombia-Guide-cover-image.jpg'
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
    image: 'https://www.tangol.com/Fotos/Tours/fenix-beach-full-day-en-tierra-bomba_32333_202404181806460.JPG', 
    gallery: [
      'https://www.tangol.com/Fotos/Tours/fenix-beach-full-day-en-tierra-bomba_32333_202404181806460.JPG',
      'https://fenix.co/wp-content/uploads/2024/09/fenix_beach_cartagena_4.webp'
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
