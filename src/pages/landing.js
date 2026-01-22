import Faqs from '../components/frequent/faqs';
import Footer from '../components/common/footer';
import Blog from '../components/frequent/blog';
import hero from '../assets/img/bn.png';
import krishna from '../assets/img/about.png'
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
            <div className="tagline">
              <i className="fas fa-heart"></i>
              Art and kindness are our tools of trade
            </div>
            <h1>Soul Kind is a creative force</h1>
            <p className="hero-text">
              Developing relatable characters and epic stories for a global audience across various formats powered by decentralization.
            </p>
            <a href="#" className="cta-button">Learn About Us</a>
          </div>
        </div>
        <div className="hero-bg hero-image-container">
          <img src={hero} className='hero-img-fluid' alt='hero' />
        </div>
      </section>

      {/* Universe Section */}
      <section className="universe-section" id="universe">
        <div className="container">
          <h2 className="section-title">Designing a universe</h2>
          <div className="row universe-content align-items-center">

            {/* Text Column */}
            <div className="col-lg-5 col-md-12 universe-text">
              <h3>Building the Soul Kind brand</h3>
              <p>
                We're building the Soul Kind brand, its world, stories, and characters. Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations, a unique vision, and community-driven storytelling.
              </p>
              <a href="#" className="cta-button">
                Discover the Art <i className="fas fa-arrow-right"></i>
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
            <div className="col-lg-7 col-md-12">
              <div className="universe-card-wrapper">
                {/* Floating Particles */}
                <div className="floating-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>

                {/* The Background Card */}
                <div className="universe-background-card">
                  <div className="card-text-overlay">Everything</div>
                  <div className="card-text-subtle">is going to be fine</div>
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
                  <i className="fas fa-film"></i>
                </div>
                <h4>Soul Kind Studios</h4>
                <p>A creative studio designing the stories, world, and brand of Soul Kind. We bring epic narratives to life through animation, games, and immersive experiences.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card soulkind-card">
                <div className="card-icon">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h4>Soul Kind Fund</h4>
                <p>A fund that helps artists conceive their creations free of economic dependencies. We support visionary creators to bring their ideas to life without financial constraints.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card soulkind-card">
                <div className="card-icon">
                  <i className="fas fa-users"></i>
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
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            Our mission is to <span className="highlight">entertain and inspire people</span> all over the globe through the power of <span className="highlight">art, kindness, and unique storytelling</span> in <span className="highlight">web3</span>.
          </p>
          <div className="web3-badge">Powered by Web3 & Decentralization</div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="careers-cta" id="careers">
        <div className="container">
          <h3>Join Our Creative Journey</h3>
          <p className="careers-text">
            We're looking for passionate storytellers, artists, and innovators to help shape the future of entertainment.
          </p>
          <a href="#" className="cta-button">Explore Careers</a>
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

      <Footer />
    </>
  );
};

export default SoulKind;