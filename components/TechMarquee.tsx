import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  "Artificial Intelligence (AI)",
  "Python Programming",
  "AI Application Development (LLMs & Agents)",
  "Software Engineering & System Design",
  "Web & API Development"
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="relative border-y border-white/5 bg-dark overflow-hidden py-10 z-20">
       {/* Background Noise/Texture */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

       {/* Gradient Overlay for Depth (Fade edges) */}
       <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
       <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

       <div className="flex relative z-0 select-none">
         <motion.div
           className="flex flex-nowrap whitespace-nowrap"
           animate={{ x: "-50%" }}
           transition={{
             duration: 40,
             repeat: Infinity,
             ease: "linear"
           }}
         >
           {/* Duplicate list 4 times to ensure seamless infinite scroll on wide screens */}
           {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
             <div key={index} className="flex items-center gap-12 md:gap-24 px-6 md:px-12 group">
                <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover:text-white group-hover:[-webkit-text-stroke:0px] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-default">
                  {skill}
                </span>
                <div className="relative">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>
             </div>
           ))}
         </motion.div>
       </div>
    </div>
  );
};