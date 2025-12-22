import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Calendar, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { updatePageSEO } from '../../utils/seo';

const CorporateEventsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updatePageSEO({
      title: 'Corporate Events - PrimXP | Professional Corporate Event Management',
      description: 'Expert corporate event management services including conferences, seminars, annual meetings, and corporate celebrations. Professional execution for memorable business events.',
      keywords: 'corporate events, business conferences, annual meetings, corporate celebrations, professional event management',
      url: 'https://www.primxp.com/services/corporate-events'
    });
  }, []);

  const features = [
    'Conference & Seminar Management',
    'Annual General Meetings',
    'Board Meetings & Executive Sessions',
    'Corporate Celebrations & Awards',
    'Networking Events',
    'Company Milestone Events',
    'Investor Relations Events',
    'Corporate Training Sessions'
  ];

  const benefits = [
    {
      icon: Building2,
      title: 'Professional Excellence',
      description: 'Maintain your corporate image with flawlessly executed events that reflect your brand values.'
    },
    {
      icon: Users,
      title: 'Stakeholder Engagement',
      description: 'Create meaningful connections between employees, clients, and partners through well-orchestrated events.'
    },
    {
      icon: Calendar,
      title: 'Seamless Coordination',
      description: 'End-to-end event management allowing you to focus on your business while we handle the details.'
    },
    {
      icon: Award,
      title: 'Measurable Results',
      description: 'Track event success with comprehensive analytics and feedback collection systems.'
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
              <Building2 className="w-10 h-10 text-[#e1b382]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Corporate Events
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Elevate your business presence with professionally managed corporate events that 
              inspire, engage, and deliver measurable results for your organization.
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
                Professional Corporate Event Management
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From intimate board meetings to large-scale conferences, we understand the unique 
                requirements of corporate events. Our team ensures every detail aligns with your 
                business objectives and corporate standards.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We handle everything from venue selection and logistics to technology integration 
                and post-event analysis, allowing you to focus on what matters most - your business goals.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">500+</div>
                  <div className="text-gray-600">Corporate Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
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
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
                alt="Corporate event setup"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Our Corporate Event Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your specific corporate event requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-[#e1b382] mb-4" />
                <h3 className="font-semibold text-[#2d545e] mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Why Choose Our Corporate Event Services?
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
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e1b382] to-[#c89666] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Elevate Your Corporate Events?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can make your next corporate event a resounding success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[#e1b382] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={20} />
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
    </main>
  );
};

export default CorporateEventsPage;