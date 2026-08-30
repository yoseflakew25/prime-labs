export default function Hero() {
  return (
    <section className="section_hero">
      <div className="padding-global z-index-2">
        <div className="container-large">
          <div className="hero_padding">
            <div className="hero_center">
              <h1 className="hero_heading">
                <span className="hero_line">We Make Products</span>
                <span className="hero_line hero_line--accent">
                  <span className="hero_word-outline">That</span>{" "}
                  <span className="hero_word-accent">Just</span>{" "}
                  <span className="hero_word-accent">Work</span>
                  <span className="hero_dot">.</span>
                </span>
              </h1>
              <p className="hero_body">
                We build exceptional, scalable SaaS products and innovative tech solutions that empower businesses to thrive in the digital age.
              </p>
              <div className="hero_button-wrap">
                <a href="#start" className="button">
                  Start Your Project
                </a>
                <a href="#process" className="button is-secondary">
                  See How We Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_bg-grid" />
      <div className="grid_overlay" aria-hidden="true">
        <div className="verticle_line" />
        <div className="verticle_line is-right" />
        <div className="verticle_line" style={{ left: "50%" }} />
        <div className="horizontal_line" style={{ top: 0 }} />
        <div className="horizontal_line" style={{ bottom: 0 }} />
        <div className="hero_grid-box _1" />
        <div className="hero_grid-box _2" />
        <div className="hero_grid-box _3" />
        <div className="hero_grid-box _4" />
        <div className="hero_grid-box _5" />
        <div className="hero_grid-box _6" />
        <div className="hero_grid-box _7" />
        <div className="hero_grid-box _8" />
      </div>
    </section>
  );
}
