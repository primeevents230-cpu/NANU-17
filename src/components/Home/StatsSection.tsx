import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Users as Users2 } from 'lucide-react';
import { useSupabaseData } from '../../hooks/useSupabaseData';
import { Stat } from '../../lib/supabase';

const iconMap = {
  Calendar,
  Users,
  Award,
  Users2,
};

const StatsSection: React.FC = () => {
  const { data: stats, loading } = useSupabaseData<Stat>('stats', {
    filter: { is_active: true },
    orderBy: 'display_order',
    ascending: true
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4" />
                <div className="w-20 h-8 bg-gray-200 rounded mx-auto mb-2" />
                <div className="w-24 h-4 bg-gray-200 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#2d545e] to-[#12343b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon ? iconMap[stat.icon as keyof typeof iconMap] : Award;
            
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="bg-[#e1b382]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e1b382]/30 transition-colors">
                  <IconComponent className="text-[#e1b382] w-10 h-10" />
                </div>
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold mb-2 text-[#e1b382]"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-lg text-white/80 font-medium">
                  {stat.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;