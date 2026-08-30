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

      {/* --- CTA Hero with Contact Form --- */}
      <div className="footer_hero">
        {/* grid overlay */}
        <div className="grid_overlay" aria-hidden="true">
          <div className="verticle_line" />
          <div className="verticle_line is-right" />
          <div className="verticle_line" style={{ left: '50%' }} />
          <div className="horizontal_line" style={{ top: 0 }} />
          <div className="horizontal_line" style={{ bottom: 0 }} />
          <div className="horizontal_line" style={{ top: '33%' }} />
          <div className="horizontal_line" style={{ top: '66%' }} />
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
          style={{ "--cols": 14, right: 0, top: 0 } as React.CSSProperties}
          aria-hidden="true"
        >
          {Array.from({ length: 42 }).map((_, i) => (
            <span key={`tr-${i}`} />
          ))}
        </div>
        {/* dot grid bottom-left */}
        <div
          className="dot_grid"
          style={{ "--cols": 12, left: 0, bottom: 0 } as React.CSSProperties}
          aria-hidden="true"
        >
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={`bl-${i}`} />
          ))}
        </div>
        {/* dot grid center-left */}
        <div
          className="dot_grid"
          style={{ "--cols": 8, left: '10%', top: '15%' } as React.CSSProperties}
          aria-hidden="true"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={`cl-${i}`} />
          ))}
        </div>
        {/* dot grid bottom-right */}
        <div
          className="dot_grid"
          style={{ "--cols": 8, right: '5%', bottom: '10%' } as React.CSSProperties}
          aria-hidden="true"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={`br-${i}`} />
          ))}
        </div>
        {/* dot grid top-center */}
        <div
          className="dot_grid"
          style={{ "--cols": 10, left: '30%', top: 0 } as React.CSSProperties}
          aria-hidden="true"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={`tc-${i}`} />
          ))}
        </div>
        {/* diagonal accent lines - top-right */}
        <svg className="footer_hero-diags" aria-hidden="true" viewBox="0 0 200 200" fill="none">
          <line x1="0" y1="200" x2="200" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="40" y1="200" x2="200" y2="40" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="200" x2="200" y2="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="160" x2="160" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="120" x2="120" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="80" x2="80" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        {/* diagonal accent lines - bottom-left */}
        <svg className="footer_hero-diags-bl" aria-hidden="true" viewBox="0 0 200 200" fill="none">
          <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="0.4" />
          <line x1="40" y1="0" x2="200" y2="160" stroke="currentColor" strokeWidth="0.4" />
          <line x1="80" y1="0" x2="200" y2="120" stroke="currentColor" strokeWidth="0.4" />
          <line x1="0" y1="40" x2="160" y2="200" stroke="currentColor" strokeWidth="0.4" />
          <line x1="0" y1="80" x2="120" y2="200" stroke="currentColor" strokeWidth="0.4" />
        </svg>
        {/* corner bracket accents */}
        <svg className="footer_hero-bracket footer_hero-bracket--tl" aria-hidden="true" viewBox="0 0 60 60" fill="none">
          <path d="M0 20 L0 0 L20 0" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="footer_hero-bracket footer_hero-bracket--tr" aria-hidden="true" viewBox="0 0 60 60" fill="none">
          <path d="M40 0 L60 0 L60 20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="footer_hero-bracket footer_hero-bracket--bl" aria-hidden="true" viewBox="0 0 60 60" fill="none">
          <path d="M0 40 L0 60 L20 60" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="footer_hero-bracket footer_hero-bracket--br" aria-hidden="true" viewBox="0 0 60 60" fill="none">
          <path d="M60 40 L60 60 L40 60" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {/* concentric circles - left */}
        <svg className="footer_hero-circles" aria-hidden="true" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="10" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        {/* concentric circles - top-right */}
        <svg className="footer_hero-circles-tr" aria-hidden="true" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        {/* cross-hatch accent */}
        <svg className="footer_hero-crosshatch" aria-hidden="true" viewBox="0 0 100 100" fill="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.4" />
          <line x1="20" y1="0" x2="100" y2="80" stroke="currentColor" strokeWidth="0.4" />
          <line x1="40" y1="0" x2="100" y2="60" stroke="currentColor" strokeWidth="0.4" />
          <line x1="0" y1="20" x2="80" y2="100" stroke="currentColor" strokeWidth="0.4" />
          <line x1="0" y1="40" x2="60" y2="100" stroke="currentColor" strokeWidth="0.4" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.4" />
          <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="0.4" />
          <line x1="60" y1="0" x2="0" y2="60" stroke="currentColor" strokeWidth="0.4" />
          <line x1="100" y1="20" x2="20" y2="100" stroke="currentColor" strokeWidth="0.4" />
          <line x1="100" y1="40" x2="40" y2="100" stroke="currentColor" strokeWidth="0.4" />
        </svg>
        {/* dashed horizontal accents */}
        <svg className="footer_hero-dashed footer_hero-dashed--1" aria-hidden="true" viewBox="0 0 300 4" fill="none">
          <line x1="0" y1="2" x2="300" y2="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 6" />
        </svg>
        <svg className="footer_hero-dashed footer_hero-dashed--2" aria-hidden="true" viewBox="0 0 300 4" fill="none">
          <line x1="0" y1="2" x2="300" y2="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 6" />
        </svg>
        {/* diamond grid pattern */}
        <svg className="footer_hero-diamonds" aria-hidden="true" viewBox="0 0 120 120" fill="none">
          <path d="M60 10 L110 60 L60 110 L10 60 Z" stroke="currentColor" strokeWidth="0.4" />
          <path d="M60 25 L95 60 L60 95 L25 60 Z" stroke="currentColor" strokeWidth="0.4" />
          <path d="M60 40 L80 60 L60 80 L40 60 Z" stroke="currentColor" strokeWidth="0.4" />
        </svg>
        {/* small plus signs grid */}
        <svg className="footer_hero-pluses" aria-hidden="true" viewBox="0 0 100 100" fill="none">
          <line x1="10" y1="5" x2="10" y2="15" stroke="currentColor" strokeWidth="0.6" />
          <line x1="5" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="0.6" />
          <line x1="30" y1="5" x2="30" y2="15" stroke="currentColor" strokeWidth="0.6" />
          <line x1="25" y1="10" x2="35" y2="10" stroke="currentColor" strokeWidth="0.6" />
          <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="0.6" />
          <line x1="45" y1="10" x2="55" y2="10" stroke="currentColor" strokeWidth="0.6" />
          <line x1="70" y1="5" x2="70" y2="15" stroke="currentColor" strokeWidth="0.6" />
          <line x1="65" y1="10" x2="75" y2="10" stroke="currentColor" strokeWidth="0.6" />
          <line x1="90" y1="5" x2="90" y2="15" stroke="currentColor" strokeWidth="0.6" />
          <line x1="85" y1="10" x2="95" y2="10" stroke="currentColor" strokeWidth="0.6" />
          <line x1="10" y1="30" x2="10" y2="40" stroke="currentColor" strokeWidth="0.6" />
          <line x1="5" y1="35" x2="15" y2="35" stroke="currentColor" strokeWidth="0.6" />
          <line x1="30" y1="30" x2="30" y2="40" stroke="currentColor" strokeWidth="0.6" />
          <line x1="25" y1="35" x2="35" y2="35" stroke="currentColor" strokeWidth="0.6" />
          <line x1="50" y1="30" x2="50" y2="40" stroke="currentColor" strokeWidth="0.6" />
          <line x1="45" y1="35" x2="55" y2="35" stroke="currentColor" strokeWidth="0.6" />
          <line x1="70" y1="30" x2="70" y2="40" stroke="currentColor" strokeWidth="0.6" />
          <line x1="65" y1="35" x2="75" y2="35" stroke="currentColor" strokeWidth="0.6" />
          <line x1="10" y1="55" x2="10" y2="65" stroke="currentColor" strokeWidth="0.6" />
          <line x1="5" y1="60" x2="15" y2="60" stroke="currentColor" strokeWidth="0.6" />
          <line x1="30" y1="55" x2="30" y2="65" stroke="currentColor" strokeWidth="0.6" />
          <line x1="25" y1="60" x2="35" y2="60" stroke="currentColor" strokeWidth="0.6" />
          <line x1="50" y1="55" x2="50" y2="65" stroke="currentColor" strokeWidth="0.6" />
          <line x1="45" y1="60" x2="55" y2="60" stroke="currentColor" strokeWidth="0.6" />
        </svg>
        <div className="padding-global">
          <div className="container-large">
            <div className="footer_hero-grid">
              <div className="footer_hero-content">
                <span className="footer_hero-label">Start a project</span>
                <h2 className="footer_hero-heading">
                  Let&apos;s Build Something
                  <br />
                  <span className="text-color-primary-green">Extraordinary.</span>
                </h2>
                <p className="footer_hero-desc">
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
              <div className="footer_hero-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Halftone dot-map of Africa --- */}
      <img
        src="/map dot.svg"
        alt=""
        className="footer_map"
        aria-hidden="true"
      />

      {/* --- Multi-column footer --- */}
      <div className="footer_columns">
        <div className="padding-global">
          <div className="container-large">
            <div className="footer_columns-grid">
              {/* Brand column */}
              <div className="footer_col footer_col--brand">
                <div className="navbar_logo">
                  <svg className="logo_mark" viewBox="0 0 64 64" aria-hidden="true">
                    <rect width="64" height="64" fill="#021207" />
                    <rect x="12" y="12" width="18" height="18" fill="#24cb71" />
                    <rect x="34" y="12" width="18" height="18" fill="#d6fa7e" />
                    <rect x="12" y="34" width="18" height="18" fill="#d6fa7e" />
                    <rect x="34" y="34" width="18" height="18" fill="#24cb71" />
                  </svg>
                  <span className="logo_word">Prime Labs</span>
                </div>
                <p className="footer_col-desc">
                  Senior-only software team. Scoping, architecture,
                  development, QA, and handover. Production ready in weeks.
                </p>
                <div className="footer_social-row">
                  <a href="#top" className="footer_social-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
                    </svg>
                  </a>
                  <a href="#top" className="footer_social-link" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
                    </svg>
                  </a>
                  <a href="#top" className="footer_social-link" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Company links */}
              <div className="footer_col">
                <h4 className="footer_col-title">Company</h4>
                <nav className="footer_col-links">
                  <a href="#services" className="footer_col-link">Services</a>
                  <a href="#work" className="footer_col-link">Our Work</a>
                  <a href="#process" className="footer_col-link">How It Works</a>
                  <a href="#faq" className="footer_col-link">FAQ</a>
                </nav>
              </div>

              {/* Services links */}
              <div className="footer_col">
                <h4 className="footer_col-title">What We Build</h4>
                <nav className="footer_col-links">
                  <a href="#services" className="footer_col-link">Custom Software</a>
                  <a href="#services" className="footer_col-link">B2B SaaS</a>
                  <a href="#services" className="footer_col-link">AI Workflows</a>
                  <a href="#services" className="footer_col-link">Tech Consultancy</a>
                </nav>
              </div>

              {/* Contact column */}
              <div className="footer_col">
                <h4 className="footer_col-title">Contact</h4>
                <div className="footer_col-contact">
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
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom bar --- */}
      <div className="footer_bottom">
        <div className="padding-global">
          <div className="container-large">
            <div className="footer_bottom-inner">
              <span className="footer_copywrite">&copy; 2026 Prime Labs. All rights reserved.</span>
              <div className="footer_bottom-right">
                <div className="policy_link-block">
                  <a href="#faq" className="footer-link">Terms &amp; Conditions</a>
                  <a href="#faq" className="footer-link">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
