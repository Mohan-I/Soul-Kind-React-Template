import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';
import errorIllustration from '../../assets/img/illustrations/error404.webp';
import Loader from '../../components/common/loader/loader';

const Error404 = () => {
  useEffect(() => {
    // Add floating animation to elements
    const elements = document.querySelectorAll('.float-animation');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });

    // Add pulse animation to the 404 number
    const number404 = document.querySelector('.error-number');
    if (number404) {
      setInterval(() => {
        number404.classList.add('pulse');
        setTimeout(() => number404.classList.remove('pulse'), 1000);
      }, 3000);
    }
  }, []);

  return (
    <div className="error404-page">
      {/* Background Elements */}
      <div className="error-bg-elements">
        <div className="bg-element element-1 float-animation"></div>
        <div className="bg-element element-2 float-animation"></div>
        <div className="bg-element element-3 float-animation"></div>
        <div className="bg-element element-4 float-animation"></div>
        <div className="bg-element element-5 float-animation"></div>
      </div>

      <div className="container">
        <div className="error-content">
          <Loader />
          {/* Main Content */}
          <div className="error-main">
            <div className="error-illustration" data-aos="zoom-in" data-aos-duration="1000">
              <img
                src={errorIllustration}
                alt="Lost in the creative universe"
                className="error-img"
              />
              <div className="illustration-glow"></div>

              <div className="error-actions">
                <Link to="/" className="home-btn">
                  <i className="fas fa-home"></i>
                  <span>Back to Home</span>
                  <div className="btn-sparkle"></div>
                </Link>

                <Link to="/about" className="explore-btn">
                  <i className="fas fa-compass"></i>
                  <span>Explore Our Universe</span>
                </Link>
              </div>
            </div>

            <div className="error-text" data-aos="fade-up" data-aos-delay="300">
              <h2 className="error-title">Lost in the Creative Cosmos</h2>
              <p className="error-description">
                Oops! The page you're looking for seems to have wandered off into the creative void.
                Don't worry, even the most creative journeys sometimes take unexpected turns.
              </p>


              <div className="error-tips">
                <h4>While you're here, why not:</h4>
                <ul className="tips-list">
                  <li>
                    <i className="fas fa-paint-brush"></i>
                    <span>Check out our latest creative stories</span>
                  </li>
                  <li>
                    <i className="fas fa-users"></i>
                    <span>Join our creative community</span>
                  </li>
                  <li>
                    <i className="fas fa-lightbulb"></i>
                    <span>Discover new artistic inspiration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Error404;