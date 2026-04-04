import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    degree: "MERN Stack Development",
    institution: "Tech School by HACA",
    year: "Apr 2025 – Mar 2026",
    description: "Full-time immersive program covering MongoDB, Express.js, React, and Node.js. Built real-world applications including an E-commerce platform, Social Media App, and Music Streaming App.",
    highlights: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "REST APIs"]
  }
];

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="relative w-full py-32 bg-lelab-yellow text-lelab-charcoal">
      <div className="lelab-container w-full" ref={ref}>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-8xl md:text-9xl font-bold text-transparent leading-[0.8]"
              style={{ WebkitTextStroke: '2px #111111' }}
            >
              05
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-6"
            >
              EDU<br />CATION
            </motion.h2>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 flex flex-col justify-center pt-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                className="flex flex-col gap-8 border-t-2 border-lelab-charcoal/10 py-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-bold uppercase tracking-widest text-lelab-charcoal/60">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="shrink-0 px-6 py-3 border-2 border-lelab-charcoal rounded-full text-sm font-bold uppercase tracking-widest self-start">
                    {edu.year}
                  </span>
                </div>
                <p className="text-lelab-charcoal/80 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
                  {edu.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {edu.highlights.map((item, i) => (
                    <span key={i} className="text-sm font-bold uppercase tracking-widest text-lelab-charcoal border-2 border-lelab-charcoal rounded-full px-5 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
            <div className="border-t-2 border-lelab-charcoal/10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
