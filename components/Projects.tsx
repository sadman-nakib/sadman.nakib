
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-6">Selected Works</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold">
              Turning vision into <span className="text-gray-600">pixel perfection.</span>
            </h3>
          </div>
          <motion.a 
            href="#work" 
            className="flex items-center gap-2 text-white font-bold group"
          >
            All Projects 
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowRight size={18} />
            </div>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : '_self'}
              rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer p-8 bg-surface border border-white/5 rounded-[40px] hover:border-accent/20 transition-all block"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-accent font-bold border border-accent/20 px-2 py-0.5 rounded-full bg-accent/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-3xl font-display font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 mt-2">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all text-white">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
