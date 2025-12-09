// src/components/About
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto relative z-10">
        
        {/* Main Heading */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-display text-[#1B3C53] font-bold">About</h2>
        </motion.div>

        {/* About KAHE Section */}
        <div className="mb-40">
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-[1px] w-16 bg-primary"></div>
                  <span className="text-primary font-sans tracking-[0.2em] text-xs uppercase">About KAHE</span>
                </div>
                <div className="text-[#456882] text-lg leading-relaxed font-light text-justify space-y-6">
                  <p>
                    Karpagam Academy of Higher Education (KAHE) established under Section 3 of UGC Act, 1956 is approved by Ministry of Human Resource Development, Government of India. Dr. R. Vasanthakumar, the president of KAHE, a philanthropist, industrialist, entrepreneur and culture promoter. Contemporary infrastructure, modern teaching methodologies, career-oriented training, excellent placements and the finest faculty have always become the Karpagam’s hallmark. 
                  </p>
                  <p>
                    In addition to technical proficiency, KAHE has distinguished itself from its inception by fostering soft skills such as communication and teamwork, ensuring enlightening knowledge, expanding holistic education, and establishing a strong value system. Today, with the strength of 8000 students and over 750 teaching & non-teaching staff, Karpagam Academy of Higher Education is setting new benchmarks in the educational sphere.
                  </p>
                  <p>
                    Faculty members have a good number of research projects with the financial support of Rs. 11.2 Crore from various funding agencies like DBT/DST/CSIR/ICMR. Our Institute has filed  111 Patents and copyrights. Further, 77 patents were granted by the Indian Patent Office and one US patent. Our faculty have published more 3078 Research articles in Web of Science, Scopus, and Peer Reviewed Journals. The Institute has collaborated with foreign Universities, Industries, and Research bodies for mutual benefit. The Institute ensures that education epitomizes excellence in every sphere and that students are equipped to meet the challenges of the present and emerge as the leaders of tomorrow.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full"
              >
                <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4 rounded-lg"></div>
                <img 
                  src="/src/images/banner-KIT-new.jpg" 
                  alt="KAHE Campus" 
                  className="w-full h-auto object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* About ICSIE Section */}
        <div>
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-[1px] w-16 bg-secondary"></div>
                  <span className="text-secondary font-sans tracking-[0.2em] text-xs uppercase">About ICSIE</span>
                </div>
                <div className="text-[#456882] text-lg leading-relaxed font-light text-justify">
                  <p>
                    As cyber threats become more sophisticated, continuous innovation in cybersecurity is essential to safeguarding digital ecosystems. This conference explores cutting-edge advancements in cybersecurity, including artificial intelligence (AI)-driven threat detection, Zero Trust Architecture (ZTA), blockchain for secure transactions, and quantum cryptography for future-proof encryption. AI and machine learning have revolutionized cybersecurity by enabling real-time anomaly detection and automated threat response. The conference will discourse the latest technological innovations, industry best practices, and future trends in cybersecurity, offering insights into how organizations, individuals, and governments can stay ahead in the ever-evolving digital landscape.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
