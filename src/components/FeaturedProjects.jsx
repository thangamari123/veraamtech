import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { MapPin, Maximize, ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Featured Work</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-black text-white">Our Signature Installations</h3>
          <p className="text-gray-400 mt-4 text-lg">
            A glimpse into some of our most prestigious and technically challenging display deployments across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700/50 group flex flex-col md:flex-row h-auto md:h-[300px]"
            >
              {/* Image Container */}
              <div className="w-full md:w-2/5 h-64 md:h-full overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {project.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-white mb-2 font-heading group-hover:text-accent transition-colors">{project.title}</h4>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-accent" /> {project.location}
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
                    <span className="block text-xs text-gray-500 mb-1">Size</span>
                    <span className="font-bold text-white flex items-center"><Maximize className="w-3 h-3 mr-1"/> {project.ledSize}</span>
                  </div>
                  <div className="bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
                    <span className="block text-xs text-gray-500 mb-1">Pitch</span>
                    <span className="font-bold text-white">{project.pixelPitch}</span>
                  </div>
                </div>
                <Link to={`/projects/${project.slug}`} className="inline-flex items-center text-sm font-bold text-white hover:text-accent transition-colors mt-auto">
                  View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-dark transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
