
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap, Shield } from 'lucide-react';

// Fix: Explicitly define props and use React.FC to handle children correctly in JSX
const TiltCard: React.FC<{ children: React.ReactNode; className: string }> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-6">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
              Fusing technical precision with <span className="text-gray-500 italic">creative soul.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I specialize in building complex, high-performance interfaces for global startups and enterprises. My philosophy is rooted in the belief that code is a tool to empower human creativity, not replace it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 perspective-[1000px]"
          >
            <TiltCard className="p-8 bg-surface border border-white/5 rounded-3xl group hover:border-accent/20 transition-all cursor-default">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Fast</h4>
              <p className="text-sm text-gray-500">I deliver at warp speed without compromising quality.</p>
            </TiltCard>
            
            <TiltCard className="p-8 bg-surface border border-white/5 rounded-3xl group hover:border-accent/20 transition-all mt-12 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Secure</h4>
              <p className="text-sm text-gray-500">Your data and users are safe with enterprise practices.</p>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
