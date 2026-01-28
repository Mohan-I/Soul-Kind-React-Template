import React, { useState } from 'react';
import useSoulKindAnimations from '../../components/common/SoulKindAnimation';
import './Careers.css';

const Careers = () => {
  useSoulKindAnimations();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const positions = [
    { id: 'creative-director', title: 'Creative Director', department: 'Creative' },
    { id: 'story-artist', title: 'Story Artist', department: 'Animation' },
    { id: 'character-designer', title: 'Character Designer', department: 'Art' },
    { id: 'web3-developer', title: 'Web3 Developer', department: 'Technology' },
    { id: 'community-manager', title: 'Community Manager', department: 'Community' },
    { id: 'producer', title: 'Producer', department: 'Production' },
    { id: 'sound-designer', title: 'Sound Designer', department: 'Audio' },
    { id: 'marketing-lead', title: 'Marketing Lead', department: 'Marketing' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          portfolio: '',
          coverLetter: '',
          resume: null
        });
      }, 3000);
    }, 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content">
            <h1 className="careers-title">Create With Purpose</h1>
            <p className="careers-subtitle">
              Join a team of passionate creators who believe in the power of stories to transform the world.
            </p>
            <div className="careers-stats">
              <div className="career-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Open Positions</div>
              </div>
              <div className="career-stat">
                <div className="stat-number">25+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="career-stat">
                <div className="stat-number">Flexible</div>
                <div className="stat-label">Remote Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="positions-section">
        <div className="container">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">Find your place in our creative universe</p>
          
          <div className="positions-grid">
            {positions.map(position => (
              <div key={position.id} className="position-card" data-aos="fade-up">
                <div className="position-header">
                  <span className="position-department">{position.department}</span>
                  <h3 className="position-title">{position.title}</h3>
                </div>
                <div className="position-details">
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Remote</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-clock"></i>
                    <span>Full-time</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-calendar"></i>
                    <span>Immediate</span>
                  </div>
                </div>
                <button 
                  className="position-apply"
                  onClick={() => setFormData(prev => ({ ...prev, position: position.id }))}
                >
                  Apply Now <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="application-section" id="apply">
        <div className="container">
          <div className="application-wrapper">
            <div className="application-info">
              <h2 className="application-title">Why Join Soul Kind?</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <i className="fas fa-heart"></i>
                  <div data-aos="fade-right">
                    <h4>Purpose-Driven Work</h4>
                    <p>Create stories that matter and impact millions worldwide.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-users"></i>
                  <div data-aos="fade-right">
                    <h4>Global Community</h4>
                    <p>Collaborate with talented creators from around the world.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-graduation-cap"></i>
                  <div data-aos="fade-right">
                    <h4>Continuous Growth</h4>
                    <p>Regular workshops, training, and mentorship programs.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-balance-scale"></i>
                  <div data-aos="fade-right">
                    <h4>Work-Life Harmony</h4>
                    <p>Flexible schedules and unlimited creative time off.</p>
                  </div>
                </div>
              </div>
              
              <div className="application-note">
                <i className="fas fa-lightbulb"></i>
                <p>We value diversity and encourage applications from all backgrounds. Your unique perspective makes our stories richer.</p>
              </div>
            </div>

            <div className="application-form-container" data-aos="fade-down">
              <div className="form-header">
                <h3>Application Form</h3>
                {formData.position && (
                  <div className="selected-position">
                    Applying for: <strong>{positions.find(p => p.id === formData.position)?.title}</strong>
                  </div>
                )}
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h3>Application Received!</h3>
                  <p>Thank you for applying to Soul Kind. Our team will review your application and get back to you within 5-7 business days.</p>
                  <button 
                    className="success-button"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Apply for Another Position
                  </button>
                </div>
              ) : (
                <form className="career-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="position">Desired Position *</label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a position</option>
                        {positions.map(pos => (
                          <option key={pos.id} value={pos.id}>
                            {pos.title} ({pos.department})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience">Years of Experience *</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="portfolio">Portfolio/Website URL</label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://yourportfolio.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter *</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your passion for storytelling, why you want to join Soul Kind, and what unique perspective you bring..."
                      rows="4"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">Resume/CV *</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      <label htmlFor="resume" className="file-label">
                        <i className="fas fa-cloud-upload-alt"></i>
                        <span>{formData.resume ? formData.resume.name : ' Upload your resume (PDF/DOC)'}</span>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-application"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from Team */}
      <section className="team-testimonials">
        <div className="container">
          <h2 className="section-title">Life at Soul Kind</h2>
          <div className="testimonials-grid">
            <div className="team-testimonial">
              <div className="testimonial-content">
                <p>"The creative freedom here is unparalleled. Every day feels like we're building something meaningful."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <h4>Alex Chen</h4>
                    <p>Creative Director, 3 years</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-testimonial">
              <div className="testimonial-content">
                <p>"Working remotely while collaborating with global talent has expanded my creative horizons beyond imagination."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <h4>Maya Rodriguez</h4>
                    <p>Web3 Developer, 2 years</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-testimonial">
              <div className="testimonial-content">
                <p>"The support for professional development and work-life balance makes this more than just a job—it's a calling."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <h4>David Park</h4>
                    <p>Community Manager, 4 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Careers;