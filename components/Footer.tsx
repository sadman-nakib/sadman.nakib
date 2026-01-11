
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-display font-extrabold tracking-tighter">
          <span className="text-accent">S</span>ADMAN
        </div>
        
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sadman Portfolio. Built with React & Framer Motion.
        </div>
        
        <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-400 font-bold">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Imprint</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
