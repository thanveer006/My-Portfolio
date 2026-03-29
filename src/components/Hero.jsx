import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen bg-lelab-yellow text-lelab-charcoal flex items-center justify-center overflow-hidden">
      
      {/* Massive Central Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[18vw] sm:text-[15vw] md:text-[12vw] font-extrabold leading-[0.85] tracking-tighter uppercase text-lelab-light drop-shadow-[0_10px_0px_rgba(17,17,17,0.1)] select-none"
        >
          FULL STACK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-bold uppercase tracking-[0.3em] text-lelab-charcoal text-sm sm:text-base md:text-lg select-none my-3"
        >
          THANVEER AHAMMED N
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[12vw] sm:text-[10vw] md:text-[8vw] font-extrabold leading-[0.85] tracking-tighter uppercase text-lelab-charcoal select-none"
        >
          DEVELOPER
        </motion.h2>

        {/* Small subtitle badge */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="mt-12 bg-lelab-charcoal text-lelab-yellow px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs"
        >
          BUILDING DIGITAL EXPERIENCES
        </motion.div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 flex items-center gap-2 text-lelab-charcoal/70 text-xs font-bold uppercase tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Currently Exploring: AI Agents · Next.js
        </motion.div>
      </div>

      {/* --- Framed UI Elements (Fixed to edges) --- */}

      {/* Bottom Left: Location + Availability */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-8 md:left-16 flex flex-col gap-3"
      >
        <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-lelab-charcoal">
          <span className="w-4 h-4 rounded-full border-2 border-lelab-charcoal flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-lelab-charcoal rounded-full"></span>
          </span>
          CALICUT, IN
        </span>
        <span className="flex items-center gap-2 bg-lelab-charcoal text-lelab-yellow px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Open to Work
        </span>
      </motion.div>

      {/* Bottom Right: Socials */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 right-8 md:right-16 flex items-center gap-6"
      >
        <a href="https://github.com/thanveer006" target="_blank" rel="noopener noreferrer" className="text-lelab-charcoal hover:scale-125 transition-transform duration-300">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/thanveer-ahammed-dev" target="_blank" rel="noopener noreferrer" className="text-lelab-charcoal hover:scale-125 transition-transform duration-300">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:thanveerahd06@gmail.com" className="text-lelab-charcoal hover:scale-125 transition-transform duration-300">
          <FaEnvelope size={20} />
        </a>
      </motion.div>

      {/* Bottom Center: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-lelab-charcoal rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-lelab-charcoal rounded-full"
          />
        </div>
        <span className="font-display font-bold uppercase tracking-widest text-[10px] text-lelab-charcoal">Scroll</span>
      </motion.div>

    </section>
  );
};

export default Hero;
