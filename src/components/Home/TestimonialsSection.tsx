import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSupabaseData } from '../../hooks/useSupabaseData';
import { Testimonial } from '../../lib/supabase';

const TestimonialsSection: React.FC = () => {
  const { data: testimonials, loading } = useSupabaseData<Testimonial>('testimonials', {
    filter: { is_featured: true },
    orderBy: 'created_at',
    ascending: false
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="py-20 bg-[#2d545e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-pulse">
            <div className="w-48 h-8 bg-white/20 rounded mx-auto mb-16" />
            <div className="space-y-6">
              <div className="w-full h-32 bg-white/20 rounded" />
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-5 h-5 bg-white/20 rounded" />
                ))}
              </div>
              <div className="w-48 h-20 bg-white/20 rounded mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-[#2d545e] to-[#12343b] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <Quote className="absolute top-20 left-10 w-32 h-32 text-[#e1b382]" />
        <Quote className="absolute bottom-20 right-10 w-32 h-32 text-[#e1b382] rotate-180" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say about their experience
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-6 h-6 ${
                      index < currentTestimonial.rating
                        ? 'text-[#e1b382] fill-current'
                        : 'text-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto font-light">
                "{currentTestimonial.testimonial_text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                {currentTestimonial.client_image_url && (
                  <img
                    src={currentTestimonial.client_image_url}
                    alt={currentTestimonial.client_name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#e1b382]"
                  />
                )}
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-[#e1b382]">
                    {currentTestimonial.client_name}
                  </h4>
                  {currentTestimonial.client_position && (
                    <p className="text-white/80">
                      {currentTestimonial.client_position}
                    </p>
                  )}
                  {currentTestimonial.client_company && (
                    <p className="text-white/60 text-sm">
                      {currentTestimonial.client_company}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {testimonials.length > 1 && (
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#e1b382]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;