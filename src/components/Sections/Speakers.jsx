// src/components/Speakers
import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Briefcase } from 'lucide-react';
import CyberSathya from '../../images/CyberSathya.jpg';

const Speakers = () => {
  const speakers = [
    {
      name: "S. Sathya Narayanan",
      qualifications: "M.C.A., LL.M (IPR & Tech)., PGD-CLCF",
      title: "Partner at M/s. VSM LEGAL, a law firm based out of Coimbatore. ",
      organization: "Practicing Advocate at Madras High Court & District Court of Coimbatore",
      expertise: "Cyber Crime – Things you should know before pressing the power button",
      image: CyberSathya
    }
  ];

  return (
    <section 
      id="speakers" 
      className="section-padding relative overflow-hidden bg-[#0B1120]"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white font-bold" >
            Keynote Speaker
          </h2>
        </motion.div>

        <div className="flex justify-center max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-blue-500/50 hover:to-cyan-500/50 transition-all duration-500 group w-full"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative bg-[#0f172a]/90 backdrop-blur-xl p-8 md:p-12 rounded-[23px] border border-white/5 h-full overflow-hidden">
                {/* Decorative background blob inside card */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>

                <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                  
                  {/* Image Section */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="w-48 h-48 relative rounded-full p-1 bg-gradient-to-br from-blue-400 to-cyan-300 shadow-2xl shadow-black/50">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="w-full h-full rounded-full object-cover border-4 border-[#0B1120]"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow text-center md:text-left">
                    <div className="mb-1">
                        <h3 className="font-display text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                        {speaker.name}
                        </h3>
                    </div>
                    <p className="text-sm md:text-base text-cyan-400 font-medium mb-6 tracking-wide">{speaker.qualifications}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start justify-center md:justify-start space-x-4 text-slate-300">
                        <div className="p-2 rounded-lg bg-white/5 text-cyan-400 mt-1">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-medium text-white">{speaker.title}</p>
                            <p className="text-base text-slate-400 mt-1">{speaker.organization}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 relative">
                        <div className="absolute top-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-20 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></div>
                      <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3">Keynote Speech</p>
                      <p className="text-white text-xl font-medium leading-relaxed italic">
                        "{speaker.expertise}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
