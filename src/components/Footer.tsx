import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="footer" id="start">
      {/* --- Geometric pattern background --- */}
      <div className="footer_geo-pattern" aria-hidden="true">
        <div className="grid_overlay">
          <div className="verticle_line" />
          <div className="verticle_line is-right" />
          <div className="horizontal_line" style={{ top: 0 }} />
          <div className="horizontal_line" style={{ bottom: 0 }} />
          <div className="footer_geo-box _1" />
          <div className="footer_geo-box _2" />
          <div className="footer_geo-box _3" />
          <div className="footer_geo-box _4" />
        </div>
        <div
          className="dot_grid"
          style={{ "--cols": 12, left: 0, top: 0 } as React.CSSProperties}
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>
      {/* --- Hero CTA band --- */}
      <div className="footer_hero">
        {/* grid overlay with hairlines */}
        <div className="grid_overlay" aria-hidden="true">
          <div className="verticle_line" />
          <div className="verticle_line is-right" />
          <div className="horizontal_line" style={{ top: 0 }} />
          <div className="horizontal_line" style={{ bottom: 0 }} />
          <div className="horizontal_line" style={{ top: '50%' }} />
          <div className="footer_geo-box _1" />
          <div className="footer_geo-box _2" />
          <div className="footer_geo-box _3" />
          <div className="footer_geo-box _4" />
          <div className="footer_geo-box _5" />
          <div className="footer_geo-box _6" />
        </div>
        {/* dot grid top-right */}
        <div
          className="dot_grid"
          style={{ "--cols": 10, right: 0, top: 0 } as React.CSSProperties}
          aria-hidden="true"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={`tr-${i}`} />
          ))}
        </div>
        {/* dot grid bottom-left */}
        <div
          className="dot_grid"
          style={{ "--cols": 8, left: 0, bottom: 0 } as React.CSSProperties}
          aria-hidden="true"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={`bl-${i}`} />
          ))}
        </div>
        {/* diagonal accent lines */}
        <svg className="footer_hero-diags" aria-hidden="true" viewBox="0 0 200 200" fill="none">
          <line x1="0" y1="200" x2="200" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="40" y1="200" x2="200" y2="40" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="200" x2="200" y2="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="160" x2="160" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="120" x2="120" y2="0" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        {/* corner bracket accents */}
        <svg className="footer_hero-bracket footer_hero-bracket--tl" aria-hidden="true" viewBox="0 0 60 60" fill="none">
          <path d="M0 20 L0 0 L20 0" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="footer_hero-bracket footer_hero-bracket--br" aria-hidden="true" viewBox="0 0 60 60" fill="none">
          <path d="M60 40 L60 60 L40 60" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="padding-global">
          <div className="container-large">
            <div className="footer_hero-inner">
              <div className="footer_hero-left">
                <span className="footer_hero-label">Start a project</span>
                <h2 className="footer_hero-heading">
                  Let&apos;s Build Something
                  <br />
                  <span className="text-color-primary-green">Extraordinary.</span>
                </h2>
              </div>
              <div className="footer_hero-right">
                <p className="opacity-60">
                  Send us your requirements today. Within 24 to 48 hours you
                  will have a fixed-price quote and a delivery timeline, all
                  before you spend a dollar.
                </p>
                <div className="footer_hero-stats">
                  <div className="footer_hero-stat">
                    <span className="footer_hero-stat-num">24-48h</span>
                    <span className="footer_hero-stat-label">Quote turnaround</span>
                  </div>
                  <div className="footer_hero-stat">
                    <span className="footer_hero-stat-num">4-8 wks</span>
                    <span className="footer_hero-stat-label">To first release</span>
                  </div>
                  <div className="footer_hero-stat">
                    <span className="footer_hero-stat-num">98%</span>
                    <span className="footer_hero-stat-label">On-time delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Halftone dot-map of Africa (bottom right) --- */}
      <img
        src="/map dot.svg"
        alt=""
        className="footer_map"
        aria-hidden="true"
      />

      {/* --- Form + contact details --- */}
      <div className="footer_main">
        <div className="padding-global">
          <div className="container-large">
            <div className="footer_main-grid">
              <div className="footer_form-block">
                <h3 className="footer_section-title">Get in touch</h3>
                <ContactForm />
              </div>
              <div className="footer_details-block">
                <div className="footer_details-col">
                  <h3 className="footer_section-title">Contact</h3>
                  <div className="footer_contact-list">
                    <a href="tel:+1234567890" className="footer_contact-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="footer_contact-icon">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      <span>+1 (234) 567-890</span>
                    </a>
                    <a href="mailto:hello@primelabs.dev" className="footer_contact-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="footer_contact-icon">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 4L12 13 2 4" />
                      </svg>
                      <span>hello@primelabs.dev</span>
                    </a>
                  </div>
                </div>
                <div className="footer_details-col">
                  <h3 className="footer_section-title">Company</h3>
                  <nav className="footer_link-list">
                    <a href="#services" className="footer_link">Services</a>
                    <a href="#work" className="footer_link">Our Work</a>
                    <a href="#process" className="footer_link">How It Works</a>
                    <a href="#faq" className="footer_link">FAQ</a>
                  </nav>
                </div>
                <div className="footer_details-col">
                  <h3 className="footer_section-title">What We Build</h3>
                  <nav className="footer_link-list">
                    <a href="#services" className="footer_link">Custom Software</a>
                    <a href="#services" className="footer_link">B2B SaaS</a>
                    <a href="#services" className="footer_link">AI Workflows</a>
                    <a href="#services" className="footer_link">Tech Consultancy</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom bar --- */}
      <div className="footer_bottom">
        <div className="padding-global">
          <div className="container-large">
            <div className="footer_bottom-inner">
              <div className="footer_bottom-left">
                
                <span className="footer_copywrite">&copy; 2026 Prime Labs. All rights reserved.</span>
              </div>
              <div className="footer_bottom-right">
                <div className="policy_link-block">
                  <a href="#faq" className="footer-link">Terms &amp; Conditions</a>
                  <a href="#faq" className="footer-link">Privacy Policy</a>
                </div>
                <div className="footer_social-media">
                  <a href="#top" className="social_media-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
                    </svg>
                  </a>
                  <a href="#top" className="social_media-link" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
