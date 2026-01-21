// SoulKindAnimations.js
import { useEffect } from 'react';

const useSoulKindAnimations = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Header background on scroll
    const handleScroll = () => {
      const header = document.querySelector('.soulkind-header');
      if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(15, 15, 26, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
      } else {
        header.style.backgroundColor = 'rgba(15, 15, 26, 0.95)';
        header.style.boxShadow = 'none';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Animate cards on scroll
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    // Observe cards for animation
    document.querySelectorAll('.soulkind-card').forEach(card => {
      card.classList.add('fade-in');
      observer.observe(card);
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
};

export default useSoulKindAnimations;