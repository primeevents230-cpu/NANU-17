import React, { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import StatsSection from '../components/Home/StatsSection';
import RecentWorkSection from '../components/Home/RecentWorkSection';
import ClientsSection from '../components/Home/ClientsSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import NewsletterSection from '../components/Home/NewsletterSection';
import { updatePageSEO } from '../utils/seo';

const HomePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'PrimXP - Premium Event Management & Brand Experiences',
      description: 'Leading event management company specializing in corporate events, product launches, retail branding, and team meetings. Creating unforgettable experiences with professional execution.',
      keywords: 'event management, corporate events, product launch, retail branding, team meetings, event planning, brand experiences',
      url: 'https://www.primxp.com'
    });
  }, []);

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <RecentWorkSection />
      <ClientsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
};

export default HomePage;