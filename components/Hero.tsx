import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Globe, ChevronDown } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-dark">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl ring-1 ring-white/10 relative overflow-hidden"
        >
          {/* Decorative shine effect on card */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

          <div className="text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
               <span className="py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
                 Available for Work
               </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight"
              >
                {PERSONAL_DETAILS.name}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              >
                Software Engineer | AI & Data Science Enthusiast
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed"
            >
              {PERSONAL_DETAILS.about}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <a 
                href="#projects"
                className="group relative px-8 py-3.5 rounded-xl bg-primary text-white font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] w-full sm:w-auto flex justify-center"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href={PERSONAL_DETAILS.resumeLink}
                className="group px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Download Resume <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 flex justify-center gap-6 border-t border-white/5 mt-8"
            >
              <a href="#" className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                <Globe className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-widest font-medium text-slate-600">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce text-primary/50" />
      </motion.div>
    </section>
  );
};