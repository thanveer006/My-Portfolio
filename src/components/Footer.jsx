import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-lelab-yellow py-10 px-6 sm:px-16 overflow-hidden">
      
      {/* Massive Brand Text - Optional Visual Flair */}
      <div className="w-full flex justify-center py-20 pointer-events-none select-none">
        <h2 className="font-display text-[15vw] font-black text-lelab-charcoal uppercase tracking-tighter text-center leading-[1.05]">
          THANVEER<br/>AHAMMED N
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t-[3px] border-lelab-charcoal pt-10">
        
        {/* Social Links */}
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/thanveer006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lelab-charcoal hover:scale-125 transition-transform duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/thanveer-ahammed-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lelab-charcoal hover:scale-125 transition-transform duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:thanveerahd06@gmail.com"
            className="text-lelab-charcoal hover:scale-125 transition-transform duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-bold uppercase tracking-widest text-sm text-lelab-charcoal">
          <p>&copy; {currentYear} ALL RIGHTS RESERVED.</p>
          <p className="hidden md:block">|</p>
          <p>BUILT WITH REACT</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
