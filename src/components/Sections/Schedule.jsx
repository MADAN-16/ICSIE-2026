// src/components/Schedule
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Hourglass } from 'lucide-react';

const Schedule = () => {
  return (
    <section id="schedule" className="section-padding bg-luxury-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-secondary font-sans tracking-[0.2em] text-xs uppercase mb-4 block">Event Timeline</span>
          <h2 className="text-4xl md:text-5xl font-display text-[#1B3C53] font-bold">Conference <span className="text-gradient">Schedule</span></h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-16 text-center relative rounded-lg"
          >
            <div className="w-16 h-16 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <Hourglass className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="text-3xl font-display text-[#1B3C53] mb-6">Agenda Unveiling Soon</h3>
            <p className="text-[#456882] mb-12 max-w-lg mx-auto text-lg font-light leading-relaxed">
              The detailed itinerary for the day, including keynote sessions and paper presentations, will be published shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-[#456882]">
              <div className="flex items-center space-x-4">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-light tracking-wide">09:00 AM - 05:00 PM</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10 hidden sm:block"></div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-light tracking-wide">KAHE Auditorium</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
