import React from 'react';
import aboutVideo from '../../assets/img/about-hero.mp4'; // Video file
import partner1 from '../../assets/img/partner1.jpeg';
import partner2 from '../../assets/img/partner2.jpeg';
import partner3 from '../../assets/img/partner3.jpeg';
import partner4 from '../../assets/img/partner4.jpeg';
import timelineImage from '../../assets/img/timeline-visual.png';

// Import Bootstrap CSS and custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'; // We'll create this CSS file
import useSoulKindAnimations from '../../components/common/SoulKindAnimation';

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
    <div className="timeline-header" data-aos="fade-up" data-aos-duration="800">
      <h2 className="section-title">Our Journey Through Time</h2>
      <p className="section-subtitle">From humble beginnings to global impact, follow our creative evolution</p>
    </div>
    
    <div className="row timeline-visual align-items-center">
      {/* Image Column */}
      <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-duration="1000">
        <div className="timeline-image-wrapper">
          <div className="image-container">
            <div className="milestone-marker">
                <div className="marker-dot"></div>
                <div className="marker-pulse"></div>
              </div>
            <img 
              src={timelineImage} 
              alt="Our Journey Timeline" 
              className="timeline-visual-img" 
              data-aos="zoom-in" 
              data-aos-delay="300"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <i className="fas fa-history"></i>
                <span>4 Years of Innovation</span>
              </div>
            </div>
          </div>
          <div className="timeline-stats">
            <div className="stat" data-aos="fade-up" data-aos-delay="500">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat" data-aos="fade-up" data-aos-delay="600">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Members</div>
            </div>
            <div className="stat" data-aos="fade-up" data-aos-delay="700">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Column */}
      <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-duration="1000">
        <div className="timeline-track">
          <div className="timeline-line"></div>
          
          <div className="milestone-list">
            <div className="milestone" data-aos="fade-left" data-aos-delay="400">
              
              <div className="milestone-content">
                <div className="milestone-header">
                  
                  <div className="milestone-year">2019</div>
                  <div className="milestone-badge">Foundation</div>
                </div>
                <h3 className="milestone-title">The Birth of a Vision</h3>
                <p className="milestone-description">
                  Founded by three friends with a shared dream: to create stories that matter, using technology to reach hearts globally.
                </p>
                <div className="milestone-tags">
                  <span className="tag">Storytelling</span>
                  <span className="tag">Technology</span>
                  <span className="tag">Innovation</span>
                </div>
              </div>
            </div>

            <div className="milestone" data-aos="fade-left" data-aos-delay="500">
              
              <div className="milestone-content">
                <div className="milestone-header">
                  <div className="milestone-year">2020</div>
                  <div className="milestone-badge">Community</div>
                </div>
                <h3 className="milestone-title">First Community Spark</h3>
                <p className="milestone-description">
                  Built our first online community of 1,000 passionate creators and launched the Soul Kind Fund.
                </p>
                <div className="milestone-tags">
                  <span className="tag">Community</span>
                  <span className="tag">Funding</span>
                  <span className="tag">Growth</span>
                </div>
              </div>
            </div>

            <div className="milestone" data-aos="fade-left" data-aos-delay="600">
              
              <div className="milestone-content">
                <div className="milestone-header">
                  <div className="milestone-year">2021</div>
                  <div className="milestone-badge">Web3</div>
                </div>
                <h3 className="milestone-title">Web3 Revolution</h3>
                <p className="milestone-description">
                  Pioneered web3 integration in storytelling with our first NFT collection that sold out in 3 minutes.
                </p>
                <div className="milestone-tags">
                  <span className="tag">Web3</span>
                  <span className="tag">NFTs</span>
                  <span className="tag">Blockchain</span>
                </div>
              </div>
            </div>

            <div className="milestone" data-aos="fade-left" data-aos-delay="700">
              
              <div className="milestone-content">
                <div className="milestone-header">
                  <div className="milestone-year">2023</div>
                  <div className="milestone-badge">Global</div>
                </div>
                <h3 className="milestone-title">Global Recognition</h3>
                <p className="milestone-description">
                  Featured in Forbes 30 Under 30 and expanded our community to 50+ countries with 500K+ members.
                </p>
                <div className="milestone-tags">
                  <span className="tag">Recognition</span>
                  <span className="tag">Global</span>
                  <span className="tag">Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="timeline-cta" data-aos="fade-up" data-aos-delay="800">
      <p className="cta-text">Join us as we continue to write our story</p>
      <a href="/about" className="timeline-btn">
        <span>Explore Our Full Story</span>
        <i className="fas fa-arrow-right"></i>
      </a>
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
    <div className="partners-header" data-aos="fade-up" data-aos-duration="800">
      <h2 className="section-title">Trusted By Visionaries</h2>
      <p className="section-subtitle">We're proud to collaborate with forward-thinking organizations that share our passion for innovation and creativity</p>
    </div>
    
    <div className="partners-container">
      {/* Partners Grid */}
      <div className="partners-grid" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div className="partner-card" data-aos="zoom-in" data-aos-delay="300">
          <div className="partner-logo-container">
            <div className="partner-logo">
              <img src={partner1} alt="ArtTech Collective" />
            </div>
            <div className="logo-glow"></div>
          </div>
          <div className="partner-info">
            <h4 className="partner-name">ArtTech Collective</h4>
            <p className="partner-description">Pioneering the intersection of art and technology since 2015</p>
            <div className="partner-tags">
              <span>Art</span>
              <span>Tech</span>
              <span>Innovation</span>
            </div>
          </div>
          <div className="partner-link">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="partner-card" data-aos="zoom-in" data-aos-delay="400">
          <div className="partner-logo-container">
            <div className="partner-logo">
              <img src={partner2} alt="Web3 Creators DAO" />
            </div>
            <div className="logo-glow"></div>
          </div>
          <div className="partner-info">
            <h4 className="partner-name">Web3 Creators DAO</h4>
            <p className="partner-description">Decentralized community of digital creators and innovators</p>
            <div className="partner-tags">
              <span>Web3</span>
              <span>DAO</span>
              <span>Community</span>
            </div>
          </div>
          <div className="partner-link">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="partner-card" data-aos="zoom-in" data-aos-delay="500">
          <div className="partner-logo-container">
            <div className="partner-logo">
              <img src={partner3} alt="Future Story Lab" />
            </div>
            <div className="logo-glow"></div>
          </div>
          <div className="partner-info">
            <h4 className="partner-name">Future Story Lab</h4>
            <p className="partner-description">Research and development for next-generation storytelling</p>
            <div className="partner-tags">
              <span>Research</span>
              <span>Storytelling</span>
              <span>Development</span>
            </div>
          </div>
          <div className="partner-link">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="partner-card" data-aos="zoom-in" data-aos-delay="600">
          <div className="partner-logo-container">
            <div className="partner-logo">
              <img src={partner4} alt="Global Arts Foundation" />
            </div>
            <div className="logo-glow"></div>
          </div>
          <div className="partner-info">
            <h4 className="partner-name">Global Arts Foundation</h4>
            <p className="partner-description">Supporting artistic innovation across continents</p>
            <div className="partner-tags">
              <span>Global</span>
              <span>Arts</span>
              <span>Foundation</span>
            </div>
          </div>
          <div className="partner-link">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Partners Slider Indicators */}
      <div className="partners-slider" data-aos="fade-up" data-aos-delay="800">
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      
      {/* Partnership CTA */}
      <div className="partnership-cta" data-aos="fade-up" data-aos-delay="900">
        <div className="cta-content">
          <i className="fas fa-handshake"></i>
          <div className="cta-text">
            <h3>Interested in Partnership?</h3>
            <p>Join our network of innovative organizations creating the future together</p>
          </div>
          <a href="/partnership" className="partner-btn">
            <span>Become a Partner</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
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
            <div className="cta-buttons" data-aos="fade-up">
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

    </>
  );
};

export default AboutUs;