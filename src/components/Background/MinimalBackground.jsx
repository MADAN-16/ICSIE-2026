// src/components/MinimalBackground/MinimalBackground.jsx
import React from 'react';
import './MinimalBackground.css';

const MinimalBackground = () => {
  return (
    <div className="minimal-background">
      {/* Subtle Moving Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      
      {/* Floating Lines */}
      <div className="floating-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default MinimalBackground;
