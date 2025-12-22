    import React, { useEffect } from 'react';
    import { useState } from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight, CheckCircle, Building2, Users, Rocket, ShoppingBag } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';
    import { useSupabaseData } from '../hooks/useSupabaseData';
    import { Service } from '../lib/supabase';
    import { updatePageSEO } from '../utils/seo';
    import QuickContactModal from '../components/Modals/QuickContactModal';
    
    const iconMap = {
      Building2,
      Users,
      Rocket,
      ShoppingBag,
    };
    
    const ServicesPage: React.FC = () => {
      const navigate = useNavigate();
      const [isQuickContactOpen, setIsQuickContactOpen] = useState(false);
      const { data: services, loading } = useSupabaseData<Service>('services', {
        orderBy: 'display_order',
        ascending: true
      });
    
      useEffect(() => {
        updatePageSEO({
          title: 'Our Services - PrimXP | Corporate Events, Product Launches & More',
          description: 'Comprehensive event management services including corporate events, team meetings, product launches, and retail branding. Professional execution for memorable experiences.',
          keywords: 'corporate events, team meetings, product launch, retail branding, event management services, workshop facilitation',
          url: 'https://www.primxp.com/services'
        });
      }, []);
    
      return (
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-[#2d545e] to-[#12343b] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Our Services
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  From intimate corporate gatherings to large-scale product launches, 
                  we deliver exceptional events that leave lasting impressions
                </p>
              </motion.div>
            </div>
          </section>
    
          {/* Services Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {loading ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="w-full h-64 bg-gray-200 rounded-2xl mb-6" />
                      <div className="space-y-3">
                        <div className="w-3/4 h-6 bg-gray-200 rounded" />
                        <div className="w-full h-4 bg-gray-200 rounded" />
                        <div className="w-5/6 h-4 bg-gray-200 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {services.map((service, index) => {
                    const IconComponent = service.icon ? iconMap[service.icon as keyof typeof iconMap] : Building2;
                    
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                          <div className="flex items-center mb-6">
                            <div className="bg-[#e1b382]/20 p-4 rounded-xl mr-4 group-hover:bg-[#e1b382]/30 transition-colors">
                              <IconComponent className="w-8 h-8 text-[#e1b382]" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-[#2d545e] group-hover:text-[#e1b382] transition-colors">
                                {service.title}
                              </h3>
                              {service.category && (
                                <span className="inline-block bg-[#e1b382]/10 text-[#e1b382] px-3 py-1 rounded-full text-sm font-medium mt-2 capitalize">
                                  {service.category}
                                </span>
                              )}
                            </div>
                          </div>
    
                          <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                            {service.description}
                          </p>
    
                          {service.features && service.features.length > 0 && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-[#2d545e] mb-3">Key Features:</h4>
                              <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center text-gray-600">
                                    <CheckCircle className="w-5 h-5 text-[#e1b382] mr-3 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
    
                          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                            <button 
                              onClick={() => navigate('/gallery')}
                              className="text-[#e1b382] hover:text-[#c89666] font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                            >
                              <span>Learn More</span>
                              <ArrowRight size={18} />
                            </button>
                            <button 
                              onClick={() => setIsQuickContactOpen(true)}
                              className="bg-[#2d545e] hover:bg-[#12343b] text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            >
                              Get Quote
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
    
          {/* Process Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d545e]">
                  Our Process
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From initial consultation to final execution, we ensure every detail is perfectly orchestrated
                </p>
              </motion.div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Consultation',
                    description: 'We understand your vision, requirements, and objectives to create a tailored solution.'
                  },
                  {
                    step: '02',
                    title: 'Planning',
                    description: 'Detailed planning and timeline creation with regular checkpoints and approvals.'
                  },
                  {
                    step: '03',
                    title: 'Execution',
                    description: 'Professional implementation with on-site coordination and real-time management.'
                  },
                  {
                    step: '04',
                    title: 'Follow-up',
                    description: 'Post-event analysis and feedback collection to ensure continuous improvement.'
                  }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center relative"
                  >
                    <div className="bg-[#e1b382] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                      {process.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-[#e1b382]/30 z-0" />
                    )}
                    <h3 className="text-xl font-bold mb-4 text-[#2d545e]">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
    
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-[#e1b382] to-[#c89666] text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to Create Something Extraordinary?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Let's discuss your event requirements and create an unforgettable experience together
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setIsQuickContactOpen(true)}
                    className="bg-white text-[#e1b382] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
                  </button>
                  <button 
                    onClick={() => navigate('/gallery')}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
                  >
                    View Portfolio
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
    
          {/* Quick Contact Modal */}
          <QuickContactModal 
            isOpen={isQuickContactOpen} 
            onClose={() => setIsQuickContactOpen(false)} 
          />
        </main>
      );
    };
    
    export default ServicesPage;