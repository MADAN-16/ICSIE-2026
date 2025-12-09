// src/components/Contact
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Navigation } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden section-dark" style={{ position: 'relative' }}>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white font-bold">Contact Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-1 space-y-6">
             {/* Contact Information */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-panel-dark p-8 rounded-lg"
            >
              <h3 className="font-display text-white text-xl mb-6 border-b border-white/10 pb-2">Contact Information</h3>
              <div className="text-slate-300 font-light leading-relaxed space-y-4">
                <div>
                    <p className="text-white font-medium text-lg">Dr. R. Roopa Chandrika</p>
                    <p className="text-sm text-primary">HOD and Professor (Convenor)</p>
                    <p className="text-sm">Department of Cyber Security</p>
                </div>
                
                <div className="pt-2">
                    <p>Karpagam Academy of Higher Education</p>
                    <p className="text-sm opacity-80">(Deemed to be University)</p>
                    <p className="mt-1">Pollachi Main Road, Eachanari Post, Coimbatore, India</p>
                </div>

                <div className="pt-2 flex items-center">
                    <Mail className="w-4 h-4 text-primary mr-2" />
                    <a href="mailto:icsie@kahedu.edu.in" className="hover:text-white transition-colors">icsiekahe@gmail.com</a>
                </div>
              </div>
            </motion.div>

            {/* Organizing Committee */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-panel-dark p-8 rounded-lg"
            >
              <h3 className="font-display text-white text-xl mb-6 border-b border-white/10 pb-2">Organizing Committee</h3>
              <div className="text-slate-300 font-light leading-relaxed space-y-3">
                <div className="flex flex-col">
                    <span className="text-white">Dr. Laxmi Raja</span>
                    <a href="tel:+918098378814" className="hover:text-primary transition-colors text-sm">(+91) 8098378814</a>
                </div>
                <div className="flex flex-col">
                    <span className="text-white">Mrs. Angel Julie J</span>
                    <a href="tel:+919597136646" className="hover:text-primary transition-colors text-sm">(+91) 9597136646</a>
                </div>
                <div className="flex flex-col">
                    <span className="text-white">Mrs. Kanimozhi S</span>
                    <a href="tel:+918098378814" className="hover:text-primary transition-colors text-sm">(+91) 9080344043</a>
                </div>
                <div className="flex flex-col">
                    <span className="text-white">Mrs. Saranya R</span>
                    <a href="tel:+919597136646" className="hover:text-primary transition-colors text-sm">(+91) 8248917184</a>
                </div>
                <div className="flex flex-col">
                    <span className="text-white">Mr. Guruprasath S</span>
                    <a href="tel:+919597136646" className="hover:text-primary transition-colors text-sm">(+91) 8754128158</a>
                </div>
                <div className="flex flex-col">
                    <span className="text-white">Mrs. Krishana Sree K </span>
                    <a href="tel:+919597136646" className="hover:text-primary transition-colors text-sm">(+91) 9042980980</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map and Distance Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <div className="glass-panel-dark p-2 h-[580px] rounded-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16558.424442066356!2d76.97934431035641!3d10.917817097390355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85af2d5b63f75%3A0x958123c48e7c849d!2sKarpagam%20Academy%20of%20Higher%20Education!5e0!3m2!1sen!2sin!4v1764842533112!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen="" 
                loading="lazy"
                title="KAHE Location"
              ></iframe>
            </div>

            {/* Distance Info */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-panel-dark p-8 rounded-lg"
            >
               <h3 className="font-display text-white text-xl mb-6 flex items-center">
                <Navigation className="w-5 h-5 text-primary mr-3" />
                Distance
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300 font-light">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                      <p className="text-primary font-medium mb-1">From Airport</p>
                      <p className="text-lg text-white">18.9 Kms</p>
                      <p className="text-sm opacity-70">(45 Min) Via NH 544</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                      <p className="text-primary font-medium mb-1">From Railway Station</p>
                      <p className="text-lg text-white">10.4 Kms</p>
                      <p className="text-sm opacity-70">(41 Min) Via NH 948</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                      <p className="text-primary font-medium mb-1">From Gandhipuram Bus stand</p>
                      <p className="text-lg text-white">13 Kms</p>
                      <p className="text-sm opacity-70">(50 Min) Via NH 948</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
