import Faqs from '../components/frequent/faqs';
import Blog from '../components/frequent/blog';
import hero from '../assets/img/bn.png';
import bird from '../assets/img/bird.svg'
import box from '../assets/img/box.svg'
import puzzle from '../assets/img/puzzle.svg'
import krishna from '../assets/img/about.png'
import timelineImage from '../assets/img/timeline-visual.png';
import banner from '../assets/img/banner (1).webp'
import useSoulKindAnimations from '../components/common/SoulKindAnimation';

// Import Bootstrap CSS and custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './SoulKind.css'; // We'll create this CSS file

const SoulKind = () => {
  useSoulKindAnimations();
  return (
    <>

      {/* Hero Section */}
      <section className="soulkind-hero">
        <div className="container">
          <div className="hero-content">
            <div className="tagline" data-aos="fade-right">
              <i className="fas fa-heart"></i>
              Art and kindness are our tools of trade
            </div>
            <h1 data-aos="fade-right">Soul Kind is a creative force</h1>
            <p className="hero-text" data-aos="fade-right">
              Developing relatable characters and epic stories for a global audience across various formats powered by decentralization.
            </p>
            <a href="#" className="cta-button" data-aos="fade-up">Learn About Us</a>
          </div>
        </div>
        <div className="hero-bg hero-image-container">
          <img src={hero} className='hero-img-fluid' data-aos="fade-up" alt='hero' />
        </div>
      </section>

      {/* Universe Section */}
      <section className="universe-section" id="universe">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Designing a universe</h2>
          <div className="row universe-content align-items-center">

            {/* Text Column */}
            <div className="col-lg-5 col-md-12 universe-text">
              <h3 data-aos="fade-right">Building the Soul Kind brand</h3>
              <p data-aos="fade-right">
                We're building the Soul Kind brand, its world, stories, and characters. Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations, a unique vision, and community-driven storytelling.
              </p>
              <a href="#" className="cta-button">
                Discover the Art <i className="fas fa-arrow-right" data-aos="fade-right"></i>
              </a>

              {/* Stats or features */}
              <div className="universe-stats mt-5">
                <div className="row">
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <div className="stat-number" style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 'bold' }}>10K+</div>
                      <div className="stat-label" style={{ color: '#b0b0c0', fontSize: '0.9rem' }}>Community Members</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <div className="stat-number" style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: 'bold' }}>50+</div>
                      <div className="stat-label" style={{ color: '#b0b0c0', fontSize: '0.9rem' }}>Artists Funded</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <div className="stat-number" style={{ color: 'var(--secondary)', fontSize: '2rem', fontWeight: 'bold' }}>100+</div>
                      <div className="stat-label" style={{ color: '#b0b0c0', fontSize: '0.9rem' }}>Stories Created</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-lg-7 col-md-12" data-aos="fade-up">
              <div className="universe-card-wrapper">
                {/* Floating Particles */}
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>

                {/* The Background Card */}
                <div className="universe-background-card">
                  <div className="card-text-overlay" data-aos="fade-right">Everything</div>
                  <div className="card-text-subtle" data-aos="fade-right">is going to be fine</div>
                </div>

                {/* The Transparent Character Image */}
                <img
                  src={krishna} // Make sure to import this image
                  className="floating-krishna-img"
                  alt="Soul Kind Character"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stayhuman Section */}
      <section className="stayhuman-section" id="stayhuman">
        <div className="container">
          <h2 className="section-title">Staysoul</h2>
          <div className="row stayhuman-grid">
            <div className="col-md-4 col-sm-12">
              <div className="card soulkind-card">
                <div className="card-icon">
                  <img src={bird} className='icon' alt='icon' />
                </div>
                <h4>Soul Kind Studios</h4>
                <p>A creative studio designing the stories, world, and brand of Soul Kind. We bring epic narratives to life through animation, games, and immersive experiences.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card soulkind-card">
                <div className="card-icon">
                  <img src={box} className='icon' alt='icon' />
                </div>
                <h4>Soul Kind Fund</h4>
                <p>A fund that helps artists conceive their creations free of economic dependencies. We support visionary creators to bring their ideas to life without financial constraints.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card soulkind-card">
                <div className="card-icon">
                  <img src={puzzle} className='icon' alt='icon' />
                </div>
                <h4>Building Together</h4>
                <p>Our community-driven approach ensures that every story we tell is shaped by the collective imagination of creators and fans from around the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" id="mission">
        <div className="container">
          <div className="mission-content" data-aos="fade-up" data-aos-duration="800">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              Our mission is to <span className="highlight">entertain and inspire people</span> all over the globe through the power of <span className="highlight">art, kindness, and unique storytelling</span> in <span className="highlight">web3</span>.
            </p>

            <div className="mission-visual" data-aos="zoom-in" data-aos-delay="300">
              <div className="image-frame">
                <img
                  src={timelineImage}
                  className='mission-img'
                  alt='Creative Journey Timeline'
                  data-aos="fade-in"
                  data-aos-delay="500"
                />
                <div className="frame-decoration"></div>
                <div className="frame-decoration corner-2"></div>
                <div className="frame-decoration corner-3"></div>
                <div className="frame-decoration corner-4"></div>
              </div>

              <div className="floating-elements">
                <div className="floating-icon" data-aos="fade-down-right" data-aos-delay="700">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <div className="floating-icon" data-aos="fade-down-left" data-aos-delay="800">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="floating-icon" data-aos="fade-up-right" data-aos-delay="900">
                  <i className="fas fa-code"></i>
                </div>
              </div>
            </div>

            <div className="web3-badge" data-aos="fade-up" data-aos-delay="1000">
              <i className="fas fa-link"></i>
              <span>Powered by Web3 & Decentralization</span>
            </div>

            <div className="mission-stats" data-aos="fade-up" data-aos-delay="1200">
              <div className="stat-item">
                <div className="stat-number" data-count="50">0</div>
                <div className="stat-label">Stories Created</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-count="25">0</div>
                <div className="stat-label">Countries Reached</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-count="10000">0</div>
                <div className="stat-label">Community Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="careers-cta" id="careers">
        <div className="container">
          <div className="careers-content" data-aos="fade-up" data-aos-duration="800">
            <div className="careers-header">
              <h3 className="careers-title">Join Our Creative Journey</h3>
              <p className="careers-text">
                We're looking for passionate storytellers, artists, and innovators to help shape the future of entertainment.
              </p>
            </div>

            <div className="careers-visual" data-aos="zoom-in" data-aos-delay="400">
              <div className="visual-wrapper">
                <img
                  src={banner}
                  className='careers-img'
                  alt='Join Our Creative Team'
                  data-aos="fade-in"
                  data-aos-delay="600"
                />
                <div className="visual-overlay">
                  <div className="overlay-text">
                    <span className="overlay-title">Your Story Starts Here</span>
                    <span className="overlay-subtitle">Create. Innovate. Inspire.</span>
                  </div>
                </div>

                <div className="floating-shapes">
                  <div className="shape shape-1" data-aos="fade-left" data-aos-delay="800"></div>
                  <div className="shape shape-2" data-aos="fade-right" data-aos-delay="900"></div>
                  <div className="shape shape-3" data-aos="fade-up" data-aos-delay="1000"></div>
                </div>
              </div>
            </div>

            <div className="careers-action" data-aos="fade-up" data-aos-delay="1200">
              <a href="/careers" className="cta-button">
                <span>Explore Careers</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="/apply" className="cta-button secondary">
                <span>Quick Apply</span>
                <i className="fas fa-rocket"></i>
              </a>
            </div>

            <div className="careers-perks" data-aos="fade-up" data-aos-delay="1400">
              <div className="perk-item">
                <i className="fas fa-globe"></i>
                <span>Remote First</span>
              </div>
              <div className="perk-item">
                <i className="fas fa-graduation-cap"></i>
                <span>Learning Budget</span>
              </div>
              <div className="perk-item">
                <i className="fas fa-calendar-alt"></i>
                <span>Flexible Hours</span>
              </div>
              <div className="perk-item">
                <i className="fas fa-heart"></i>
                <span>Health & Wellness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <h2 className="section-title">Latest Stories</h2>
          <Blog />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Faqs />
            </div>
            <div className="col-md-6 col-sm-12">
              <Faqs />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default SoulKind;