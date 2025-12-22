        import React, { useState, useEffect } from 'react';
        import { motion, AnimatePresence } from 'framer-motion';
        import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
        import { useSupabaseData } from '../../hooks/useSupabaseData';
        import { HeroImage } from '../../lib/supabase';
        import VideoModal from '../Modals/VideoModal';
        
        interface HeroSectionProps {
          onQuickContact: () => void;
        }
        
        const HeroSection: React.FC<HeroSectionProps> = ({ onQuickContact }) => {
          const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
          const { data: heroImages, loading } = useSupabaseData<HeroImage>('hero_images', {
            filter: { is_active: true },
            orderBy: 'display_order',
            ascending: true
          });
        
          const [currentSlide, setCurrentSlide] = useState(0);
        
          useEffect(() => {
            if (heroImages.length > 0) {
              const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroImages.length);
              }, 5000);
              return () => clearInterval(timer);
            }
          }, [heroImages.length]);
        
          const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
          };
        
          const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
          };
        
          if (loading || heroImages.length === 0) {
            return (
              <div className="relative h-screen bg-gradient-to-br from-[#2d545e] to-[#12343b] flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="text-white">Prim</span>
                    <span className="text-[#e1b382]">XP</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80">Creating Unforgettable Experiences</p>
                </div>
              </div>
            );
          }
        
          return (
            <section className="relative h-screen overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroImages[currentSlide]?.image_url})` }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </motion.div>
              </AnimatePresence>
        
              {/* Content Overlay */}
              <div className="relative h-full flex items-center justify-center z-10">
                <div className="max-w-4xl mx-auto text-center px-4">
                  <motion.div
                    key={`content-${currentSlide}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white"
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      {heroImages[currentSlide]?.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                      {heroImages[currentSlide]?.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <button 
                        onClick={onQuickContact}
                        className="bg-[#e1b382] hover:bg-[#c89666] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 hover:shadow-xl"
                      >
                        Get Started
                      </button>
                      <button 
                        onClick={() => setIsVideoModalOpen(true)}
                        className="flex items-center space-x-2 text-white border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-lg font-medium text-lg transition-all backdrop-blur-sm"
                      >
                        <Play size={20} />
                        <span>Watch Our Work</span>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
        
              {/* Navigation Controls */}
              {heroImages.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
                  >
                    <ChevronRight size={24} />
                  </button>
        
                  {/* Dots Indicator */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentSlide ? 'bg-[#e1b382]' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
        
              {/* Video Modal */}
              <VideoModal 
                isOpen={isVideoModalOpen} 
                onClose={() => setIsVideoModalOpen(false)} 
              />
        
              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-8 text-white/60 animate-bounce">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-sm">Scroll Down</span>
                  <div className="w-px h-8 bg-white/30" />
                </div>
              </div>
            </section>
          );
        };
        
        export default HeroSection;