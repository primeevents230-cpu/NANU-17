import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { updatePageSEO } from '../../utils/seo';

const TeamMeetingsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    updatePageSEO({
      title: 'Team Meetings - PrimXP | Engaging Team Building & Workshop Events',
      description: 'Professional team meeting and workshop facilitation services. Create engaging team building experiences, strategic planning sessions, and collaborative workshops.',
      keywords: 'team meetings, team building, workshops, strategic planning, collaborative sessions, team engagement',
      url: 'https://www.primxp.com/services/team-meetings'
    });
  }, []);

  const services = [
    'Strategic Planning Sessions',
    'Team Building Workshops',
    'Leadership Development Programs',
    'Brainstorming & Innovation Sessions',
    'Quarterly Business Reviews',
    'Department Retreats',
    'Cross-functional Collaboration',
    'Performance Review Meetings'
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Enhanced Collaboration',
      description: 'Foster better teamwork and communication through structured activities and facilitated discussions.'
    },
    {
      icon: Target,
      title: 'Goal Alignment',
      description: 'Ensure all team members are aligned with company objectives and individual responsibilities.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Catalyst',
      description: 'Create environments that encourage creative thinking and breakthrough solutions.'
    },
    {
      icon: Heart,
      title: 'Team Morale',
      description: 'Boost team spirit and motivation through engaging and meaningful interactions.'
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
              <Users className="w-10 h-10 text-[#e1b382]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Team Meetings
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform your team dynamics with expertly facilitated meetings and workshops 
              that drive collaboration, innovation, and measurable results.
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
                src="https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg"
                alt="Team meeting in progress"
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
                Engaging Team Experiences
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team meeting facilitation goes beyond traditional boardroom sessions. We create 
                dynamic, interactive experiences that energize your team and drive meaningful outcomes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether it's a strategic planning retreat, team building workshop, or innovation session, 
                we design experiences that strengthen relationships and accelerate business results.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">300+</div>
                  <div className="text-gray-600">Team Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e1b382] mb-2">95%</div>
                  <div className="text-gray-600">Engagement Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Our Team Meeting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to enhance team collaboration and productivity
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
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <CheckCircle className="w-8 h-8 text-[#e1b382] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-[#2d545e] mb-2">{service}</h3>
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
              Transform Your Team Dynamics
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
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2d545e]">
              Our Facilitation Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Pre-Meeting Assessment',
                description: 'We analyze team dynamics, objectives, and challenges to design the perfect session format.'
              },
              {
                step: '02',
                title: 'Interactive Facilitation',
                description: 'Expert facilitators guide engaging activities and discussions to maximize participation.'
              },
              {
                step: '03',
                title: 'Action Planning',
                description: 'Clear next steps and accountability measures ensure lasting impact beyond the meeting.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="bg-[#e1b382] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
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
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Energize Your Team?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create engaging team experiences that drive collaboration and results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[#e1b382] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Plan Your Team Session</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/gallery')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                See Team Events
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TeamMeetingsPage;