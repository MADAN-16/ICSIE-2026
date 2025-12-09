// src/components/Header
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speaker', href: '#speakers' },
    { name: 'Call for Paper', href: '#call-for-papers' },
    { name: 'Submission Guidelines', href: '#submission' },
    { name: 'Registration', href: '#registration' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const scrollPosition = window.scrollY + 150; // Offset for header height
      let current = '#home';

      for (const link of navLinks) {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          // Check if section top is above the scroll position
          if (section.offsetTop <= scrollPosition) {
            current = link.href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-[#0B1120] shadow-lg py-4 border-b border-blue-500/20' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <img 
            src="/src/images/k.png" 
            alt="ICSIE Logo" 
            className="h-20 w-auto rounded-lg"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10" onMouseLeave={() => setHoveredIndex(null)}>
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href;
            const isHovered = hoveredIndex === index;
            // Determine if this link should show the underline
            // Show if it's hovered OR (it's active AND no other link is hovered)
            const showUnderline = isHovered || (isActive && hoveredIndex === null);
            
            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`text-sm font-sans font-medium transition-colors relative group tracking-wide px-2 py-1 ${
                  isActive ? 'text-cyan-400 font-bold' : 'text-slate-300 hover:text-orange-500'
                }`}
              >
                {link.name}
                {showUnderline && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-2 left-0 w-full h-[2px] ${isHovered ? 'bg-orange-500' : 'bg-cyan-400'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-white hover:text-orange-500' : 'text-white hover:text-orange-500'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/5 overflow-hidden mt-4"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-display text-lg transition-colors text-center ${
                    activeSection === link.href ? 'text-cyan-400 font-bold' : 'text-slate-600 hover:text-orange-500'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
