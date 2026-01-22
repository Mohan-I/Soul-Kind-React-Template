import React, { useEffect, useState } from 'react';

const CursorChaser = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only enable cursor chaser on non-mobile devices
    if (isMobile) {
      setIsVisible(false);
      return;
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        // Keep only last 5 positions
        return newTrail.slice(-5);
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0
        }}
      />
      
      {/* Cursor ring */}
      <div 
        className="cursor-ring"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0
        }}
      />
      
      {/* Trail effect */}
      <div className="cursor-trail">
        {trail.map((pos, index) => (
          <div
            key={index}
            className="trail-dot"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              opacity: index / trail.length,
              transform: `scale(${0.5 + (index / trail.length) * 0.5})`
            }}
          />
        ))}
      </div>
      
      {/* Interactive elements highlight */}
      <div className="cursor-highlight" />
    </>
  );
};

export default CursorChaser;