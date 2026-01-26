import React, { useState, useEffect } from 'react';
import './NewsletterBanner.css';

const NewsletterBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Check if user has already closed the banner or subscribed
    const hasClosed = localStorage.getItem('newsletterBannerClosed');
    const hasSubscribed = localStorage.getItem('newsletterSubscribed');

    if (!hasClosed && !hasSubscribed) {
      // Show banner after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && email.includes('@')) {
      // Here you would typically send the email to your backend
      console.log('Subscribing email:', email);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        localStorage.setItem('newsletterSubscribed', 'true');
        
        // Hide after success message
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }, 1000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    localStorage.setItem('newsletterBannerClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="newsletter-banner">
      <button className="newsletter-close" onClick={handleClose} aria-label="Close newsletter banner">
        <i className="fas fa-times"></i>
      </button>
      
      <div className="newsletter-content">
        {isSubscribed ? (
          <div className="newsletter-success">
            <i className="fas fa-check-circle"></i>
            <h3>Welcome to Soul Kind!</h3>
            <p>Thank you for joining our creative community. Check your email for a special welcome gift!</p>
          </div>
        ) : (
          <>
            <div className="newsletter-header">
              <i className="fas fa-envelope-open-text"></i>
              <h3>Join Our Creative Circle</h3>
              <p>Get exclusive stories, artist insights, and early access to new releases.</p>
            </div>
            
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-submit">
                  Subscribe <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              
              <div className="form-consent">
                <label className="consent-checkbox">
                  <input type="checkbox" required />
                  <span>I agree to receive emails about creative stories and updates. I can unsubscribe anytime.</span>
                </label>
              </div>
            </form>
            
            <div className="newsletter-benefits">
              <div className="benefit">
                <i className="fas fa-gift"></i>
                <span>Free Welcome Gift</span>
              </div>
              <div className="benefit">
                <i className="fas fa-star"></i>
                <span>Exclusive Content</span>
              </div>
              <div className="benefit">
                <i className="fas fa-users"></i>
                <span>Community Access</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterBanner;