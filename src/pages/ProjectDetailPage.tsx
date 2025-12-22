    import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Clock, DollarSign, Play, Quote } from 'lucide-react';
import { supabase, RecentWork } from '../lib/supabase';
import { updatePageSEO } from '../utils/seo';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<RecentWork | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;

      try {
        const { data, error } = await supabase
          .from('recent_work')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        
        setProject(data);
        setSelectedImage(data.image_url);
        
        updatePageSEO({
          title: `${data.title} - PrimXP Project Details`,
          description: data.description || 'Detailed view of our project execution and results',
          keywords: `${data.category}, event management, ${data.client_name}`,
          url: `https://www.primxp.com/project/${id}`
        });
      } catch (error) {
        console.error('Error fetching project:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#e1b382]" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-[#e1b382] text-white px-6 py-3 rounded-lg hover:bg-[#c89666] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-[#2d545e] to-[#12343b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  {project.category && (
                    <span className="bg-[#e1b382] px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                  )}
                  {project.project_date && (
                    <span className="text-white/70">
                      {new Date(project.project_date).getFullYear()}
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {project.title}
                </h1>
                
                {project.client_name && (
                  <p className="text-xl text-[#e1b382] mb-4">
                    Client: {project.client_name}
                  </p>
                )}
                
                <p className="text-lg text-white/90 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="relative">
                <img
                  src={selectedImage}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
                {project.video_url && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors rounded-xl group">
                    <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.project_duration && (
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Clock className="w-8 h-8 text-[#e1b382] mx-auto mb-3" />
                <h3 className="font-bold text-[#2d545e] mb-1">Duration</h3>
                <p className="text-gray-600">{project.project_duration}</p>
              </div>
            )}
            
            {project.team_size && (
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Users className="w-8 h-8 text-[#e1b382] mx-auto mb-3" />
                <h3 className="font-bold text-[#2d545e] mb-1">Team Size</h3>
                <p className="text-gray-600">{project.team_size} members</p>
              </div>
            )}
            
            {project.budget_range && (
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <DollarSign className="w-8 h-8 text-[#e1b382] mx-auto mb-3" />
                <h3 className="font-bold text-[#2d545e] mb-1">Budget</h3>
                <p className="text-gray-600">{project.budget_range}</p>
              </div>
            )}
            
            {project.project_date && (
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Calendar className="w-8 h-8 text-[#e1b382] mx-auto mb-3" />
                <h3 className="font-bold text-[#2d545e] mb-1">Completed</h3>
                <p className="text-gray-600">
                  {new Date(project.project_date).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {project.gallery_images && project.gallery_images.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#2d545e] mb-8 text-center">
              Project Gallery
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[project.image_url, ...project.gallery_images].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className={`w-full h-32 object-cover rounded-lg transition-all ${
                      selectedImage === image 
                        ? 'ring-4 ring-[#e1b382] scale-105' 
                        : 'group-hover:scale-105'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {project.project_overview && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Project Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.project_overview}
                </p>
              </motion.div>
            )}

            {project.challenges && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Challenges</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.challenges}
                </p>
              </motion.div>
            )}

            {project.solutions && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Our Solutions</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.solutions}
                </p>
              </motion.div>
            )}

            {project.results && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Results</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.results}
                </p>
              </motion.div>
            )}

            {project.technologies_used && project.technologies_used.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Technologies & Tools Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies_used.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#e1b382]/10 text-[#e1b382] px-4 py-2 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {project.client_testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#2d545e] to-[#12343b] text-white p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-[#e1b382] mr-3" />
                  <h2 className="text-2xl font-bold">Client Testimonial</h2>
                </div>
                <blockquote className="text-lg leading-relaxed italic">
                  "{project.client_testimonial}"
                </blockquote>
                {project.client_name && (
                  <p className="text-[#e1b382] font-semibold mt-4">
                    - {project.client_name}
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#e1b382] to-[#c89666] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Let's create something extraordinary together
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-[#e1b382] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;