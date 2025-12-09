// src/components/FallingCrystals/FallingCrystals.jsx
import React, { useEffect, useState } from 'react';
import './FallingCrystals.css';

const FallingCrystals = () => {
  const [crystals, setCrystals] = useState([]);

  useEffect(() => {
    // Create 20 falling crystals with random properties
    const newCrystals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (%)
      animationDuration: 8 + Math.random() * 12, // 8-20 seconds
      animationDelay: Math.random() * 5, // 0-5 seconds delay
      size: 10 + Math.random() * 20, // 10-30px
      opacity: 0.3 + Math.random() * 0.4, // 0.3-0.7 opacity
    }));
    setCrystals(newCrystals);
  }, []);

  return (
    <div className="falling-crystals-container">
      {crystals.map((crystal) => (
        <div
          key={crystal.id}
          className="crystal"
          style={{
            left: `${crystal.left}%`,
            animationDuration: `${crystal.animationDuration}s`,
            animationDelay: `${crystal.animationDelay}s`,
            width: `${crystal.size}px`,
            height: `${crystal.size}px`,
            opacity: crystal.opacity,
          }}
        >
          <div className="crystal-inner"></div>
        </div>
      ))}
    </div>
  );
};

export default FallingCrystals;
