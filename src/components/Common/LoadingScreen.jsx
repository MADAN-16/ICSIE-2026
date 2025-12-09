// src/components/LoadingScreen
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-dark-400 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="inline-flex items-center space-x-4 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          <div>
            <h1 className="text-4xl font-black text-gradient">ICSIE 2024</h1>
            <p className="text-gray-400 text-sm mt-1">Loading Innovation...</p>
          </div>
        </motion.div>

        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Sparkles className="w-4 h-4 inline mr-2" />
          Preparing an extraordinary experience...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
