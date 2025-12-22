import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, TrendingUp, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { updatePageSEO } from '../../utils/seo';

const ProductLaunchesPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updatePageSEO({
      title: 'Product Launches - PrimXP | Impactful Product Launch Events',
      description: 'Create buzz and drive sales with expertly managed product launch events. From concept to execution, we ensure your product launch makes a lasting impression.',
      keywords: 'product launch events, product unveiling, launch campaigns, brand activation, product marketing events',
      url: 'https://www.primxp.com/services/product-launches'
    });
  }, []);

  const services = [
    'Product Unveiling Events',
    'Media Launch Campaigns',
    'Influencer Engagement',
    'Interactive Product Demos',
    'Press Conference Management',
    'Digital Launch Integration',
    'Customer Experience Zones',
    'Launch Party Celebrations'
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Maximum Impact',
      description: 'Create memorable launch experiences that generate buzz and drive immediate market attention.'
    },
    {
      icon: Zap,
      title: 'Audience Engagement',
      description: 'Interactive experiences that allow customers to connect with your product on a deeper level.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Acceleration',
      description: 'Strategic launch events designed to drive immediate sales and long-term brand loyalty.'
    },
    {
      icon: Star,
      title: 'Brand Elevation',
      description: 'Position your product as a market leader through premium launch experiences.'
    }
  ];

  const launchTypes = [
    {
      title: 'Tech Product Launches',
      description: 'Cutting-edge presentations for software, hardware, and digital products with live demos and interactive experiences.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg'
    },
    {
      title: 'Consumer Product Reveals',
      description: 'Engaging consumer-focused events that create emotional connections and drive purchase intent.',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg'
    },
    {
      title: 'B2B Product Introductions',
      description: 'Professional presentations tailored for business audiences with ROI-focused messaging.',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg'
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
              <Rocket className="w-10 h-10 text-[#e1b382]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Product Launches
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Launch your products with impact. Create unforgettable experiences that generate 
              buzz, engage audiences, and drive immediate market success.
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
                Make Your Launch Unforgettable
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A successful product launch is more than just an announcement – it's a strategic 
                marketing moment that can define your product's market position and success trajectory.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive launch management combines creative storytelling, strategic planning, 
                and flawless execution to ensure your product makes the maximum impact from day one.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">150+</div>
                  <div className="text-gray-600">Product Launches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">85%</div>
                  <div className="text-gray-600">Sales Target Achievement</div>
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
                src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
                alt="Product launch event"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Launch Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Launch Event Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored launch experiences for different product categories and target audiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {launchTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2d545e] mb-3 group-hover:text-[#e1b382] transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
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
              Our Launch Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end launch management from strategy to execution
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
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <CheckCircle className="w-8 h-8 text-[#e1b382] mb-4 group-hover:scale-110 transition-transform" />
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
              Launch Success Drivers
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e1b382] to-[#c89666] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Launch with Impact?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create a product launch that generates buzz and drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[#e1b382] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Plan Your Launch</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/gallery')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Launch Events
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProductLaunchesPage;