// src/components/CallForPapers
import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const CallForPapers = () => {
  const topics = [
    "Foundations of Defensive Security Engineering",
    "Cybersecurity Fundamentals: Threats, Attacks, and Defenses",
    "Threat Modeling and Risk Mitigation",
    "Zero Trust Architecture",
    "Security by Design: Engineering Resilient Systems",
    "Secure Software Development",
    "Network Security and Threat Defense",
    "Cloud Security Engineering",
    "Encryption and Data Protection",
    "Identity and Access Management",
    "Incident Response and Forensics",
    "Penetration Testing and Ethical Hacking",
    "Security Automation and AI in Cyber Defense",
    "Security Monitoring and Logging",
    "Cybersecurity in Emerging Technologies (IoT, AI, Blockchain, 5G)",
    "Building a Security Operations Center",
    "Developing a Security Culture",
    "Future of Defensive Security Engineering",
    "Big Data & Multimedia Analytics",
    "Real-time AI/ML Applications",
    "Intelligent Frameworks in Power Electronics & Embedded Systems"
  ];

  return (
    <section id="call-for-papers" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display text-[#1B3C53] font-bold">Call for Paper</h2>
          <p className="mt-8 text-[#456882] max-w-3xl mx-auto text-lg font-medium uppercase">
            THE ICSIE ‘26 WELCOMES ORIGINAL WORKS IN AREAS SUCH AS
          </p>
          <p className="mt-4 text-[#456882] max-w-3xl mx-auto text-lg font-light">
            The research scope of Cyber Security can be viewed as follows but is not limited to:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel p-8 group cursor-pointer hover:bg-white/40 transition-colors duration-500 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-[#456882] group-hover:text-[#1B3C53] transition-colors duration-500">{topic}</span>
                <FileText className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors duration-500 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CallForPapers;
