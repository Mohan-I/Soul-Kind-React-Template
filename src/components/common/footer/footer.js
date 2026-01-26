import React from 'react';
import email from '../../../assets/img/icons/email.svg'
import linkedin from '../../../assets/img/icons/linkedin.svg'
import facebook from'../../../assets/img/icons/facebook.svg'
import discord from '../../../assets/img/icons/discord.svg'
import github from '../../../assets/img/icons/github.svg'
import plane from '../../../assets/img/icons/plane.svg'

const Footer = () => {
  return (
    <footer className="soulkind-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="row">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="footer-brand">
                <div className="footer-logo">
                  Soul Kind
                </div>
                <p className="footer-tagline">
                  Art and kindness are our tools of trade. We're building a creative universe powered by community and web3 technology.
                </p>
                <div className="footer-social">
                  <a href="#" className="social-icon">
                  <img src={email} alt='icon' />
                  </a>
                  <a href="#" className="social-icon">
                  <img src={facebook} alt='icon' />
                  </a>
                  <a href="#" className="social-icon">
                   <img src={github} alt='icon' /> 
                  </a>
                  <a href="#" className="social-icon">
                  <img src={discord} alt='icon' />
                  </a>
                  <a href="#" className="social-icon">
                  <img src={linkedin} alt='icon' />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-5">
              <h5 className="footer-heading">Explore</h5>
              <ul className="footer-links">
                <li><a href="#universe">Our Universe</a></li>
                <li><a href="#stayhuman">StayHuman</a></li>
                <li><a href="#mission">Our Mission</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            {/* Studios */}
            <div className="col-lg-2 col-md-6 mb-5">
              <h5 className="footer-heading">Studios</h5>
              <ul className="footer-links">
                <li><a href="#">Animation</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Interactive</a></li>
                <li><a href="#">AR/VR</a></li>
                <li><a href="#">Web3</a></li>
              </ul>
            </div>

            {/* Community */}
            <div className="col-lg-2 col-md-6 mb-5">
              <h5 className="footer-heading">Community</h5>
              <ul className="footer-links">
                <li><a href="#">Join Discord</a></li>
                <li><a href="#">Artist Portal</a></li>
                <li><a href="#">Creative Challenges</a></li>
                <li><a href="#">Governance</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-2 col-md-6 mb-5">
              <h5 className="footer-heading">Stay Connected</h5>
              <p className="footer-text">Get updates on new stories, creative insights, and community events.</p>
              <form className="newsletter-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email" 
                    aria-label="Email address"
                  />
                  <button className="btn-newsletter" type="submit">
                    <img src={plane} className='icon' alt="send" />
                  </button>
                </div>
                <div className="form-text">
                  By subscribing, you agree to our Privacy Policy
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                © 2024 Soul Kind. All rights reserved. Art and kindness are our tools of trade.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-legal">
                <a href="#" className="legal-link">Privacy Policy</a>
                <a href="#" className="legal-link">Terms of Service</a>
                <a href="#" className="legal-link">Cookie Policy</a>
                <a href="#" className="legal-link">Artists Agreement</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg-element footer-bg-1"></div>
      <div className="footer-bg-element footer-bg-2"></div>
    </footer>
  );
};

export default Footer;