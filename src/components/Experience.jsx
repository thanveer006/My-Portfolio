import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experience = [
  {
    role: "Freelance AI Mentor & Web Developer",
    year: "2025  – Present",
    company: "Self-Employed",
    details: "Mentoring students and professionals in Applied AI, AI Automation, and modern web development. Delivering hands-on sessions in AI tools, prompt engineering, and workflow automation while building web projects for clients.",
    skills: ["Applied AI", "AI Automation", "Prompt Engineering", "React", "Node.js"]
  },
  {
    role: "Freelance Graphic Designer",
    year: "2023 – 2025",
    company: "Self-Employed",
    details: "Created visual identities, social media content, marketing materials, and UI mockups for various clients. Worked with brands to deliver creative design solutions across digital and print media.",
    skills: ["Brand Identity", "UI Design", "Social Media", "Print Design", "Adobe Suite"]
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative w-full py-32 bg-lelab-charcoal text-lelab-light">
      <div className="lelab-container w-full" ref={ref}>
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-20">
          
          <div className="flex items-end gap-6">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-7xl md:text-9xl font-bold text-transparent leading-[0.8]"
              style={{ WebkitTextStroke: '2px #F3B026' }}
            >
              04
            </motion.div>
             <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-lelab-light"
            >
              EXPERIENCE
            </motion.h2>
          </div>
        </div>

        {/* Experience Timeline/Blocks */}
        <div className="flex flex-col w-full">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col lg:flex-row md:items-start gap-8 lg:gap-16 border-t-2 border-lelab-light/10 py-16"
            >
               {/* Year/Company Column */}
                <div className="w-full lg:w-1/3 flex flex-col md:border-r-2 border-lelab-light/20 md:pr-12 shrink-0">
                  <span className="text-4xl md:text-5xl font-display font-bold text-lelab-yellow mb-2">{exp.year}</span>
                  <span className="text-lg font-bold uppercase tracking-widest text-lelab-gray">{exp.company}</span>
                </div>

                {/* Details Column */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-bold font-display uppercase tracking-tight mb-6 text-lelab-light">
                    {exp.role}
                  </h3>
                  <p className="text-lelab-gray text-xl md:text-2xl leading-relaxed font-medium mb-8 max-w-3xl">
                    {exp.details}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="text-sm font-bold uppercase tracking-widest text-lelab-light border-2 border-lelab-light/30 rounded-full px-6 py-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
