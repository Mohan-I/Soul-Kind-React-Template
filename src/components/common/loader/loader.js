import React, { useEffect, useState } from 'react';
import './loader.css';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Auto-hide after completion
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-overlay">
      {/* Animated Background */}
      <div className="loader-bg">
        <div className="bg-particle particle-1"></div>
        <div className="bg-particle particle-2"></div>
        <div className="bg-particle particle-3"></div>
        <div className="bg-particle particle-4"></div>
        <div className="bg-particle particle-5"></div>
      </div>

      {/* Main Loader Container */}
      <div className="loader-container">
        {/* Brand Logo/Title */}
        <div className="loader-brand">
          <div className="brand-logo">
            <i className="fas fa-palette"></i>
          </div>
          <h2 className="brand-title">Soul Kind</h2>
          <p className="brand-subtitle">Loading Creative Universe...</p>
        </div>

        {/* Modern Grid Loader */}
        <div className="grid-loader">
          {[...Array(9)].map((_, index) => (
            <div 
              key={index}
              className="grid-cell"
              style={{
                animationDelay: `${index * 0.1}s`,
                '--cell-color': `hsl(${200 + index * 15}, 100%, 60%)`
              }}
            />
          ))}
        </div>

        {/* Loading Progress */}
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{progress}%</div>
        </div>

        {/* Loading Messages */}
        <div className="loading-messages">
          <div className="message active">
            <i className="fas fa-paint-brush"></i>
            <span>Initializing creative canvas...</span>
          </div>
          <div className="message">
            <i className="fas fa-heart"></i>
            <span>Loading kindness algorithms...</span>
          </div>
          <div className="message">
            <i className="fas fa-users"></i>
            <span>Connecting to community...</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="loader-decoration">
          <div className="deco-ring ring-1"></div>
          <div className="deco-ring ring-2"></div>
          <div className="deco-dot dot-1"></div>
          <div className="deco-dot dot-2"></div>
          <div className="deco-dot dot-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;