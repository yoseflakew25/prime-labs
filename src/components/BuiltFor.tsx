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
        <div className="section_global-flex">
          <div className="padding-global">
            <div className="container-large">
              <div className="section_header align-center">
                <div className="section_label border-primary-green">
                  <span className="text-color-primary-green">Built For</span>
                </div>
                <div className="section_title-block align-center text-align-center">
                  <h2 className="heading-style-h4">
                    Prime Labs Works for Teams That Move Fast
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="builtfor_table">
            <div className="builtfor_padding">
              <div className="container-large">
                <div className="builtfor_list-wrap">
                  <div className="builtfor_list-item">
                    <div className="builtfor_icon-wrapper">
                      <div className="builtfor_item-lcon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#025a1d" strokeWidth="1.8" aria-hidden="true">
                          <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.8 5.5 21l2-7.5L2 9h7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="builtfor_item-content">
                      <h3 className="heading-style-h6 text-size-medium">
                        Startup Founders
                      </h3>
                      <p className="opacity-60">
                        You have the idea and the market. You need the product
                        live before the next raise. Prime Labs gets you to a
                        working release in weeks, not quarters.
                      </p>
                    </div>
                  </div>
                  <div className="builtfor_list-item">
                    <div className="builtfor_icon-wrapper">
                      <div className="builtfor_item-lcon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#025a1d" strokeWidth="1.8" aria-hidden="true">
                          <path d="M3 3h18v6H3zM3 15h18v6H3zM7 9v6" />
                        </svg>
                      </div>
                    </div>
                    <div className="builtfor_item-content">
                      <h3 className="heading-style-h6 text-size-medium">
                        Operations Leaders
                      </h3>
                      <p className="opacity-60">
                        Your team runs on spreadsheets and three tools that do
                        not talk to each other. We replace that with one system
                        your staff will actually use, and we train them on it.
                      </p>
                    </div>
                  </div>
                  <div className="builtfor_list-item">
                    <div className="builtfor_icon-wrapper">
                      <div className="builtfor_item-lcon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#025a1d" strokeWidth="1.8" aria-hidden="true">
                          <path d="M12 2l9 5v10l-9 5-9-5V7z" />
                          <path d="M12 12l9-5M12 12v10M12 12L3 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="builtfor_item-content">
                      <h3 className="heading-style-h6 text-size-medium">
                        Enterprise IT Teams
                      </h3>
                      <p className="opacity-60">
                        You have a backlog and a hiring freeze. Prime Labs
                        becomes an independent delivery lane: white-label ready,
                        security reviewed, and on your timeline.
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
  );
}
