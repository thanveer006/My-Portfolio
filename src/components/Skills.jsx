import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Socket.IO", "Responsive Web Design"]
  },
  {
    title: "AI Tools",
    skills: ["Cursor", "ChatGPT", "Gemini", "Antigravity", "Google AI Studio", "Zapier", "n8n Automation Workflows", "Lovable", "Bolt"]
  },
  {
    title: "Graphic Design",
    skills: ["Typography", "Logo Design", "Poster Design", "Branding"]
  },
  {
    title: "Tools & Software",
    skills: ["VS Code", "Git & GitHub", "Postman", "MS Word", "MS Excel", "Adobe Photoshop", "Adobe Illustrator"]
  },
  {
    title: "Languages",
    skills: ["English", "Arabic", "Malayalam", "Tamil", "Hindi (Typing Proficiency)"]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative w-full py-32 bg-lelab-yellow text-lelab-charcoal">
      <div className="lelab-container w-full" ref={ref}>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left Column - Large Index & Title */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-8xl md:text-9xl font-bold text-transparent"
              style={{ WebkitTextStroke: '2px #111111' }}
            >
              02
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-6"
            >
              TECH<br />ARSENAL
            </motion.h2>
          </div>

          {/* Right Column - Skills Layout */}
          <div className="lg:w-2/3 flex flex-col gap-16 pt-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div 
                key={catIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + (catIndex * 0.1) }}
                className="flex flex-col md:flex-row md:items-start gap-6 border-t-2 border-lelab-charcoal/10 pt-8"
              >
                <h3 className="w-48 text-xl font-bold uppercase tracking-widest shrink-0">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-6 py-3 rounded-full border-2 border-lelab-charcoal text-lelab-charcoal font-semibold hover:bg-lelab-charcoal hover:text-lelab-yellow transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
