/*
  # PrimXP Website Database Schema

  1. New Tables
    - `hero_images` - Store hero section carousel images
    - `stats` - Company statistics for homepage
    - `recent_work` - Recent projects/work showcase
    - `clients` - Client logos and information
    - `testimonials` - Customer testimonials
    - `newsletter_subscribers` - Newsletter email subscriptions
    - `quick_contacts` - Quick contact form submissions
    - `contact_submissions` - Main contact form submissions
    - `gallery_images` - Gallery page images
    - `team_members` - About us team section
    - `services` - Services offered by the company
    - `in_house_services` - In-house capabilities

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access where appropriate
    - Add policies for authenticated admin access for modifications
*/

-- Hero Images Table
CREATE TABLE IF NOT EXISTS hero_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text,
  image_url text NOT NULL,
  alt_text text,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Stats Table
CREATE TABLE IF NOT EXISTS stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  value text NOT NULL,
  icon text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Recent Work Table
CREATE TABLE IF NOT EXISTS recent_work (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text,
  client_name text,
  project_date date,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Clients Table
CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  website_url text,
  description text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_position text,
  client_company text,
  testimonial_text text NOT NULL,
  client_image_url text,
  rating integer DEFAULT 5,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now()
);

-- Quick Contacts Table
CREATE TABLE IF NOT EXISTS quick_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  mobile text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Gallery Images Table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text,
  tags text[],
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  bio text,
  image_url text,
  linkedin_url text,
  email text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  short_description text,
  image_url text,
  icon text,
  features text[],
  category text,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- In House Services Table
CREATE TABLE IF NOT EXISTS in_house_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text,
  capabilities text[],
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE hero_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE recent_work ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE quick_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE in_house_services ENABLE ROW LEVEL SECURITY;

-- Public read policies for display tables
CREATE POLICY "Anyone can read hero images" ON hero_images FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can read stats" ON stats FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can read recent work" ON recent_work FOR SELECT USING (true);
CREATE POLICY "Anyone can read clients" ON clients FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can read testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Anyone can read gallery images" ON gallery_images FOR SELECT USING (true);
CREATE POLICY "Anyone can read team members" ON team_members FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can read services" ON services FOR SELECT USING (true);
CREATE POLICY "Anyone can read in house services" ON in_house_services FOR SELECT USING (is_active = true);

-- Public insert policies for contact forms and newsletter
CREATE POLICY "Anyone can insert newsletter subscriptions" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert quick contacts" ON quick_contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert contact submissions" ON contact_submissions FOR INSERT WITH CHECK (true);

-- Insert sample data
INSERT INTO hero_images (title, subtitle, image_url, alt_text, display_order) VALUES
('Creating Unforgettable Experiences', 'Premium event management and brand experiences that leave lasting impressions', 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg', 'Corporate event setup', 1),
('Innovative Event Solutions', 'From concept to execution, we bring your vision to life with precision and creativity', 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg', 'Modern event space', 2),
('Excellence in Every Detail', 'Comprehensive event management services for corporate and private clients', 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg', 'Professional event lighting', 3);

INSERT INTO stats (title, value, icon, display_order) VALUES
('Events Managed', '500+', 'Calendar', 1),
('Happy Clients', '200+', 'Users', 2),
('Years Experience', '10+', 'Award', 3),
('Team Members', '25+', 'Users2', 4);

INSERT INTO services (title, description, short_description, icon, category, is_featured, display_order) VALUES
('Corporate Events', 'Complete corporate event management including conferences, seminars, award ceremonies, and company celebrations. We handle everything from venue selection to catering and entertainment.', 'Professional corporate event planning and execution', 'Building2', 'corporate', true, 1),
('Team Meetings & Workshops', 'Facilitate productive team meetings, workshops, and training sessions with professional setup, AV equipment, and catering services.', 'Productive team gatherings and workshops', 'Users', 'corporate', true, 2),
('Product Launches', 'Make your product launch memorable with strategic planning, media coordination, and engaging presentations that create buzz and drive sales.', 'Impactful product launch events', 'Rocket', 'marketing', true, 3),
('Retail Branding', 'Comprehensive retail branding solutions including store design, promotional events, and customer engagement strategies.', 'Complete retail branding and promotional events', 'ShoppingBag', 'branding', true, 4);

INSERT INTO in_house_services (title, description, icon, capabilities, display_order) VALUES
('Stage Design & Setup', 'Professional stage design and construction for events of all sizes with custom backdrops and lighting integration.', 'Theater', ARRAY['Custom stage design', 'Professional construction', 'Backdrop creation', 'Safety compliance'], 1),
('Lighting Solutions', 'Complete lighting design and installation including ambient, stage, and decorative lighting for any event atmosphere.', 'Lightbulb', ARRAY['LED lighting systems', 'Mood lighting', 'Stage lighting', 'Wireless controls'], 2),
('Sound Systems', 'Professional audio equipment and sound engineering services for crystal clear audio delivery at any venue.', 'Volume2', ARRAY['PA systems', 'Wireless microphones', 'Audio mixing', 'Live sound engineering'], 3),
('Printing Services', 'In-house printing capabilities for banners, signage, promotional materials, and branded merchandise.', 'Printer', ARRAY['Large format printing', 'Banner production', 'Signage creation', 'Branded materials'], 4),
('Corporate Gifting', 'Curated corporate gift solutions including custom packaging, branded merchandise, and personalized gift items.', 'Gift', ARRAY['Custom packaging', 'Branded merchandise', 'Personalized gifts', 'Bulk ordering'], 5);

INSERT INTO team_members (name, position, bio, image_url, display_order) VALUES
('Rajesh Sharma', 'Founder & CEO', 'With over 10 years of experience in event management, Rajesh leads our team with vision and passion for excellence.', 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg', 1),
('Priya Patel', 'Creative Director', 'Priya brings creativity and innovation to every project, ensuring each event is unique and memorable.', 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg', 2),
('Amit Kumar', 'Operations Manager', 'Amit ensures seamless execution of all events with his attention to detail and operational expertise.', 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg', 3);

INSERT INTO testimonials (client_name, client_position, client_company, testimonial_text, client_image_url, rating, is_featured) VALUES
('Sarah Johnson', 'Marketing Director', 'Tech Innovations Ltd', 'PrimXP delivered an exceptional product launch event that exceeded our expectations. The attention to detail and professional execution was outstanding.', 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg', 5, true),
('Michael Chen', 'CEO', 'Digital Solutions Inc', 'Working with PrimXP was a pleasure. They transformed our corporate event into a memorable experience for all attendees.', 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg', 5, true);