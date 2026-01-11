
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import AbstractVisual from './AbstractVisual';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Depth Layers */}
      <motion.div 
        style={{ y: y1, rotate: rotate1, opacity: opacity1 }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <motion.div 
        style={{ y: y2, opacity: opacity1 }}
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/3 blur-[200px] rounded-full pointer-events-none" 
      />

      {/* Abstract UI Outline Layer */}
      <motion.div 
        style={{ y: y1, opacity: 0.1 }}
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] border border-white/20 rounded-full flex items-center justify-center pointer-events-none"
      >
        <div className="w-[70%] h-[70%] border border-white/10 rounded-full" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-accent" />
            <span className="text-accent font-semibold tracking-widest text-sm uppercase">Available for new projects</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-none mb-8">
            Hello. I’m <span className="text-white">Sadman</span>.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Front-end Developer.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 font-light leading-relaxed">
            Architecting premium digital experiences through refined design systems and cutting-edge frontend engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="px-8 py-4 rounded-full bg-accent text-white font-bold flex items-center justify-center gap-2 hover:bg-accent-dark transition-all duration-300 shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
            >
              View My Work
              <ArrowUpRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ border: '1px solid #f97316', color: '#f97316' }}
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="resume.pdf"
              download="Sadman_Nakib_Resume.pdf"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              <Download size={18} />
              Resume
            </motion.a>
          </div>
          
          <div className="mt-20 flex gap-12 items-center">
             <div className="flex flex-col">
               <span className="text-2xl font-bold text-white">2+</span>
               <span className="text-xs uppercase tracking-widest text-accent font-bold">Years Exp</span>
             </div>
             <div className="w-px h-10 bg-white/10" />
             <div className="flex flex-col">
               <span className="text-2xl font-bold text-white">17</span>
               <span className="text-xs uppercase tracking-widest text-accent font-bold">Projects Done</span>
             </div>
             <div className="w-px h-10 bg-white/10" />
             <div className="flex flex-col">
               <span className="text-2xl font-bold text-white">27</span>
               <span className="text-xs uppercase tracking-widest text-accent font-bold">Designs</span>
             </div>
          </div>
        </motion.div>

        {/* Right: Abstract Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <AbstractVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
