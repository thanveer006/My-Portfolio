import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative w-full min-h-screen py-32 bg-lelab-charcoal text-lelab-light flex items-center overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
        <h2 className="font-display text-[20vw] font-extrabold whitespace-nowrap text-lelab-light">
          INNOVATIVE DEVELOPER
        </h2>
      </div>

      <div className="lelab-container w-full relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left Column - Large Index & Title */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-8xl md:text-9xl font-bold text-transparent"
              style={{ WebkitTextStroke: '2px #F3B026' }}
            >
              01
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-6 text-lelab-yellow"
            >
              ABOUT<br />THE LAB
            </motion.h2>
          </div>

          {/* Right Column - Text & Stats */}
          <div className="lg:w-2/3 flex flex-col justify-center pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
               <p className="text-xl md:text-3xl leading-snug font-medium mb-12 max-w-3xl">
                I am a MERN Full Stack Developer based in Calicut, Kerala, with a strong interest in <span className="text-lelab-yellow font-bold">Generative AI and AI Automation</span>. My expertise lies in architecting and building modern web applications using <span className="text-lelab-yellow font-bold">React, Node.js, Express, and MongoDB</span>.
              </p>
              <p className="text-lg md:text-xl text-lelab-gray leading-relaxed max-w-2xl mb-16">
                I focus on writing clean, maintainable code and designing stark, functional user interfaces. Beyond development, I bring a Graphic Design background — typography, branding, and visual identity. Whether it's complex backend logic, visually stunning frontends, or automation workflows with n8n, I engineer experiences that matter.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-12 mb-16"
            >
              {[
                { value: '5+', label: 'Projects Built' },
                { value: 'MERN', label: 'Stack' },
                { value: '2', label: 'Certifications' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-5xl md:text-6xl font-black text-lelab-yellow leading-none">{stat.value}</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-lelab-gray mt-2">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a href="/resume.pdf" download="Thanveer_Ahammed_Resume.pdf" className="btn-pill-light">Download Resume</a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-pill-dark !bg-lelab-yellow !text-lelab-charcoal hover:!bg-lelab-light"
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
