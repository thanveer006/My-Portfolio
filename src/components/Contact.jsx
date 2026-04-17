import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const formRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="relative w-full py-32 bg-lelab-charcoal text-lelab-light overflow-hidden">
      <div className="lelab-container w-full" ref={ref}>
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-20">
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-7xl md:text-9xl font-bold text-transparent leading-[0.8]"
              style={{ WebkitTextStroke: '2px #FF6500' }}
            >
              07
            </motion.div>
             <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter mt-4"
            >
              GET IN<br /><span className="text-lelab-yellow">TOUCH</span>
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex flex-col"
          >
            <div className="flex flex-col gap-12 mt-4">
              <div className="flex flex-col gap-2 group">
                <h4 className="font-bold uppercase tracking-widest text-sm text-lelab-gray">Email</h4>
                <a href="mailto:thanveerahd06@gmail.com" className="font-display text-2xl md:text-3xl font-bold text-lelab-light group-hover:text-lelab-yellow transition-colors duration-300">
                  thanveerahd06@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-2 group">
                <h4 className="font-bold uppercase tracking-widest text-sm text-lelab-gray">Phone</h4>
                <p className="font-display text-2xl md:text-3xl font-bold text-lelab-light group-hover:text-lelab-yellow transition-colors duration-300">+91 7306540341</p>
              </div>

              <div className="flex flex-col gap-2 group">
                <h4 className="font-bold uppercase tracking-widest text-sm text-lelab-gray">Location</h4>
                <p className="font-display text-2xl md:text-3xl font-bold text-lelab-light group-hover:text-lelab-yellow transition-colors duration-300">Calicut, Kerala, India</p>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="https://github.com/thanveer006" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-lelab-light/20 flex items-center justify-center text-lelab-light hover:border-lelab-yellow hover:bg-lelab-yellow hover:text-lelab-charcoal transition-all duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/thanveer-ahammed-dev" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-lelab-light/20 flex items-center justify-center text-lelab-light hover:border-lelab-yellow hover:bg-lelab-yellow hover:text-lelab-charcoal transition-all duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12">
              
              <div className="flex flex-col group relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="YOUR NAME"
                  className="bg-transparent border-b-4 border-lelab-light/20 py-4 outline-none font-display text-2xl md:text-4xl font-bold uppercase text-lelab-light focus:border-lelab-yellow transition-colors duration-300 placeholder:text-lelab-gray/30"
                />
              </div>
              
              <div className="flex flex-col group relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="EMAIL ADDRESS"
                  className="bg-transparent border-b-4 border-lelab-light/20 py-4 outline-none font-display text-2xl md:text-4xl font-bold uppercase text-lelab-light focus:border-lelab-yellow transition-colors duration-300 placeholder:text-lelab-gray/30"
                />
              </div>

              <div className="flex flex-col group relative">
                <textarea
                  rows="3"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="YOUR MESSAGE"
                  className="bg-transparent border-b-4 border-lelab-light/20 py-4 outline-none font-display text-2xl md:text-4xl font-bold uppercase text-lelab-light focus:border-lelab-yellow transition-colors duration-300 resize-none placeholder:text-lelab-gray/30"
                />
              </div>

              <div className="flex flex-col gap-4 self-start mt-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-pill-dark !bg-lelab-yellow !text-lelab-charcoal hover:!bg-lelab-light px-12 py-5 text-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {status === 'success' && (
                  <p className="font-bold uppercase tracking-widest text-sm text-lelab-yellow">
                    Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p className="font-bold uppercase tracking-widest text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
