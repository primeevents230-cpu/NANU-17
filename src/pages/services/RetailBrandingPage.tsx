import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { updatePageSEO } from '../../utils/seo';

const RetailBrandingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updatePageSEO({
      title: 'Retail Branding - PrimXP | Brand Activation & Retail Experience Events',
      description: 'Transform retail spaces with immersive brand experiences. From pop-up stores to brand activations, create memorable customer touchpoints that drive sales.',
      keywords: 'retail branding, brand activation, pop-up stores, retail experiences, customer engagement, brand immersion',
      url: 'https://www.primxp.com/services/retail-branding'
    });
  }, []);

  const services = [
    'Pop-up Store Design',
    'Brand Activation Campaigns',
    'Retail Experience Zones',
    'Product Sampling Events',
    'Store Launch Events',
    'Seasonal Campaigns',
    'Interactive Brand Displays',
    'Customer Engagement Programs'
  ];

  const benefits = [
    {
      icon: ShoppingBag,
      title: 'Sales Conversion',
      description: 'Create immersive experiences that drive immediate purchase decisions and increase conversion rates.'
    },
    {
      icon: Eye,
      title: 'Brand Visibility',
      description: 'Maximize brand exposure through strategic placement and eye-catching experiential displays.'
    },
    {
      icon: Users,
      title: 'Customer Connection',
      description: 'Build emotional connections between customers and your brand through interactive experiences.'
    },
    {
      icon: TrendingUp,
      title: 'Market Penetration',
      description: 'Expand market reach and penetrate new customer segments through targeted retail activations.'
    }
  ];

  const brandingTypes = [
    {
      title: 'Pop-up Experiences',
      description: 'Temporary retail spaces that create urgency and exclusivity while testing new markets and products.',
      features: ['Location Scouting', 'Space Design', 'Customer Flow Optimization', 'Sales Integration']
    },
    {
      title: 'Brand Activations',
      description: 'Interactive campaigns that bring your brand to life through engaging customer experiences.',
      features: ['Interactive Displays', 'Product Demonstrations', 'Social Media Integration', 'Lead Generation']
    },
    {
      title: 'Retail Partnerships',
      description: 'Collaborative experiences with retail partners to maximize reach and customer engagement.',
      features: ['Partner Coordination', 'Co-branded Experiences', 'Cross-promotion', 'Performance Tracking']
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
              <ShoppingBag className="w-10 h-10 text-[#e1b382]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Retail Branding
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform retail spaces into immersive brand experiences that captivate customers, 
              drive engagement, and accelerate sales growth.
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
              <img
                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
                alt="Retail branding activation"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
                Immersive Brand Experiences
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In today's competitive retail landscape, brands need to create memorable experiences 
                that go beyond traditional advertising. Our retail branding solutions transform 
                ordinary spaces into extraordinary brand touchpoints.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From pop-up stores to brand activations, we design experiences that not only 
                showcase your products but create emotional connections that drive long-term 
                customer loyalty and immediate sales results.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">200+</div>
                  <div className="text-gray-600">Brand Activations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">40%</div>
                  <div className="text-gray-600">Avg. Sales Increase</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branding Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Retail Branding Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive retail experiences designed to maximize brand impact and customer engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brandingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-[#2d545e] mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div>
                  <h4 className="font-semibold text-[#2d545e] mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
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
              Our Retail Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete retail branding solutions from concept to execution
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
              Drive Retail Success
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

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Proven Results
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '200+', label: 'Brand Activations' },
              { metric: '40%', label: 'Average Sales Increase' },
              { metric: '85%', label: 'Customer Engagement Rate' },
              { metric: '95%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-[#e1b382]/10 to-[#c89666]/10 rounded-xl"
              >
                <div className="text-4xl font-bold text-[#e1b382] mb-2">{stat.metric}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
              Ready to Transform Your Retail Presence?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create immersive brand experiences that drive customer engagement and sales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[#e1b382] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your Activation</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/gallery')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Brand Activations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default RetailBrandingPage;