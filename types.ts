export interface Tour {
  id: string;
  title: string;
  category: 'Cultural' | 'Adventure' | 'Gastronomic' | 'Family';
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  highlights: string[];
  ecoScore?: {
    level: 'High' | 'Medium' | 'Low'; // Environmental impact
    tags: string[]; // e.g., "Plastic Free", "Local Community Support"
  };
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