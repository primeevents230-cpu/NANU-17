import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database interfaces
export interface HeroImage {
  id: string;
  title: string;
  subtitle?: string;
  image_url: string;
  alt_text?: string;
  is_active: boolean;
  display_order: number;
}

export interface Stat {
  id: string;
  title: string;
  value: string;
  icon?: string;
  display_order: number;
}

export interface RecentWork {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  category?: string;
  client_name?: string;
  project_date?: string;
  is_featured: boolean;
}

export interface Client {
  id: string;
  name: string;
  logo_url: string;
  website_url?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_position?: string;
  client_company?: string;
  testimonial_text: string;
  client_image_url?: string;
  rating: number;
  is_featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  short_description?: string;
  image_url?: string;
  icon?: string;
  features?: string[];
  category?: string;
  is_featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  image_url?: string;
  linkedin_url?: string;
  email?: string;
}

export interface InHouseService {
  id: string;
  title: string;
  description: string;
  icon?: string;
  capabilities?: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  category?: string;
  tags?: string[];
  is_featured: boolean;
}

// Form submission interfaces
export interface QuickContact {
  name: string;
  mobile: string;
  message?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
}

export interface NewsletterSubscription {
  email: string;
}