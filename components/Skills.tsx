
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layout, Figma, Zap, Move, Cloud, Brain } from 'lucide-react';
import { SKILLS } from '../constants';

const iconMap: { [key: string]: any } = {
  Layout, Figma, Zap, Move, Cloud, Brain
};

// Fix: Use React.FC to allow standard React props like 'key' when component is instantiated in a map loop
const TiltSkillCard: React.FC<{ skill: any; i: number; IconComponent: any }> = ({ skill, i, IconComponent }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group p-10 rounded-[32px] bg-surface border border-white/5 hover:border-accent/30 transition-all duration-500 relative overflow-hidden cursor-default"
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {/* Hover Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[50px] rounded-full group-hover:bg-accent/20 transition-colors" />
        
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
          <IconComponent size={28} />
        </div>
        
        <h4 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
          {skill.name}
        </h4>
        <p className="text-gray-500 leading-relaxed">
          {skill.desc}
        </p>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-6">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Stack & <span className="text-gray-500">Mastery.</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <TiltSkillCard 
              key={skill.name} 
              skill={skill} 
              i={i} 
              IconComponent={iconMap[skill.icon] || Brain} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
