import React from 'react';
import './LegalPages.css';
import useSoulKindAnimations from '../../components/common/SoulKindAnimation';

const TermsConditions = () => {
  useSoulKindAnimations();

  return (
    <>
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="container">
          <div className="legal-hero-content">
            <h1 className="legal-title">Terms & Conditions</h1>
            <p className="legal-subtitle">
              Understanding the guidelines that govern your use of Soul Kind's creative platform and services.
            </p>
            <div className="legal-meta">
              <div className="meta-item">
                <i className="fas fa-calendar-alt"></i>
                <span>Last Updated: March 15, 2024</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-file-contract"></i>
                <span>Version 2.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-wrapper">
            {/* Table of Contents */}
            <div className="legal-sidebar">
              <div className="toc-container">
                <h3 className="toc-title">Table of Contents</h3>
                <nav className="toc-nav">
                  <a href="#acceptance" className="toc-link">1. Acceptance of Terms</a>
                  <a href="#services" className="toc-link">2. Our Services</a>
                  <a href="#account" className="toc-link">3. User Accounts</a>
                  <a href="#content" className="toc-link">4. Content Guidelines</a>
                  <a href="#intellectual" className="toc-link">5. Intellectual Property</a>
                  <a href="#web3" className="toc-link">6. Web3 & NFT Terms</a>
                  <a href="#community" className="toc-link">7. Community Rules</a>
                  <a href="#termination" className="toc-link">8. Termination</a>
                  <a href="#liability" className="toc-link">9. Liability & Disclaimer</a>
                  <a href="#changes" className="toc-link">10. Changes to Terms</a>
                  <a href="#contact" className="toc-link">11. Contact Information</a>
                </nav>
              </div>

              <div className="legal-notice">
                <i className="fas fa-exclamation-triangle"></i>
                <p>Please read these terms carefully before using our services. By accessing Soul Kind, you agree to be bound by these terms.</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="legal-main">
              <div className="section-card" id="acceptance">
                <h2 className="section-title">
                  <span className="section-number">1</span>
                  Acceptance of Terms
                </h2>
                <div className="section-content">
                  <p>Welcome to Soul Kind. By accessing and using our website, platform, and services (collectively, the "Services"), you agree to comply with and be bound by these Terms & Conditions.</p>
                  <p>If you do not agree to these terms, please do not use our Services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of such modifications.</p>
                  <div className="highlight-box">
                    <i className="fas fa-lightbulb"></i>
                    <p>These terms apply to all users, including artists, creators, collectors, and community members engaging with Soul Kind.</p>
                  </div>
                </div>
              </div>

              <div className="section-card" id="services">
                <h2 className="section-title">
                  <span className="section-number">2</span>
                  Our Services
                </h2>
                <div className="section-content">
                  <p>Soul Kind provides a creative platform for:</p>
                  <ul className="legal-list">
                    <li>Digital storytelling and content creation</li>
                    <li>Artist funding and support through Soul Kind Fund</li>
                    <li>Community-driven narrative development</li>
                    <li>Web3 integration including NFT creation and management</li>
                    <li>Collaborative world-building tools</li>
                  </ul>
                  <p>We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice.</p>
                </div>
              </div>

              <div className="section-card" id="account">
                <h2 className="section-title">
                  <span className="section-number">3</span>
                  User Accounts
                </h2>
                <div className="section-content">
                  <p>To access certain features, you must create an account. You agree to:</p>
                  <ul className="legal-list">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your password</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Be responsible for all activities under your account</li>
                  </ul>
                  <p>Users must be at least 13 years old to create an account. Users under 18 require parental consent.</p>
                  <div className="warning-box">
                    <i className="fas fa-shield-alt"></i>
                    <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                  </div>
                </div>
              </div>

              <div className="section-card" id="content">
                <h2 className="section-title">
                  <span className="section-number">4</span>
                  Content Guidelines
                </h2>
                <div className="section-content">
                  <p>Our platform is built on creativity and respect. You agree not to upload, post, or share content that:</p>
                  <ul className="legal-list danger">
                    <li>Is illegal, harmful, or promotes illegal activities</li>
                    <li>Infringes on intellectual property rights</li>
                    <li>Contains hate speech, harassment, or discrimination</li>
                    <li>Is pornographic, sexually explicit, or violent</li>
                    <li>Contains malware, viruses, or harmful code</li>
                    <li>Attempts to scam or defraud other users</li>
                  </ul>
                  <p>We reserve the right to remove any content that violates these guidelines without notice.</p>
                </div>
              </div>

              <div className="section-card" id="intellectual">
                <h2 className="section-title">
                  <span className="section-number">5</span>
                  Intellectual Property
                </h2>
                <div className="section-content">
                  <p>Soul Kind respects intellectual property rights. Our policy includes:</p>
                  <ul className="legal-list">
                    <li><strong>Your Content:</strong> You retain ownership of your original creations</li>
                    <li><strong>Our Content:</strong> Soul Kind retains rights to platform content, branding, and proprietary materials</li>
                    <li><strong>License:</strong> You grant Soul Kind a non-exclusive license to display, distribute, and promote your content on our platform</li>
                    <li><strong>Collaborations:</strong> Joint creations follow specific collaboration agreements</li>
                  </ul>
                  <div className="info-box">
                    <i className="fas fa-balance-scale"></i>
                    <p>For detailed information about intellectual property rights in collaborations, please refer to our <a href="/collaboration-agreement" className="inline-link">Collaboration Agreement</a>.</p>
                  </div>
                </div>
              </div>

              <div className="section-card" id="web3">
                <h2 className="section-title">
                  <span className="section-number">6</span>
                  Web3 & NFT Terms
                </h2>
                <div className="section-content">
                  <p>Special considerations for our web3 services:</p>
                  <ul className="legal-list">
                    <li>NFT purchases are non-refundable unless required by law</li>
                    <li>Smart contract interactions are irreversible</li>
                    <li>You are responsible for wallet security</li>
                    <li>Gas fees and blockchain costs are your responsibility</li>
                    <li>Secondary market sales may include royalty fees</li>
                  </ul>
                  <p>By engaging with our web3 services, you acknowledge the inherent risks of blockchain technology.</p>
                </div>
              </div>

              <div className="section-card" id="community">
                <h2 className="section-title">
                  <span className="section-number">7</span>
                  Community Rules
                </h2>
                <div className="section-content">
                  <p>Our community thrives on respect and collaboration:</p>
                  <ul className="legal-list">
                    <li>Treat all members with kindness and respect</li>
                    <li>Provide constructive feedback</li>
                    <li>Respect diverse perspectives and backgrounds</li>
                    <li>Protect the privacy of others</li>
                    <li>Report inappropriate behavior to moderators</li>
                  </ul>
                  <p>Violation of community rules may result in warnings, temporary suspension, or permanent banning.</p>
                </div>
              </div>

              <div className="section-card" id="termination">
                <h2 className="section-title">
                  <span className="section-number">8</span>
                  Termination
                </h2>
                <div className="section-content">
                  <p>We may terminate or suspend your account and access to our Services if you violate these terms. Upon termination:</p>
                  <ul className="legal-list">
                    <li>Your right to use our Services immediately ceases</li>
                    <li>You must destroy any downloaded materials</li>
                    <li>We may delete your account and associated data</li>
                    <li>NFT ownership and blockchain records remain unaffected</li>
                  </ul>
                </div>
              </div>

              <div className="section-card" id="liability">
                <h2 className="section-title">
                  <span className="section-number">9</span>
                  Liability & Disclaimer
                </h2>
                <div className="section-content">
                  <p><strong>Disclaimer:</strong> Our Services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service.</p>
                  <p><strong>Limitation of Liability:</strong> To the fullest extent permitted by law, Soul Kind shall not be liable for any indirect, incidental, or consequential damages.</p>
                  <p><strong>Indemnification:</strong> You agree to indemnify and hold harmless Soul Kind from any claims arising from your use of our Services.</p>
                </div>
              </div>

              <div className="section-card" id="changes">
                <h2 className="section-title">
                  <span className="section-number">10</span>
                  Changes to Terms
                </h2>
                <div className="section-content">
                  <p>We may update these Terms & Conditions periodically. We will notify users of significant changes through:</p>
                  <ul className="legal-list">
                    <li>Email notifications to registered users</li>
                    <li>Announcements on our platform</li>
                    <li>Updates to the "Last Updated" date</li>
                  </ul>
                  <p>Your continued use after changes constitutes acceptance of the new terms.</p>
                </div>
              </div>

              <div className="section-card" id="contact">
                <h2 className="section-title">
                  <span className="section-number">11</span>
                  Contact Information
                </h2>
                <div className="section-content">
                  <p>For questions about these Terms & Conditions, please contact us:</p>
                  <div className="contact-info">
                    <div className="contact-item">
                      <i className="fas fa-envelope"></i>
                      <span>legal@soulkind.com</span>
                    </div>
                    <div className="contact-item">
                      <i className="fas fa-phone"></i>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="contact-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>123 Creative Street, Art District, CA 90210</span>
                    </div>
                  </div>
                  <div className="legal-acknowledgment">
                    <p><strong>Acknowledgment:</strong> By using Soul Kind, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="legal-actions">
                <button className="legal-btn print-btn" onClick={() => window.print()}>
                  <i className="fas fa-print"></i> Print This Page
                </button>
                <a href="/privacy-policy" className="legal-btn link-btn">
                  <i className="fas fa-shield-alt"></i> View Privacy Policy
                </a>
                <a href="/" className="legal-btn home-btn">
                  <i className="fas fa-home"></i> Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default TermsConditions;