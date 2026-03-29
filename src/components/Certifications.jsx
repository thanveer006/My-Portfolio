import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certifications = [
  {
    title: "AI For All – AI Appreciate Stage",
    issuer: "Intel & CBSE",
    date: "04/06/2025",
  },
  {
    title: "AI For All – AI Aware Stage",
    issuer: "Intel & CBSE",
    date: "04/06/2025",
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="relative w-full py-32 bg-lelab-yellow text-lelab-charcoal">
      <div className="lelab-container w-full" ref={ref}>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-8xl md:text-9xl font-bold text-transparent"
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
              CERTIFI<br />CATIONS
            </motion.h2>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 flex flex-col justify-center pt-8 gap-0">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t-2 border-lelab-charcoal/10 py-10"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-lelab-charcoal/60">
                    {cert.issuer}
                  </p>
                </div>
                <span className="shrink-0 px-6 py-3 border-2 border-lelab-charcoal rounded-full text-sm font-bold uppercase tracking-widest">
                  {cert.date}
                </span>
              </motion.div>
            ))}
            <div className="border-t-2 border-lelab-charcoal/10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
