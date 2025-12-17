import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { supabase, NewsletterSubscription } from '../../lib/supabase';

const NewsletterSection: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<NewsletterSubscription>();

  const onSubmit = async (data: NewsletterSubscription) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([data]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          alert('This email is already subscribed to our newsletter.');
        } else {
          throw error;
        }
        return;
      }

      alert('Thank you for subscribing! We\'ll keep you updated with our latest news.');
      reset();
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('There was an error subscribing to our newsletter. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#e1b382] to-[#c89666] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 p-4 rounded-full">
              <Mail className="w-12 h-12" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about our latest events, 
            industry insights, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                {errors.email && (
                  <p className="text-white/80 text-sm mt-2 text-left">{errors.email.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2d545e] hover:bg-[#12343b] text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-sm text-white/70 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;