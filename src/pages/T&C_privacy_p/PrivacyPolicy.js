
import useSoulKindAnimations from '../../components/common/SoulKindAnimation';
import './LegalPages.css';

const PrivacyPolicy = () => {
  useSoulKindAnimations();

  return (
    <>
      {/* Hero Section */}
      <section className="legal-hero privacy-hero">
        <div className="container">
          <div className="legal-hero-content">
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-subtitle">
              How we collect, use, and protect your personal information in the Soul Kind creative ecosystem.
            </p>
            <div className="legal-meta">
              <div className="meta-item">
                <i className="fas fa-calendar-alt"></i>
                <span>Effective Date: March 15, 2024</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-user-shield"></i>
                <span>GDPR & CCPA Compliant</span>
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
                <h3 className="toc-title">Contents</h3>
                <nav className="toc-nav">
                  <a href="#introduction" className="toc-link">1. Introduction</a>
                  <a href="#collection" className="toc-link">2. Information We Collect</a>
                  <a href="#use" className="toc-link">3. How We Use Information</a>
                  <a href="#sharing" className="toc-link">4. Information Sharing</a>
                  <a href="#cookies" className="toc-link">5. Cookies & Tracking</a>
                  <a href="#security" className="toc-link">6. Data Security</a>
                  <a href="#rights" className="toc-link">7. Your Rights</a>
                  <a href="#children" className="toc-link">8. Children's Privacy</a>
                  <a href="#web3" className="toc-link">9. Web3 & Blockchain</a>
                  <a href="#international" className="toc-link">10. International Transfers</a>
                  <a href="#changes" className="toc-link">11. Policy Changes</a>
                  <a href="#contact" className="toc-link">12. Contact Us</a>
                </nav>
              </div>

              <div className="privacy-badge">
                <i className="fas fa-lock"></i>
                <p>Your privacy is our priority. We're committed to protecting your personal information with industry-standard security measures.</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="legal-main">
              <div className="section-card" id="introduction">
                <h2 className="section-title">
                  <span className="section-number">1</span>
                  Introduction
                </h2>
                <div className="section-content">
                  <p>Soul Kind ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our creative platform, services, and community features.</p>
                  <p>We adhere to global privacy standards including GDPR and CCPA. By using our Services, you consent to the data practices described in this policy.</p>
                  <div className="highlight-box">
                    <i className="fas fa-info-circle"></i>
                    <p>This policy applies to all Soul Kind services, including our website, mobile applications, web3 platform, and community features.</p>
                  </div>
                </div>
              </div>

              <div className="section-card" id="collection">
                <h2 className="section-title">
                  <span className="section-number">2</span>
                  Information We Collect
                </h2>
                <div className="section-content">
                  <p>We collect several types of information to provide and improve our Services:</p>
                  
                  <h4 className="subsection-title">Personal Information</h4>
                  <ul className="legal-list">
                    <li><strong>Account Data:</strong> Name, email, username, profile information</li>
                    <li><strong>Contact Information:</strong> Address, phone number (if provided)</li>
                    <li><strong>Payment Information:</strong> Billing details for purchases (processed securely through third-party processors)</li>
                    <li><strong>Professional Information:</strong> Portfolio links, artistic background</li>
                  </ul>

                  <h4 className="subsection-title">Usage Information</h4>
                  <ul className="legal-list">
                    <li><strong>Technical Data:</strong> IP address, device type, browser information</li>
                    <li><strong>Activity Data:</strong> Pages visited, features used, time spent</li>
                    <li><strong>Interaction Data:</strong> Community interactions, collaborations, feedback</li>
                  </ul>

                  <h4 className="subsection-title">Web3 & Blockchain Data</h4>
                  <ul className="legal-list">
                    <li><strong>Wallet Addresses:</strong> Public blockchain addresses</li>
                    <li><strong>Transaction Data:</strong> NFT purchases, sales, transfers</li>
                    <li><strong>On-chain Activity:</strong> Smart contract interactions</li>
                  </ul>
                </div>
              </div>

              <div className="section-card" id="use">
                <h2 className="section-title">
                  <span className="section-number">3</span>
                  How We Use Information
                </h2>
                <div className="section-content">
                  <p>We use collected information for the following purposes:</p>
                  <div className="use-grid">
                    <div className="use-item">
                      <div className="use-icon">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <h5>Service Delivery</h5>
                      <p>To provide, maintain, and improve our creative platform and services</p>
                    </div>
                    <div className="use-item">
                      <div className="use-icon">
                        <i className="fas fa-user-check"></i>
                      </div>
                      <h5>Authentication</h5>
                      <p>To verify accounts and protect against unauthorized access</p>
                    </div>
                    <div className="use-item">
                      <div className="use-icon">
                        <i className="fas fa-comments"></i>
                      </div>
                      <h5>Communication</h5>
                      <p>To send updates, newsletters, and respond to inquiries</p>
                    </div>
                    <div className="use-item">
                      <div className="use-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <h5>Analytics</h5>
                      <p>To analyze usage patterns and improve user experience</p>
                    </div>
                    <div className="use-item">
                      <div className="use-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h5>Security</h5>
                      <p>To detect and prevent fraud, abuse, and security threats</p>
                    </div>
                    <div className="use-item">
                      <div className="use-icon">
                        <i className="fas fa-bullhorn"></i>
                      </div>
                      <h5>Marketing</h5>
                      <p>To promote new features and creative opportunities (with consent)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-card" id="sharing">
                <h2 className="section-title">
                  <span className="section-number">4</span>
                  Information Sharing
                </h2>
                <div className="section-content">
                  <p>We respect your privacy and only share information in the following circumstances:</p>
                  
                  <h4 className="subsection-title">With Your Consent</h4>
                  <p>When you explicitly agree to share information for specific purposes, such as collaborations or featured artist profiles.</p>

                  <h4 className="subsection-title">Service Providers</h4>
                  <p>Trusted third-party providers who assist with:</p>
                  <ul className="legal-list">
                    <li>Payment processing (Stripe, PayPal)</li>
                    <li>Hosting and infrastructure (AWS, Cloudflare)</li>
                    <li>Analytics (Google Analytics, Mixpanel)</li>
                    <li>Email communication (Mailchimp, SendGrid)</li>
                  </ul>

                  <h4 className="subsection-title">Legal Requirements</h4>
                  <p>We may disclose information if required by law, such as:</p>
                  <ul className="legal-list">
                    <li>Compliance with legal obligations</li>
                    <li>Protection of our rights and property</li>
                    <li>Prevention of fraud or security issues</li>
                    <li>Safety of our users and the public</li>
                  </ul>

                  <div className="warning-box">
                    <i className="fas fa-exclamation-circle"></i>
                    <p><strong>Note:</strong> Blockchain transactions are public by nature. Information shared on-chain cannot be deleted or modified.</p>
                  </div>
                </div>
              </div>

              <div className="section-card" id="cookies">
                <h2 className="section-title">
                  <span className="section-number">5</span>
                  Cookies & Tracking Technologies
                </h2>
                <div className="section-content">
                  <p>We use cookies and similar technologies to enhance your experience:</p>
                  
                  <div className="cookies-table">
                    <div className="cookie-row header">
                      <div className="cookie-type">Type</div>
                      <div className="cookie-purpose">Purpose</div>
                      <div className="cookie-duration">Duration</div>
                    </div>
                    <div className="cookie-row">
                      <div className="cookie-type">Essential</div>
                      <div className="cookie-purpose">Site functionality, security</div>
                      <div className="cookie-duration">Session</div>
                    </div>
                    <div className="cookie-row">
                      <div className="cookie-type">Preference</div>
                      <div className="cookie-purpose">Remember settings, language</div>
                      <div className="cookie-duration">1 Year</div>
                    </div>
                    <div className="cookie-row">
                      <div className="cookie-type">Analytics</div>
                      <div className="cookie-purpose">Usage statistics, improvements</div>
                      <div className="cookie-duration">2 Years</div>
                    </div>
                    <div className="cookie-row">
                      <div className="cookie-type">Marketing</div>
                      <div className="cookie-purpose">Personalized content (opt-in)</div>
                      <div className="cookie-duration">6 Months</div>
                    </div>
                  </div>

                  <div className="cookie-controls">
                    <p>You can control cookie settings through your browser preferences. However, disabling essential cookies may affect site functionality.</p>
                    <button className="cookie-btn">
                      <i className="fas fa-cookie-bite"></i> Manage Cookie Preferences
                    </button>
                  </div>
                </div>
              </div>

              <div className="section-card" id="security">
                <h2 className="section-title">
                  <span className="section-number">6</span>
                  Data Security
                </h2>
                <div className="section-content">
                  <p>We implement robust security measures to protect your information:</p>
                  
                  <div className="security-grid">
                    <div className="security-item">
                      <i className="fas fa-lock"></i>
                      <h5>Encryption</h5>
                      <p>End-to-end encryption for sensitive data transfers</p>
                    </div>
                    <div className="security-item">
                      <i className="fas fa-shield-alt"></i>
                      <h5>Access Controls</h5>
                      <p>Strict role-based access for our team members</p>
                    </div>
                    <div className="security-item">
                      <i className="fas fa-server"></i>
                      <h5>Secure Infrastructure</h5>
                      <p>Enterprise-grade hosting with regular security audits</p>
                    </div>
                    <div className="security-item">
                      <i className="fas fa-user-secret"></i>
                      <h5>Anonymization</h5>
                      <p>Data anonymization for analytics and research</p>
                    </div>
                  </div>

                  <div className="warning-box">
                    <i className="fas fa-key"></i>
                    <p><strong>Important:</strong> While we implement strong security measures, no online transmission is 100% secure. We cannot guarantee absolute security.</p>
                  </div>
                </div>
              </div>

              <div className="section-card" id="rights">
                <h2 className="section-title">
                  <span className="section-number">7</span>
                  Your Privacy Rights
                </h2>
                <div className="section-content">
                  <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                  
                  <div className="rights-grid">
                    <div className="right-item">
                      <h5>Access & Portability</h5>
                      <p>Request a copy of your personal data in a structured format</p>
                    </div>
                    <div className="right-item">
                      <h5>Correction</h5>
                      <p>Request correction of inaccurate or incomplete information</p>
                    </div>
                    <div className="right-item">
                      <h5>Deletion</h5>
                      <p>Request deletion of your personal data under certain conditions</p>
                    </div>
                    <div className="right-item">
                      <h5>Restriction</h5>
                      <p>Request restriction of processing in specific circumstances</p>
                    </div>
                    <div className="right-item">
                      <h5>Objection</h5>
                      <p>Object to processing of your personal data</p>
                    </div>
                    <div className="right-item">
                      <h5>Consent Withdrawal</h5>
                      <p>Withdraw consent at any time where processing is based on consent</p>
                    </div>
                  </div>

                  <div className="action-box">
                    <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@soulkind.com" className="inline-link">privacy@soulkind.com</a>. We will respond within 30 days.</p>
                    <a href="/data-request" className="data-request-btn">
                      <i className="fas fa-file-download"></i> Submit Data Request
                    </a>
                  </div>
                </div>
              </div>

              <div className="section-card" id="children">
                <h2 className="section-title">
                  <span className="section-number">8</span>
                  Children's Privacy
                </h2>
                <div className="section-content">
                  <p>Our Services are not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
                  <p>If we learn we have collected personal information from a child under 13 without parental consent, we will delete that information promptly.</p>
                  <p>For users aged 13-18, we recommend parental guidance when using our creative platform and community features.</p>
                </div>
              </div>

              <div className="section-card" id="web3">
                <h2 className="section-title">
                  <span className="section-number">9</span>
                  Web3 & Blockchain Considerations
                </h2>
                <div className="section-content">
                  <p>Our web3 services involve unique privacy considerations:</p>
                  
                  <ul className="legal-list">
                    <li><strong>Public Nature:</strong> Blockchain transactions are publicly visible and permanent</li>
                    <li><strong>Pseudonymity:</strong> Wallet addresses are pseudonymous but can potentially be linked to identities</li>
                    <li><strong>Immutability:</strong> On-chain data cannot be modified or deleted</li>
                    <li><strong>Gas Fees:</strong> Transaction metadata may reveal approximate location</li>
                  </ul>

                  <div className="info-box">
                    <i className="fas fa-link"></i>
                    <p>We recommend using separate wallets for different purposes and being cautious about sharing wallet addresses publicly.</p>
                  </div>
                </div>
              </div>

              <div className="section-card" id="international">
                <h2 className="section-title">
                  <span className="section-number">10</span>
                  International Data Transfers
                </h2>
                <div className="section-content">
                  <p>We operate globally and may transfer your information to countries outside your residence. We ensure appropriate safeguards are in place, including:</p>
                  
                  <ul className="legal-list">
                    <li>Standard Contractual Clauses (SCCs)</li>
                    <li>Adequacy decisions where applicable</li>
                    <li>Privacy Shield framework (for US transfers)</li>
                    <li>Binding Corporate Rules for internal transfers</li>
                  </ul>
                </div>
              </div>

              <div className="section-card" id="changes">
                <h2 className="section-title">
                  <span className="section-number">11</span>
                  Changes to This Policy
                </h2>
                <div className="section-content">
                  <p>We may update this Privacy Policy periodically. We will notify you of significant changes by:</p>
                  
                  <ul className="legal-list">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending email notifications to registered users</li>
                    <li>Updating the "Effective Date" at the top of this page</li>
                    <li>Providing in-app notifications for major changes</li>
                  </ul>

                  <p>We encourage you to review this policy periodically to stay informed about our privacy practices.</p>
                </div>
              </div>

              <div className="section-card" id="contact">
                <h2 className="section-title">
                  <span className="section-number">12</span>
                  Contact Us
                </h2>
                <div className="section-content">
                  <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                  
                  <div className="contact-details">
                    <div className="contact-method">
                      <i className="fas fa-envelope"></i>
                      <div>
                        <h5>Email</h5>
                        <a href="mailto:privacy@soulkind.com">privacy@soulkind.com</a>
                      </div>
                    </div>
                    <div className="contact-method">
                      <i className="fas fa-phone"></i>
                      <div>
                        <h5>Phone</h5>
                        <a href="tel:+15551234567">+1 (555) 123-4567</a>
                      </div>
                    </div>
                    <div className="contact-method">
                      <i className="fas fa-map-marker-alt"></i>
                      <div>
                        <h5>Address</h5>
                        <p>Soul Kind Inc.<br />
                        123 Creative Street<br />
                        Art District, CA 90210<br />
                        United States</p>
                      </div>
                    </div>
                    <div className="contact-method">
                      <i className="fas fa-user-tie"></i>
                      <div>
                        <h5>Data Protection Officer</h5>
                        <a href="mailto:dpo@soulkind.com">dpo@soulkind.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="compliance-notice">
                    <p>For EU residents: You have the right to lodge a complaint with your local data protection authority if you believe we have not complied with applicable data protection laws.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="legal-actions">
                <button className="legal-btn print-btn" onClick={() => window.print()}>
                  <i className="fas fa-print"></i> Print Policy
                </button>
                <a href="/terms" className="legal-btn link-btn">
                  <i className="fas fa-file-contract"></i> View Terms & Conditions
                </a>
                <a href="/cookie-policy" className="legal-btn cookie-btn">
                  <i className="fas fa-cookie-bite"></i> Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;