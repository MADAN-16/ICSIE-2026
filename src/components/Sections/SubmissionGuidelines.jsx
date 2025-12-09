// src/components/SubmissionGuidelines
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SubmissionGuidelines = () => {
  const plagiarismScenarios = [
    "Ensure the Similarity Index (Plagiarism Report) is less than 30%.",
    "Maintain a minimum of 15 references in the paper.",
    "Do not include salutations like “Dr./Mr./Mrs./Prof./Research Scholar/Student” in the author details section.",
    "Mention affiliations and email IDs of all authors.",
    "Run a spellcheck and proofread thoroughly to eliminate typos and grammatical errors.",
    "Use high-quality figures/graphics.",
    "Tables and equations must be in text format, not as images.",
    "Include in-text descriptions and callouts for all figure numbers, table numbers, and equation numbers in order of appearance.",
    "Cite all references within the paper using in-text citations in ascending order.",
    "Avoid citing references in the Abstract and Conclusion sections.",
    "Remove personal pronouns like “Our/We/Us” from the paper."
  ];

  return (
    <section id="submission" className="section-padding relative section-dark">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white font-bold">Submission Guidelines</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* General Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel-dark p-8 md:p-10 rounded-lg text-slate-300 font-light text-lg leading-relaxed space-y-6 text-justify"
          >
            <p>
              Prospective contributors are invited to submit full papers in DOC or DOCX format, spanning 6-8 pages in double-column layout, including all figures, tables, and references. Submissions should be sent to Karpagam Academy of Higher Education at <a href="mailto:icsiekahe@gmail.com" className="text-primary hover:text-secondary transition-colors">icsiekahe@gmail.com</a>.
            </p>
            <p>
              By submitting a paper, authors agree that, if accepted, they will provide a camera-ready version of the updated paper for inclusion in the final conference proceedings and present it at the conference.
            </p>
            <p>
              At least one author of each accepted paper must register for the conference by the time the camera-ready article is submitted.
            </p>
            <p>
              Accepted papers will be scheduled for presentation in a regular technical session.
            </p>
          </motion.div>

          {/* Plagiarism Scenarios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel-dark p-8 md:p-10 rounded-lg"
          >
            <h3 className="text-2xl font-display text-white mb-8">
              Possible Plagiarism Scenarios
            </h3>
            <ul className="space-y-4">
              {plagiarismScenarios.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 text-slate-300 font-light">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionGuidelines;
