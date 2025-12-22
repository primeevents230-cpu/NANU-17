import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Mic, Lightbulb, Camera, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { updatePageSEO } from '../../utils/seo';

const EventProductionPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updatePageSEO({
      title: 'Event Production - PrimXP | Complete Event Production Services',
      description: 'Full-service event production including audio-visual, lighting, staging, and technical management. Professional production services for flawless event execution.',
      keywords: 'event production, audio visual, lighting, staging, technical production, event technology, sound systems',
      url: 'https://www.primxp.com/services/event-production'
    });
  }, []);

  const services = [
    'Audio-Visual Production',
    'Stage Design & Setup',
    'Lighting Design',
    'Sound Engineering',
    'Video Production',
    'Live Streaming',
    'Technical Direction',
    'Equipment Rental'
  ];

  const benefits = [
    {
      icon: Settings,
      title: 'Technical Excellence',
      description: 'State-of-the-art equipment and expert technicians ensure flawless technical execution.'
    },
    {
      icon: Mic,
      title: 'Crystal Clear Audio',
      description: 'Professional sound systems and acoustic management for perfect audio quality.'
    },
    {
      icon: Lightbulb,
      title: 'Dynamic Lighting',
      description: 'Creative lighting designs that enhance atmosphere and visual impact.'
    },
    {
      icon: Camera,
      title: 'Visual Storytelling',
      description: 'Professional video production and live streaming capabilities for broader reach.'
    }
  ];

  const productionServices = [
    {
      title: 'Audio-Visual Systems',
      description: 'Complete AV solutions including projection, displays, sound systems, and control systems.',
      features: ['4K Projection Systems', 'LED Video Walls', 'Professional Sound Systems', 'Wireless Microphones', 'Control Room Setup']
    },
    {
      title: 'Stage & Lighting',
      description: 'Custom stage designs with professional lighting to create the perfect ambiance.',
      features: ['Custom Stage Design', 'LED Lighting Systems', 'Intelligent Moving Lights', 'Atmospheric Effects', 'Backdrop Design']
    },
    {
      title: 'Live Production',
      description: 'Real-time production services including live streaming and broadcast capabilities.',
      features: ['Multi-Camera Setup', 'Live Streaming', 'Real-time Switching', 'Graphics Integration', 'Remote Participation']
    }
  ];

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
            <div className="bg-[#e1b382]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Settings className="w-10 h-10 text-[#e1b382]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Event Production
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Complete technical production services that bring your events to life with 
              professional audio-visual, lighting, and staging solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
                Professional Event Production
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Behind every successful event is flawless technical execution. Our comprehensive 
                production services ensure your message is delivered with crystal clarity and 
                visual impact that captivates your audience.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From intimate boardroom presentations to large-scale conferences, we provide 
                the technical expertise and state-of-the-art equipment needed to make your 
                event technically perfect and visually stunning.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">1000+</div>
                  <div className="text-gray-600">Events Produced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">99.9%</div>
                  <div className="text-gray-600">Technical Uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg"
                alt="Event production setup"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Production Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical solutions for events of any scale and complexity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {productionServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-[#2d545e] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div>
                  <h4 className="font-semibold text-[#2d545e] mb-3">Capabilities:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#e1b382] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Our Production Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end technical production services for flawless event execution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors group text-center"
              >
                <CheckCircle className="w-8 h-8 text-[#e1b382] mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-[#2d545e] mb-2">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Technical Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#e1b382]/20 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#e1b382]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2d545e] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              State-of-the-Art Equipment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in the latest technology to ensure your events benefit from cutting-edge production capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Audio',
                items: ['Line Array Systems', 'Digital Mixing Consoles', 'Wireless Microphone Systems', 'In-Ear Monitoring']
              },
              {
                title: 'Visual Technology',
                items: ['4K Laser Projectors', 'LED Video Walls', 'Camera Systems', 'Live Streaming Equipment']
              },
              {
                title: 'Lighting Systems',
                items: ['LED Moving Lights', 'Atmospheric Effects', 'Intelligent Control Systems', 'Custom Rigging']
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-[#2d545e] mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[#e1b382] rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready for Flawless Production?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss your technical requirements and create a production plan that exceeds expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[#e1b382] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get Production Quote</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/gallery')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Production Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default EventProductionPage;