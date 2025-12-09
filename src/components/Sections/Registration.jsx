// src/components/Registration
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CreditCard } from 'lucide-react';

const Registration = () => {
  const dates = [
    { label: "Full Paper Submission", date: "15/02/2026" },
    { label: "Paper Acceptance", date: "22/02/2026" },
    { label: "Last Date for Payment", date: "25/02/2026" },
    { label: "Conference Date", date: "06/02/2026" }
  ];

  const fees = [
    { category: "Conference Proceedings", fee: "200", isbn: "978-93-49019-74-4" },
  ];

  return (
    <section id="registration" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display text-[#1B3C53] font-bold">Registration</h2>
        </motion.div>

        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          
          {/* Registration Fees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="glass-panel p-8 rounded-lg h-full">
              <h3 className="text-2xl font-display text-[#1B3C53] mb-10 flex items-center">
                <CreditCard className="w-5 h-5 text-primary mr-4" />
                Registration Fees
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#1B3C53]/20">
                      <th className="py-4 px-4 font-medium text-[#1B3C53]">Category</th>
                      <th className="py-4 px-4 font-medium text-[#1B3C53]">Fees</th>
                      <th className="py-4 px-4 font-medium text-[#1B3C53]">ISBN/ Publisher</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((item, index) => (
                      <tr key={index} className="border-b border-[#1B3C53]/10">
                        <td className="py-4 px-4 text-[#456882] font-light">{item.category}</td>
                        <td className="py-4 px-4 text-[#1B3C53] font-medium">₹ {item.fee}</td>
                        <td className="py-4 px-4 text-[#456882] font-light">{item.isbn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-12 flex justify-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfeSOxwUxv3tquHqYGrwYF6EWF-SvkX1mIrjaaEt0CphRnSVw/viewform?usp=publish-editor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-professional-filled block w-full md:w-auto md:inline-block px-12 text-center hover:bg-secondary hover:border-secondary transition-colors duration-300"
                >
                  Register Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="glass-panel p-8 rounded-lg h-full">
              <h3 className="text-2xl font-display text-[#1B3C53] mb-10 flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-4" />
                Important Dates
              </h3>
              <div className="space-y-6">
                {dates.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-6 border-b border-[#1B3C53]/10 hover:bg-[#1B3C53]/5 transition-colors duration-500">
                    <span className="font-light text-[#456882]">{item.label}</span>
                    <span className="font-medium text-primary">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Registration;
