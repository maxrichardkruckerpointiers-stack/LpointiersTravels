
export interface Tour {
  id: string;
  title: string;
  category: 'Cultural' | 'Adventure' | 'Gastronomic' | 'Family';
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  gallery?: string[]; // Array of image URLs for hover/slideshow
  description: string;
  highlights: string[];
  ecoScore?: {
    level: 'High' | 'Medium' | 'Low'; // Environmental impact
    tags: string[]; // e.g., "Plastic Free", "Local Community Support"
  };
}

export interface Island {
  id: string;
  name: string;
  vibe: string;
  price: number;
  rating: number;
  image: string;
  gallery?: string[]; // Array of image URLs
  tags: string[];
  descriptionEn: string;
  descriptionEs: string;
}

export interface ItineraryActivity {
  time: string;
  activity: string;
  location: string;
  description: string;
  priceEstimate: string; // e.g. "$50 USD" or "$200.000 COP"
  category: 'Beach' | 'History' | 'Food' | 'Party' | 'Nature';
}

export interface ItineraryPlan {
  title: string;
  summary: string;
  activities: ItineraryActivity[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  platform: 'TripAdvisor' | 'Google';
}

export interface MapMarker {
  id: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
  title: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface PlannerState {
  vibe: string;
  days: string;
  budget: string;
  group: string;
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export type Language = 'en' | 'es';
