
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const CODE_SNIPPETS = [
  'const root = ReactDOM.createRoot(rootElement);',
  '<motion.div initial={{ opacity: 0 }} />',
  'export const theme = { accent: "#f97316" };',
  'function transform(code) { return ui; }',
  'class Component extends React.Component {',
  '  render() { return <div className="grid" />; }',
  '}',
  'import { motion } from "framer-motion";',
  'const animate = async () => { ... };',
  '<section className="hero-visual" />',
  'const layout = createSystem({ spacing: 4 });',
  'const primary = colors.accent;',
  'await deploy(site);'
];

const AbstractVisual: React.FC = () => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);

  // Scroll tracking for flip transition
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Depth and Perspective Transformations
  const perspective = useTransform(smoothScroll, [0, 0.4], [1200, 2500]);
  
  // Code Card Transformations
  const codeRotateY = useTransform(smoothScroll, [0, 0.4], [-15, -110]);
  const codeRotateX = useTransform(smoothScroll, [0, 0.4], [10, 45]);
  const codeScale = useTransform(smoothScroll, [0, 0.4], [1, 0.6]);
  const codeOpacity = useTransform(smoothScroll, [0, 0.4], [0.4, 0.02]);
  const codeZ = useTransform(smoothScroll, [0, 0.4], [0, -800]);
  const codeX = useTransform(smoothScroll, [0, 0.4], [-20, -150]);

  // UI Card Transformations
  const uiRotateY = useTransform(smoothScroll, [0, 0.4], [10, 110]);
  const uiRotateX = useTransform(smoothScroll, [0, 0.4], [-5, -45]);
  const uiScale = useTransform(smoothScroll, [0, 0.4], [1, 0.5]);
  const uiOpacity = useTransform(smoothScroll, [0, 0.4], [1, 0.01]);
  const uiZ = useTransform(smoothScroll, [0, 0.4], [0, -600]);
  const uiX = useTransform(smoothScroll, [0, 0.4], [20, 150]);

  // Rotate code snippets
  useEffect(() => {
    const timer = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % CODE_SNIPPETS.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Generate random floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2
    }));
  }, []);

  return (
    <div 
      className="relative w-full aspect-square max-w-[500px] flex items-center justify-center cursor-default select-none group"
      onPointerEnter={() => setIsInteracting(true)}
      onPointerLeave={() => setIsInteracting(false)}
    >
      {/* Background Accent Glow */}
      <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />
      
      {/* Transformation Container - Perspective */}
      <motion.div 
        style={{ perspective }}
        className="relative w-full h-full flex items-center justify-center"
      >
        
        {/* The "Code Terminal" View (Back Layer) */}
        <motion.div 
          style={{ 
            rotateY: codeRotateY, 
            rotateX: codeRotateX,
            scale: codeScale,
            opacity: codeOpacity,
            z: codeZ,
            x: codeX,
            transformStyle: "preserve-3d"
          }}
          className="absolute left-0 w-[60%] h-[70%] bg-background border border-white/10 rounded-xl shadow-2xl overflow-hidden p-6 font-mono text-[10px] md:text-xs z-0"
        >
          <div className="flex gap-1.5 mb-4 border-b border-white/5 pb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          
          <div className="space-y-2 opacity-30">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-gray-600">0{i+1}</span>
                <div className="h-2 bg-white/5 rounded w-full" />
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2 items-center">
            <span className="text-gray-600">07</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={codeIndex}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                className="text-accent font-bold whitespace-nowrap"
              >
                {CODE_SNIPPETS[codeIndex]}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-1.5 h-4 bg-accent ml-1 align-middle"
                />
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* The "UI Component" View (Front Layer) */}
        <motion.div 
          style={{ 
            rotateY: uiRotateY, 
            rotateX: uiRotateX,
            scale: uiScale,
            opacity: uiOpacity,
            z: uiZ,
            x: uiX,
            transformStyle: "preserve-3d"
          }}
          className="absolute right-0 w-[65%] h-[80%] custom-blur bg-white/5 border border-white/20 rounded-2xl shadow-3xl z-10 p-6 flex flex-col gap-4 overflow-hidden"
        >
          {/* Header Mockup */}
          <div className="flex justify-between items-center mb-2">
            <div className="w-12 h-3 bg-white/10 rounded-full" />
            <div className="flex gap-2">
              <div className="w-8 h-2 bg-white/5 rounded-full" />
              <div className="w-8 h-2 bg-white/5 rounded-full" />
            </div>
          </div>

          {/* Hero Section Mockup */}
          <div className="flex flex-col gap-2">
            <div className="h-4 bg-accent/40 rounded-full w-[80%]" />
            <div className="h-4 bg-white/10 rounded-full w-[40%]" />
          </div>

          {/* Grid Cards Mockup */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="aspect-square bg-white/5 border border-white/10 rounded-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/10" />
              </div>
            ))}
          </div>

          {/* Abstract Layout Lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/2 w-full h-px bg-white/20" />
            <div className="absolute left-1/2 h-full w-px bg-white/20" />
          </div>
        </motion.div>

        {/* Floating Connection Particles */}
        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden rounded-full">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: 0 }}
              animate={{ 
                x: [`${p.x}%`, `${p.x + (isInteracting ? 30 : 15)}%`],
                y: [`${p.y}%`, `${p.y - (isInteracting ? 40 : 20)}%`],
                opacity: [0, 0.8, 0],
                scale: [0.5, isInteracting ? 1.5 : 1, 0.5]
              }}
              transition={{ 
                duration: isInteracting ? p.duration * 0.5 : p.duration, 
                repeat: Infinity, 
                delay: p.delay,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-accent rounded-full shadow-[0_0_8px_#f97316]"
            />
          ))}
        </div>
      </motion.div>

      {/* Static Visual Decoration */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        TRANSFORM_INITIATED.v4
      </div>
    </div>
  );
};

export default AbstractVisual;
