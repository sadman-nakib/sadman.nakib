
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, ArrowRight, Facebook, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-12"
          >
            Ready to build <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">something elite?</span>
          </motion.h2>
          
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            I’m currently accepting new freelance projects and full-time opportunities. If you have a vision, I have the engineering expertise.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
            <motion.a 
              href="mailto:sadman.nakib@yahoo.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold text-xl transition-all shadow-xl hover:shadow-accent/20"
            >
              <Mail size={24} />
              sadman.nakib@yahoo.com
              <ArrowRight size={20} className="ml-2" />
            </motion.a>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
            <motion.a whileHover={{ y: -5, color: '#f97316' }} href="https://github.com/sadman-nakib" target="_blank" className="text-gray-500 flex items-center gap-2">
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </motion.a>
            <motion.a whileHover={{ y: -5, color: '#f97316' }} href="https://twitter.com/SadmanNakib" target="_blank" className="text-gray-500 flex items-center gap-2">
              <Twitter size={20} />
              <span className="hidden sm:inline">X (Twitter)</span>
            </motion.a>
            <motion.a whileHover={{ y: -5, color: '#f97316' }} href="https://www.linkedin.com/in/al-sami-sadman-nakib-27b17b202" target="_blank" className="text-gray-500 flex items-center gap-2">
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </motion.a>
            <motion.a whileHover={{ y: -5, color: '#f97316' }} href="https://www.facebook.com/a.s.sadman.nakib" target="_blank" className="text-gray-500 flex items-center gap-2">
              <Facebook size={20} />
              <span className="hidden sm:inline">Facebook</span>
            </motion.a>
            <motion.a whileHover={{ y: -5, color: '#f97316' }} href="https://t.me/sadman_nakib" target="_blank" className="text-gray-500 flex items-center gap-2">
              <Send size={20} />
              <span className="hidden sm:inline">Telegram</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
