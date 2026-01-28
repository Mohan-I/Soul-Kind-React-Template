import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.nav-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`soulkind-header ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <span>Soul Kind</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-globe"></i>
                <span>Universe</span>
              </Link>
            </li>
            <li>
              <a 
                href="#stayhuman" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-users"></i>
                <span>Stayhuman</span>
              </a>
            </li>
            <li>
              <a 
                href="#mission" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-bullseye"></i>
                <span>Mission</span>
              </a>
            </li>
            <li>
              <Link 
                to="/careers" 
                className={`nav-link nav-btn ${isActive('/careers') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-briefcase"></i>
                <span>Explore Careers</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="hamburger-icon">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>

        {/* Mobile Overlay */}
        <div 
          className={`mobile-overlay ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(false)}
          role="button"
          aria-label="Close menu"
          tabIndex={0}
        ></div>
      </div>
    </header>
  );
};

export default Header;