export default function Hero() {
  return (
    <section className="section_hero">
      <div className="padding-global z-index-2">
        <div className="container-large">
          <div className="hero_padding">
            <div className="hero_grid">
              <div className="hero_left-wrap">
                <div className="hero_left-top">
                  <span className="hero_badge">
                    <span className="dot" /> Custom Software &amp; SaaS Studio
                  </span>
                  <div className="hero_top-content">
                    <h1 className="heading-style-h2">
                      We Make Products That Just Work. Scoped in 48 Hours.
                      Shipped in Weeks.
                    </h1>
                    <p className="text-size-regular opacity-60">
                      No discovery theatre. No freelancer roulette. Prime Labs
                      builds production ready, scalable software with senior
                      engineers who have shipped it before. Send us your
                      requirements and we handle the rest.
                    </p>
                  </div>
                </div>
                <div className="hero_button-wrap">
                  <a href="#start" className="button">
                    Start Your Project
                  </a>
                  <a href="#process" className="button is-secondary">
                    See How We Work
                  </a>
                </div>
              </div>
              <div className="hero_right-wrap">
                <div
                  className="hero_visual"
                  role="img"
                  aria-label="Abstract illustration of a Prime Labs delivery dashboard"
                >
                  <div className="hero_visual-grid" />
                  <div className="hero_visual-inner">
                    <div className="hv_bar">
                      <span className="dots">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span>prime labs / delivery</span>
                    </div>
                    <div className="hv_body">
                      <div className="hv_panel">
                        <div className="hv_label">Release health</div>
                        <div className="hv_stat">98%</div>
                        <div className="hv_rows">
                          <div className="hv_row">
                            <span className="tick" /> Tests green
                          </div>
                          <div className="hv_row">
                            <span className="tick" /> Docs shipped
                          </div>
                          <div className="hv_row">
                            <span className="tick" /> On schedule
                          </div>
                        </div>
                      </div>
                      <div className="hv_panel">
                        <div className="hv_label">Sprint velocity</div>
                        <div className="hv_chart">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="hv_code">
                          <i className="w1" />
                          <i className="w2" />
                          <i className="w3" />
                          <i className="w4" />
                          <i className="w5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_bg-grid" />
      <div className="grid_overlay" aria-hidden="true">
        <div className="verticle_line" />
        <div className="verticle_line is-right" />
        <div className="hero_grid-box _1" />
        <div className="hero_grid-box _2" />
        <div className="hero_grid-box _3" />
        <div className="hero_grid-box _4" />
        <div className="hero_grid-box _6" />
        <div className="hero_grid-box is-top-rect" />
        <div className="horizontal_line" style={{ top: "12.9rem" }} />
        <div className="horizontal_line" style={{ top: "auto", bottom: "4rem" }} />
      </div>
    </section>
  );
}
