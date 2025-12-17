import React from 'react';
import { motion } from 'framer-motion';
import { useSupabaseData } from '../../hooks/useSupabaseData';
import { Client } from '../../lib/supabase';

const ClientsSection: React.FC = () => {
  const { data: clients, loading } = useSupabaseData<Client>('clients', {
    filter: { is_active: true },
    orderBy: 'display_order',
    ascending: true
  });

  if (loading || clients.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d545e]">
              Trusted by Leading Brands
            </h2>
            <div className="flex justify-center space-x-8 opacity-30">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-20 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d545e]">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've had the privilege to work with some of the most respected companies and organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors h-32 flex items-center justify-center">
                <img
                  src={client.logo_url}
                  alt={client.name}
                  className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-3 text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite scroll animation for larger lists */}
        {clients.length > 10 && (
          <div className="mt-16 overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex space-x-8 whitespace-nowrap"
            >
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex-shrink-0 w-40 h-20 bg-gray-50 rounded-lg flex items-center justify-center">
                  <img
                    src={client.logo_url}
                    alt={client.name}
                    className="max-w-full max-h-12 object-contain filter grayscale"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsSection;