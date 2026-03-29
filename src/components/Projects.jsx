import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce",
    category: "Full Stack",
    description: "A comprehensive MERN stack e-commerce solution featuring admin dashboards, secure payments, and a responsive shopping experience.",
    tech: ["React.js", "Node.js", "MongoDB", "Redux"],
    github: "https://github.com/thanveer006",
    live: "#"
  },
  {
    title: "Portfolio",
    category: "Design & UI",
    description: "A high-performance portfolio showcasing complex animations, strict design systems, and modern component structure.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    github: "https://github.com/thanveer006",
    live: "#"
  },
  {
    title: "Shopping Cart",
    category: "Full Stack",
    description: "Full-stack responsive e-commerce app with product pages, cart, checkout, authentication, and API integration.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/thanveer006",
    live: "#"
  },
  {
    title: "Social Media Web App",
    category: "Full Stack",
    description: "Built using MERN + Socket.IO with posts, comments, likes, real-time chat, notifications, and profiles.",
    tech: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
    github: "https://github.com/thanveer006",
    live: "#"
  },
  {
    title: "Music Streaming App",
    category: "Frontend Dev",
    description: "UI-focused music player with playlists, search, audio controls, and smooth user experience.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/thanveer006",
    live: "#"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="relative w-full py-32 bg-lelab-charcoal text-lelab-light overflow-hidden">
      <div className="lelab-container w-full" ref={ref}>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b-2 border-lelab-light/10 pb-8">
          <div className="flex items-end gap-6">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-7xl md:text-9xl font-bold text-transparent leading-[0.8]"
              style={{ WebkitTextStroke: '2px #FFFFFF' }}
            >
              03
            </motion.div>
             <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter"
            >
              SELECTED<br /><span className="text-lelab-yellow">WORKS</span>
            </motion.h2>
          </div>
          
          <motion.a 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="https://github.com/thanveer006" 
            target="_blank" 
            rel="noreferrer" 
            className="hidden md:flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-lelab-yellow transition-colors duration-300 btn-pill-light !bg-transparent !text-lelab-light hover:!border-lelab-yellow"
          >
            All Projects <FaGithub size={18} />
          </motion.a>
        </div>

        {/* Project Mega-List */}
        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col lg:flex-row md:items-center justify-between py-12 md:py-16 border-b border-lelab-light/10 hover:border-lelab-yellow transition-colors duration-500 cursor-pointer"
            >
              {/* Background Color Fill on Hover */}
              <div className="absolute inset-0 bg-lelab-yellow scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"></div>

              {/* Content (needs higher z-index to sit above hover bg) */}
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-8 lg:gap-16 pointer-events-none group-hover:text-lelab-charcoal transition-colors duration-500">
                
                {/* Title & Category */}
                <div className="w-full lg:w-5/12">
                  <span className="text-sm font-bold uppercase tracking-widest text-lelab-yellow group-hover:text-lelab-charcoal mb-4 block transition-colors duration-500">
                    {project.category}
                  </span>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>

                {/* Description & Tech */}
                <div className="w-full lg:w-5/12">
                  <p className="text-lg md:text-xl font-medium leading-relaxed mb-6 group-hover:text-lelab-charcoal/80 transition-colors duration-500">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 border border-lelab-light/20 rounded-full text-xs font-bold uppercase tracking-wider group-hover:border-lelab-charcoal/20 group-hover:text-lelab-charcoal transition-colors duration-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links / Arrow */}
                <div className="w-full lg:w-2/12 flex justify-start lg:justify-end pointer-events-auto">
                    <div className="flex items-center gap-4">
                      {project.live && project.live !== '#' && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-lelab-light/20 flex items-center justify-center group-hover:border-lelab-charcoal group-hover:bg-lelab-charcoal group-hover:text-lelab-yellow transition-all duration-300 hover:scale-110">
                          <FaExternalLinkAlt size={16} />
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-lelab-light/20 flex items-center justify-center group-hover:border-lelab-charcoal group-hover:text-lelab-charcoal transition-all duration-300 hover:scale-110">
                        <FaGithub size={20} />
                      </a>
                    </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
