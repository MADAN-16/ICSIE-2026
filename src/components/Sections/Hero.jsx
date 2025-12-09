// src/components/Hero
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import MinimalGalaxy from '../Background/MinimalGalaxy';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-[110vh] flex items-center justify-center relative pt-20 overflow-hidden section-dark isolation-isolate"
    >
      {/* Galaxy Background */}
      <MinimalGalaxy />
      
      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Conference Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-8 mb-8 mt-12"
          >
            <img 
              src="/src/images/icon1.jpg" 
              alt="Conference Icon" 
              className="h-20 w-auto rounded-lg"
            />
            <img
              src="/src/images/k2 logo.png"
              alt="College Logo"
              className="h-20 w-20 rounded-lg shadow-lg"
            />
            <img 
              src="/src/images/icsie.jpg" 
              alt="ICSIE Logo" 
              className="h-20 w-26 rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Main Title - ICSIE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
             <h1 className="text-5xl md:text-7xl font-outfit font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 drop-shadow-2xl tracking-tighter">
              I C S I E '2 6
            </h1>
          </motion.div>

          {/* Prestige Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center justify-center mb-8"
          >
            <span className="text-blue-400 font-outfit text-xl tracking-widest uppercase">National Conference on</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-medium text-white mb-10 leading-tight drop-shadow-lg w-full mx-auto tracking-wide"
          >
            <span className="font-outfit italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl"></span>
            Innovations in Cyber Security and Information Engineering
            <span className="font-outfit italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl"></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Organized by <br />
            <span className="text-blue-400 font-medium block mt-2">Department of Cyber Security</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfeSOxwUxv3tquHqYGrwYF6EWF-SvkX1mIrjaaEt0CphRnSVw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-professional-filled group flex items-center"
            >
              Register Now

            </a>
          </motion.div>

          {/* Glass Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Date Card */}
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-panel-dark p-12 rounded-xl flex flex-col items-center text-center cursor-pointer group justify-center"
            >
              <div className="icon-badge mb-6 w-16 h-16 text-blue-400">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-display text-4xl md:text-4xl text-white mb-3 font-semibold">March 6, 2026</h3>
              <p className="text-slate-400 text-base uppercase tracking-widest group-hover:text-orange-500 transition-colors">Conference Date</p>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-panel-dark p-8 rounded-xl flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="icon-badge mb-6 w-16 h-16 text-secondary">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-white mb-2 font-semibold">Karpagam Academy of Higher Education</h3>
              <div className="text-slate-300 text-sm mb-4 space-y-1">
                <p>(Deemed to be University)</p>
                <p>(Established Under Section 3 of UGC Act, 1956)</p>
                <p>(Accredited by NAAC with A+ Grade in the second cycle)</p>
              </div>
              <p className="text-slate-400 text-base uppercase tracking-widest group-hover:text-orange-500 transition-colors">Venue</p>
            </motion.div>
          </motion.div>

          {/* ISBN Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 mb-24 max-w-5xl mx-auto"
          >
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-panel-dark p-8 rounded-xl flex flex-col items-center text-center cursor-pointer group"
            >
              <h3 className="font-display text-xl mb-2 uppercase tracking-widest font-bold" style={{ color: '#60a5fa' }}>ISBN</h3>
              <p className="font-display text-2xl md:text-3xl font-semibold transition-colors" style={{ color: '#f5f7f8ff' }}>978-81-995483-2-9</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
