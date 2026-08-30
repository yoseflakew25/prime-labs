export default function ServicesSection() {
  return (
    <section className="section_pixelwhisk" id="services">
      <div className="container-large">
        <div className="pixelwhisk_padding z-index-2">
          <div className="pixelwhisk_flex">
            <div className="pixelwhisk_left-block">
              <div className="section_header align-left">
                <div className="section_label border-primary-green">
                  <span className="text-color-primary-green">
                    Introducing Prime Labs
                  </span>
                </div>
                <div className="section_title-block">
                  <h2 className="heading-style-h4">
                    Your Product Deserves Better Than a Job Board.
                  </h2>
                  <p className="opacity-60">
                    Prime Labs is the shortest route from requirement to working
                    software. We handle scoping, architecture, development, QA
                    and handover with a senior in-house team. Production ready,
                    documented, and typically live in weeks rather than quarters.
                  </p>
                </div>
              </div>
              <div className="about-image">
                <img src="/about-image.svg" alt="About Prime Labs" />
              </div>
            </div>
            <div className="home-builtfor_tables">
              <div className="builtfor_table">
                <div className="builtfor_padding">
                  <div className="container-large">
                    <div className="home-builtfor_list-wrap">
                      <div className="builtfor_list-item">
                        <div className="builtfor_icon-wrapper">
                          <div className="builtfor_item-lcon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#025a1d" strokeWidth="1.8" aria-hidden="true">
                              <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
                            </svg>
                          </div>
                        </div>
                        <div className="builtfor_item-content">
                          <h3 className="heading-style-h6 text-size-medium">
                            Senior Engineers Only
                          </h3>
                          <p className="opacity-60">
                            Every Prime Labs engineer has shipped production
                            systems at scale. We test for architecture judgment,
                            code quality, security fundamentals, and the ability
                            to explain a trade-off in plain language.
                          </p>
                        </div>
                      </div>
                      <div className="builtfor_list-item">
                        <div className="builtfor_icon-wrapper">
                          <div className="builtfor_item-lcon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#025a1d" strokeWidth="1.8" aria-hidden="true">
                              <rect x="3" y="3" width="7" height="7" />
                              <rect x="14" y="3" width="7" height="7" />
                              <rect x="3" y="14" width="7" height="7" />
                              <rect x="14" y="14" width="7" height="7" />
                            </svg>
                          </div>
                        </div>
                        <div className="builtfor_item-content">
                          <h3 className="heading-style-h6 text-size-medium">
                            Built by Specialists
                          </h3>
                          <p className="opacity-60">
                            Not every product is the same. Your build goes to
                            engineers who work in exactly what you need: B2B SaaS
                            platforms, data and reporting, hardware integrations,
                            or applied AI workflows.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="builtfor_line1 top" />
                <div className="builtfor_line2" />
              </div>
              <div className="builtfor_table">
                <div className="builtfor_padding">
                  <div className="container-large">
                    <div className="home-builtfor_list-wrap">
                      <div className="builtfor_list-item">
                        <div className="builtfor_icon-wrapper">
                          <div className="builtfor_item-lcon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#025a1d" strokeWidth="1.8" aria-hidden="true">
                              <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
                            </svg>
                          </div>
                        </div>
                        <div className="builtfor_item-content">
                          <h3 className="heading-style-h6 text-size-medium">
                            Real Estimates From Real Requirements
                          </h3>
                          <p className="opacity-60">
                            No vague day rates. Share what you need and within 24
                            to 48 hours we review the actual scope, size the
                            work, and send back an honest fixed-price quote.
                          </p>
                        </div>
                      </div>
                      <div className="builtfor_list-item">
                        <div className="builtfor_icon-wrapper">
                          <div className="builtfor_item-lcon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#025a1d" strokeWidth="1.8" aria-hidden="true">
                              <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="builtfor_item-content">
                          <h3 className="heading-style-h6 text-size-medium">
                            Speed You Can Plan Around
                          </h3>
                          <p className="opacity-60">
                            The industry average for a first release is six
                            months. Prime Labs ships working software in 4 to 8
                            weeks, with a usable increment you can demo at the
                            end of every sprint.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="builtfor_line1" />
                <div className="builtfor_line2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid_overlay" aria-hidden="true">
        <div className="verticle_line" style={{ left: "45.6%", top: "7.5rem" }} />
        <div className="horizontal_line" style={{ top: "7.5rem" }} />
      </div>
      <div
        className="dot_grid pixelwhisk_bg-shap"
        style={{ "--cols": 14, left: 0, bottom: 0 } as React.CSSProperties}
        aria-hidden="true"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </section>
  );
}
