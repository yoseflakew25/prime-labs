const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to address your specific business challenges and opportunities. We build software that aligns perfectly with your workflows and objectives.",
    features: [
      "Custom Software Development",
      "Web & Mobile Applications",
      "Enterprise Software",
      "Integration Solutions",
      "Legacy System Modernization",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    bg: (
      <svg className="services_card-bg" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <rect x="20" y="20" width="60" height="40" stroke="currentColor" strokeWidth="1" />
        <rect x="30" y="30" width="40" height="8" fill="currentColor" opacity=".15" />
        <rect x="30" y="42" width="25" height="4" fill="currentColor" opacity=".1" />
        <rect x="120" y="60" width="60" height="45" stroke="currentColor" strokeWidth="1" />
        <rect x="130" y="70" width="40" height="25" fill="currentColor" opacity=".08" />
        <line x1="80" y1="40" x2="120" y2="82" stroke="currentColor" strokeWidth=".8" strokeDasharray="4 3" />
        <circle cx="160" cy="150" r="20" stroke="currentColor" strokeWidth=".8" />
        <circle cx="160" cy="150" r="8" fill="currentColor" opacity=".1" />
        <rect x="40" y="130" width="50" height="35" stroke="currentColor" strokeWidth=".8" />
        <path d="M50 145h30M50 153h20" stroke="currentColor" strokeWidth=".6" opacity=".3" />
      </svg>
    ),
  },
  {
    title: "B2B SaaS Development",
    description:
      "End-to-end development of scalable, cloud-based software-as-a-service solutions for businesses. We help you build, launch, and scale your SaaS product from concept to market.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "API Development & Integration",
      "Scalable Cloud Infrastructure",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    bg: (
      <svg className="services_card-bg" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <ellipse cx="100" cy="80" rx="70" ry="30" stroke="currentColor" strokeWidth=".8" />
        <ellipse cx="100" cy="100" rx="70" ry="30" stroke="currentColor" strokeWidth=".8" />
        <ellipse cx="100" cy="120" rx="70" ry="30" stroke="currentColor" strokeWidth=".8" />
        <line x1="30" y1="80" x2="30" y2="120" stroke="currentColor" strokeWidth=".8" />
        <line x1="170" y1="80" x2="170" y2="120" stroke="currentColor" strokeWidth=".8" />
        <circle cx="100" cy="100" r="6" fill="currentColor" opacity=".15" />
        <path d="M70 95l20 10-20 10z" fill="currentColor" opacity=".12" />
        <rect x="50" y="155" width="100" height="2" fill="currentColor" opacity=".1" />
        <rect x="60" y="162" width="80" height="2" fill="currentColor" opacity=".08" />
        <rect x="70" y="169" width="60" height="2" fill="currentColor" opacity=".06" />
      </svg>
    ),
  },
  {
    title: "AI Workflow Solutions",
    description:
      "We study your business processes and create customized AI workflows that help your business grow revenue with a lean model. Our AI solutions automate repetitive tasks, extract insights from data, and enhance decision-making.",
    features: [
      "Business Process Analysis",
      "Custom AI Model Development",
      "Workflow Automation",
      "Data-Driven Revenue Growth",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    bg: (
      <svg className="services_card-bg" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth=".8" />
        <circle cx="150" cy="40" r="8" stroke="currentColor" strokeWidth=".8" />
        <circle cx="100" cy="100" r="18" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="6" fill="currentColor" opacity=".15" />
        <circle cx="40" cy="140" r="10" stroke="currentColor" strokeWidth=".8" />
        <circle cx="160" cy="150" r="14" stroke="currentColor" strokeWidth=".8" />
        <line x1="62" y1="50" x2="82" y2="100" stroke="currentColor" strokeWidth=".6" strokeDasharray="3 3" />
        <line x1="142" y1="40" x2="118" y2="100" stroke="currentColor" strokeWidth=".6" strokeDasharray="3 3" />
        <line x1="100" y1="118" x2="50" y2="140" stroke="currentColor" strokeWidth=".6" strokeDasharray="3 3" />
        <line x1="100" y1="118" x2="160" y2="150" stroke="currentColor" strokeWidth=".6" strokeDasharray="3 3" />
        <path d="M90 95l10 5 10-5" stroke="currentColor" strokeWidth=".6" opacity=".3" />
        <path d="M95 105l5 8 5-8" stroke="currentColor" strokeWidth=".6" opacity=".3" />
      </svg>
    ),
  },
  {
    title: "Technology Consultancy",
    description:
      "Strategic guidance to help you make informed technology decisions and investments. Our consultancy services help you navigate the complex technology landscape and align your tech strategy with business goals.",
    features: [
      "Digital Transformation",
      "Technology Stack Selection",
      "Process Optimization",
      "IT Strategy Development",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    bg: (
      <svg className="services_card-bg" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <path d="M30 170 L60 120 L90 140 L120 80 L150 100 L180 50" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="120" r="4" fill="currentColor" opacity=".2" />
        <circle cx="90" cy="140" r="4" fill="currentColor" opacity=".2" />
        <circle cx="120" cy="80" r="4" fill="currentColor" opacity=".2" />
        <circle cx="150" cy="100" r="4" fill="currentColor" opacity=".2" />
        <circle cx="180" cy="50" r="4" fill="currentColor" opacity=".2" />
        <rect x="30" y="175" width="150" height="1" fill="currentColor" opacity=".15" />
        <path d="M40 30h20v15H40zM70 25h20v20H70zM100 35h20v10h-20z" stroke="currentColor" strokeWidth=".6" opacity=".2" />
        <circle cx="160" cy="160" r="25" stroke="currentColor" strokeWidth=".6" strokeDasharray="4 4" />
      </svg>
    ),
  },
];

export default function BuiltFor() {
  return (
    <div className="section_builtfor section_builtfor--lime">
      {/* geometric pattern background */}
      <div className="builtfor_bg-pattern" aria-hidden="true">
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
        <div className="dot_grid" style={{ "--cols": 12, right: 0, top: 0 } as React.CSSProperties}>
          {Array.from({ length: 36 }).map((_, i) => <span key={`t-${i}`} />)}
        </div>
        <div className="dot_grid" style={{ "--cols": 10, left: 0, bottom: 0 } as React.CSSProperties}>
          {Array.from({ length: 30 }).map((_, i) => <span key={`b-${i}`} />)}
        </div>
        <svg className="builtfor_diags" viewBox="0 0 200 200" fill="none">
          <line x1="0" y1="200" x2="200" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="40" y1="200" x2="200" y2="40" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="200" x2="200" y2="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="160" x2="160" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="120" x2="120" y2="0" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="builtfor_bracket builtfor_bracket--tl" viewBox="0 0 60 60" fill="none">
          <path d="M0 20 L0 0 L20 0" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="builtfor_bracket builtfor_bracket--br" viewBox="0 0 60 60" fill="none">
          <path d="M60 40 L60 60 L40 60" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="builtfor_circles" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="builtfor_diamonds" viewBox="0 0 120 120" fill="none">
          <path d="M60 10 L110 60 L60 110 L10 60 Z" stroke="currentColor" strokeWidth="0.4" />
          <path d="M60 25 L95 60 L60 95 L25 60 Z" stroke="currentColor" strokeWidth="0.4" />
          <path d="M60 40 L80 60 L60 80 L40 60 Z" stroke="currentColor" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="padding-section-medium is-builtfor">
        <div className="padding-global">
          <div className="container-large">
            {/* header */}
            <div className="services_header">
              <div className="services_header-left">
                <div className="section_label border-primary-green">
                  <span className="text-color-primary-green">What we do</span>
                </div>
                <h2 className="heading-style-h4">Our Services</h2>
                <p className="services_header-desc">
                  We offer a range of technology services to help businesses
                  leverage innovation for growth and digital transformation.
                </p>
                
              </div>
            </div>

            {/* service cards grid */}
            <div className="services_grid">
              {services.map((service) => (
                <div key={service.title} className="services_card">
                  {service.bg}
                  <div className="services_card-content">
                    <div className="services_card-icon">{service.icon}</div>
                    <h3 className="services_card-title">{service.title}</h3>
                    <p className="services_card-desc">{service.description}</p>
                    <ul className="services_card-list">
                      {service.features.map((feat) => (
                        <li key={feat} className="services_card-feature">
                          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="services_card-check">
                            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
