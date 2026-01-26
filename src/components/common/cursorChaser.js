import React, { useEffect, useState, useRef } from 'react';

const CursorChaser = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverElement, setHoverElement] = useState(null);
  const clickTimeout = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) {
      setIsVisible(false);
      return;
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() }];
        // Keep only last 8 positions
        return newTrail.slice(-8);
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    const handleMouseDown = () => {
      setIsClicking(true);
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
      clickTimeout.current = setTimeout(() => setIsClicking(false), 150);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Check for hover elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.getAttribute('role') === 'button' ||
          target.classList.contains('clickable') ||
          target.classList.contains('cta-button') ||
          target.classList.contains('nav-btn') ||
          target.classList.contains('soulkind-card')) {
        setIsHovering(true);
        setHoverElement(target.className || target.tagName);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setHoverElement(null);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Clean up trail dots
    const trailInterval = setInterval(() => {
      setTrail(prev => prev.filter(dot => Date.now() - dot.id < 300));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', checkMobile);
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
      clearInterval(trailInterval);
    };
  }, [isMobile]);

  // Update cursor styles based on state
  useEffect(() => {
    if (!dotRef.current || !ringRef.current || !highlightRef.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const highlight = highlightRef.current;

    // Reset styles
    dot.style.width = '8px';
    dot.style.height = '8px';
    dot.style.background = 'var(--accent)';
    dot.style.transform = `translate(-50%, -50%) scale(${isClicking ? '0.8' : '1'})`;
    
    ring.style.width = '40px';
    ring.style.height = '40px';
    ring.style.border = '2px solid var(--primary)';
    ring.style.transform = `translate(-50%, -50%) scale(${isClicking ? '0.9' : '1'})`;
    
    highlight.style.opacity = '0';
    highlight.style.transform = `translate(-50%, -50%) scale(0.5)`;

    // Apply hover effects
    if (isHovering) {
      if (hoverElement?.includes('cta-button') || hoverElement?.includes('nav-btn')) {
        dot.style.transform = `translate(-50%, -50%) scale(1.5)`;
        dot.style.background = 'var(--secondary)';
        
        ring.style.width = '60px';
        ring.style.height = '60px';
        ring.style.border = '3px solid var(--accent)';
        ring.style.background = 'rgba(0, 212, 170, 0.1)';
        ring.style.animation = 'none';
        
        if (hoverElement?.includes('nav-btn')) {
          ring.style.width = '70px';
          ring.style.height = '70px';
          ring.style.borderWidth = '4px';
          ring.style.animation = 'spin 3s linear infinite';
        } else if (hoverElement?.includes('cta-button')) {
          ring.style.background = 'rgba(255, 107, 139, 0.2)';
          ring.style.borderColor = 'var(--secondary)';
        }
        
        highlight.style.opacity = '1';
        highlight.style.transform = `translate(-50%, -50%) scale(1)`;
      } else if (hoverElement?.includes('soulkind-card')) {
        ring.style.borderColor = 'var(--accent)';
        ring.style.background = 'rgba(0, 212, 170, 0.1)';
      } else {
        // Default hover for links and buttons
        dot.style.transform = `translate(-50%, -50%) scale(1.5)`;
        dot.style.background = 'var(--secondary)';
        
        ring.style.width = '60px';
        ring.style.height = '60px';
        ring.style.borderWidth = '3px';
        ring.style.borderColor = 'var(--accent)';
        ring.style.background = 'rgba(0, 212, 170, 0.1)';
        
        highlight.style.opacity = '1';
        highlight.style.transform = `translate(-50%, -50%) scale(1)`;
      }
    }

    // Clicking effect
    if (isClicking) {
      dot.style.background = 'var(--secondary)';
      ring.style.borderColor = 'var(--secondary)';
    }
  }, [isHovering, isClicking, hoverElement]);

  // Don't render on mobile
  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div 
        ref={dotRef}
        className={`cursor-dot ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Cursor ring */}
      <div 
        ref={ringRef}
        className={`cursor-ring ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Trail effect */}
      <div className="cursor-trail">
        {trail.map((pos, index) => (
          <div
            key={pos.id}
            className="trail-dot"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              opacity: (index / trail.length) * 0.5,
              transform: `translate(-50%, -50%) scale(${0.3 + (index / trail.length) * 0.7})`
            }}
          />
        ))}
      </div>
      
      {/* Highlight effect */}
      <div 
        ref={highlightRef}
        className="cursor-highlight"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CursorChaser;