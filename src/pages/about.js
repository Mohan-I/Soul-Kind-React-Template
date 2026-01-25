import React from 'react';
import Faqs from '../components/frequent/faqs';
import Footer from '../components/common/footer';
import Blog from '../components/frequent/blog';
import aboutVideo from '../assets/img/about-hero.mp4'; // Video file
import partner1 from '../assets/img/partner1.jpeg';
import partner2 from '../assets/img/partner2.jpeg';
import partner3 from '../assets/img/partner3.jpeg';
import partner4 from '../assets/img/partner4.jpeg';
import timelineImage from '../assets/img/timeline-visual.png';
import useSoulKindAnimations from '../components/common/SoulKindAnimation';

// Import Bootstrap CSS and custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './SoulKind.css'; // We'll create this CSS file

const AboutUs = () => {
  useSoulKindAnimations();
  
  return (
    <>
      {/* Video Hero Section */}
      <section className="video-hero about-video-hero">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="background-video">
            <source src={aboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
          <div className="container">
            <div className="video-hero-content">
              <div className="tagline">
                <i className="fas fa-star"></i>
                Our Story, Our Purpose
              </div>
              <h1 className="video-hero-title">We Are Soul Kind</h1>
              <p className="video-hero-text">
                A collective of dreamers, storytellers, and innovators dedicated to creating meaningful experiences that connect hearts across the globe through art, technology, and community.
              </p>
              <div className="hero-stats">
                <div className="stat-circle">
                  <div className="stat-number">2019</div>
                  <div className="stat-label">Founded</div>
                </div>
                <div className="stat-circle">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat-circle">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-statement" id="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-icon">
              <i className="fas fa-compass"></i>
            </div>
            <h2 className="mission-title">Our Guiding North Star</h2>
            <p className="mission-text">
              We believe that stories have the power to transform lives, build bridges between cultures, and inspire positive change. Through the fusion of art, technology, and kindness, we create experiences that resonate on a soul level.
            </p>
            <div className="mission-highlights">
              <div className="highlight-item">
                <i className="fas fa-paint-brush"></i>
                <span>Artistic Excellence</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-code"></i>
                <span>Technical Innovation</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-heart"></i>
                <span>Heart-Centered Approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section" id="timeline">
        <div className="container">
          <h2 className="section-title">Our Journey Through Time</h2>
          <div className="row timeline-visual align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="timeline-image-wrapper">
                <img src={timelineImage} alt="Our Journey Timeline" className="timeline-visual-img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="milestone-list">
                <div className="milestone">
                  <div className="milestone-year">2019</div>
                  <h3 className="milestone-title">The Birth of a Vision</h3>
                  <p className="milestone-description">
                    Founded by three friends with a shared dream: to create stories that matter, using technology to reach hearts globally.
                  </p>
                </div>
                <div className="milestone">
                  <div className="milestone-year">2020</div>
                  <h3 className="milestone-title">First Community Spark</h3>
                  <p className="milestone-description">
                    Built our first online community of 1,000 passionate creators and launched the Soul Kind Fund.
                  </p>
                </div>
                <div className="milestone">
                  <div className="milestone-year">2021</div>
                  <h3 className="milestone-title">Web3 Revolution</h3>
                  <p className="milestone-description">
                    Pioneered web3 integration in storytelling with our first NFT collection that sold out in 3 minutes.
                  </p>
                </div>
                <div className="milestone">
                  <div className="milestone-year">2023</div>
                  <h3 className="milestone-title">Global Recognition</h3>
                  <p className="milestone-description">
                    Featured in Forbes 30 Under 30 and expanded our community to 50+ countries with 500K+ members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <h2 className="section-title">Voices From Our Community</h2>
          <p className="section-subtitle">Hear what artists, partners, and community members say about their journey with Soul Kind</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">
                  "Soul Kind gave me the platform and resources to turn my passion into a career. The community support is unlike anything I've experienced."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <h4>Sarah Chen</h4>
                    <p className="author-role">Digital Artist</p>
                    <p className="author-location">Tokyo, Japan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">
                  "Working with Soul Kind has been transformative. Their innovative approach to storytelling through web3 has opened new creative horizons for our studio."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <h4>Marcus Johnson</h4>
                    <p className="author-role">Studio Director</p>
                    <p className="author-location">Los Angeles, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">
                  "The Soul Kind Fund changed my life. It allowed me to focus entirely on my craft without financial stress, resulting in my most meaningful work yet."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <h4>Elena Rodriguez</h4>
                    <p className="author-role">Animator</p>
                    <p className="author-location">Barcelona, Spain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section" id="partners">
        <div className="container">
          <h2 className="section-title">Trusted By Visionaries</h2>
          <p className="section-subtitle">We're proud to collaborate with forward-thinking organizations that share our passion for innovation and creativity</p>
          
          <div className="partners-grid">
            <div className="partner-card">
              <div className="partner-logo">
                <img src={partner1} alt="Partner 1" />
              </div>
              <h4 className="partner-name">ArtTech Collective</h4>
              <p className="partner-description">Pioneering the intersection of art and technology since 2015</p>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src={partner2} alt="Partner 2" />
              </div>
              <h4 className="partner-name">Web3 Creators DAO</h4>
              <p className="partner-description">Decentralized community of digital creators and innovators</p>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src={partner3} alt="Partner 3" />
              </div>
              <h4 className="partner-name">Future Story Lab</h4>
              <p className="partner-description">Research and development for next-generation storytelling</p>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src={partner4} alt="Partner 4" />
              </div>
              <h4 className="partner-name">Global Arts Foundation</h4>
              <p className="partner-description">Supporting artistic innovation across continents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" id="values">
        <div className="container">
          <h2 className="section-title">Our Guiding Principles</h2>
          <div className="values-circles">
            <div className="value-circle">
              <div className="circle-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Kindness</h3>
              <p>Every action rooted in empathy</p>
            </div>
            <div className="value-circle">
              <div className="circle-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>Pushing creative boundaries</p>
            </div>
            <div className="value-circle">
              <div className="circle-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>Stronger together, always</p>
            </div>
            <div className="value-circle">
              <div className="circle-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Impact</h3>
              <p>Creating meaningful change</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" id="join">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Create With Us?</h2>
            <p className="cta-text">
              Whether you're an artist looking for support, a company seeking innovative collaboration, or simply someone who believes in the power of stories—let's build something beautiful together.
            </p>
            <div className="cta-buttons">
              <a href="/apply" className="cta-button primary-cta">
                <i className="fas fa-rocket"></i>
                Join as Artist
              </a>
              <a href="/partnerships" className="cta-button secondary-cta">
                <i className="fas fa-handshake"></i>
                Partner With Us
              </a>
              <a href="/community" className="cta-button tertiary-cta">
                <i className="fas fa-users"></i>
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;