import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: 'Home', id: 'hero' },
  { title: 'About', id: 'about' },
  { title: 'Skills', id: 'skills' },
  { title: 'Projects', id: 'projects' },
  { title: 'Experience', id: 'experience' },
  { title: 'Certifications', id: 'certifications' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const allSectionIds = [...navLinks.map(l => l.id), 'contact'];
    const handleScroll = () => {
      const sections = allSectionIds.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(allSectionIds[i]);
          break;
        }
      }

      if (window.scrollY < 100) setActive('hero');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      setActive(id);
    }
  };

  const isDarkSection = ['about', 'projects', 'contact'].includes(active);

  return (
    <>
      <header className="fixed top-0 w-full z-50 py-8 px-8 md:px-16 pointer-events-none flex items-start justify-between">

        {/* Left: Logo Monogram */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto hover:scale-110 transition-all duration-500 font-display font-black text-xl tracking-tight border-2 ${isDarkSection ? 'border-lelab-light text-lelab-light hover:bg-lelab-light hover:text-lelab-charcoal' : 'border-lelab-charcoal text-lelab-charcoal hover:bg-lelab-charcoal hover:text-lelab-yellow'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          TA
        </div>

        {/* Center: Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-12 pointer-events-auto backdrop-blur-sm px-10 py-4 rounded-full border transition-all duration-500 ${isDarkSection ? 'bg-lelab-yellow/90 border-lelab-charcoal/5' : 'bg-lelab-charcoal/80 border-lelab-light/10'}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-base font-bold transition-all duration-300 ${
                isDarkSection
                  ? active === link.id ? 'text-lelab-charcoal scale-110' : 'text-lelab-charcoal/60 hover:text-lelab-charcoal'
                  : active === link.id ? 'text-lelab-yellow scale-110' : 'text-lelab-light/70 hover:text-lelab-light'
              }`}
            >
              {link.title}
            </button>
          ))}
        </nav>

        {/* Right: Circular Contact Button */}
        <button 
          onClick={() => scrollToSection('contact')} 
          className="hidden lg:flex w-16 h-16 rounded-full bg-lelab-charcoal text-lelab-yellow items-center justify-center text-2xl hover:bg-lelab-light hover:text-lelab-charcoal hover:scale-110 transition-all duration-500 pointer-events-auto shadow-xl"
          aria-label="Contact"
        >
          👋
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-full bg-lelab-charcoal z-50 focus:outline-none pointer-events-auto shadow-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-5 h-0.5 bg-lelab-yellow transition-all duration-300 ease-out ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
          <span className={`block w-5 h-0.5 bg-lelab-yellow transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-5 h-0.5 bg-lelab-yellow transition-all duration-300 ease-out ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at right top)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-lelab-charcoal z-40 lg:hidden flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-5xl font-display font-bold uppercase tracking-tight ${
                    active === link.id ? 'text-lelab-yellow' : 'text-lelab-light hover:text-lelab-yellow'
                  }`}
                >
                  {link.title}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-12 text-5xl font-display font-bold uppercase tracking-tight text-lelab-light hover:text-lelab-yellow"
              >
                Let's Talk 👋
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
