export default function Timeline() {
  return (
    <section className="section_timeline">
      <div className="padding-global">
        <div className="container-large">
          <div className="max-width-large align-center">
            <div className="section_header align-center">
              <div className="section_label border-primary-green">
                <span className="text-color-primary-green">Start Here</span>
              </div>
              <div className="section_title-block align-center text-align-center">
                <h2 className="heading-style-h4">
                  Your Requirements Are the Brief.
                </h2>
                <p className="text-size-regular">
                  No thirty minute discovery calls. No &quot;tell us about your
                  vision&quot; forms. Share what you actually need and you get a
                  real answer: who builds it, what it costs, and when it ships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="webflow_image-block-desktop">
        <div className="timeline_component">
          <div className="timeline_row-label is-r1">Review</div>
          <div className="timeline_card is-review">
            <div className="timeline_card-head">
              <h3 className="timeline_card-title">Requirements Review</h3>
              <div className="timeline_card-hours">0-12 Hours</div>
            </div>
            <p className="timeline_card-text">
              Our team reads your brief and assesses scope, data model,
              integrations, compliance needs, and any technical risk hiding in
              the details.
            </p>
          </div>
          <div className="timeline_row-label is-r2">Planning</div>
          <div className="timeline_card is-planning">
            <div className="timeline_card-head">
              <h3 className="timeline_card-title">
                Scoping &amp; Architecture
              </h3>
              <div className="timeline_card-hours">12-24 Hours</div>
            </div>
            <p className="timeline_card-text">
              Based on the review we choose the architecture, size the team,
              plan the sprint schedule, and prepare the quote.
            </p>
          </div>
          <div className="timeline_row-label is-r3">Quotation</div>
          <div className="timeline_card is-quote">
            <div className="timeline_card-head">
              <h3 className="timeline_card-title">Quote Delivered</h3>
              <div className="timeline_card-hours">24-48 Hours</div>
            </div>
            <p className="timeline_card-text">
              You receive a fixed-price estimate and a delivery timeline, before
              you commit a single dollar.
            </p>
          </div>
          <div className="timeline_row-label is-axis">Hours</div>
          <div className="timeline_axis-item" style={{ gridColumnStart: 3 }}>6</div>
          <div className="timeline_axis-item" style={{ gridColumnStart: 4 }}>12</div>
          <div className="timeline_axis-item" style={{ gridColumnStart: 5 }}>18</div>
          <div className="timeline_axis-item" style={{ gridColumnStart: 6 }}>24</div>
          <div className="timeline_axis-item" style={{ gridColumnStart: 7 }}>30</div>
          <div className="timeline_axis-item" style={{ gridColumnStart: 8 }}>36</div>
          <div className="timeline_axis-item" style={{ gridColumnStart: 9 }}>42</div>
          <div className="timeline_axis-item" style={{ gridColumnStart: 10 }}>48</div>
          {/* Row 1 cells */}
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 1, gridColumnStart: 2 }} />
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 1, gridColumnStart: 5 }} />
          <div className="timeline_cell" style={{ gridRowStart: 1, gridColumnStart: 6 }} />
          <div className="timeline_cell" style={{ gridRowStart: 1, gridColumnStart: 7 }} />
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 1, gridColumnStart: 8 }} />
          <div className="timeline_cell" style={{ gridRowStart: 1, gridColumnStart: 9 }} />
          <div className="timeline_cell" style={{ gridRowStart: 1, gridColumnStart: 10 }} />
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 1, gridColumnStart: 11 }} />
          {/* Row 2 cells */}
          <div className="timeline_cell" style={{ gridRowStart: 2, gridColumnStart: 2 }} />
          <div className="timeline_cell" style={{ gridRowStart: 2, gridColumnStart: 3 }} />
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 2, gridColumnStart: 4 }} />
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 2, gridColumnStart: 7 }} />
          <div className="timeline_cell" style={{ gridRowStart: 2, gridColumnStart: 8 }} />
          <div className="timeline_cell" style={{ gridRowStart: 2, gridColumnStart: 9 }} />
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 2, gridColumnStart: 10 }} />
          <div className="timeline_cell" style={{ gridRowStart: 2, gridColumnStart: 11 }} />
          {/* Row 3 cells */}
          <div className="timeline_cell" style={{ gridRowStart: 3, gridColumnStart: 2 }} />
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 3, gridColumnStart: 3 }} />
          <div className="timeline_cell" style={{ gridRowStart: 3, gridColumnStart: 4 }} />
          <div className="timeline_cell" style={{ gridRowStart: 3, gridColumnStart: 5 }} />
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 3, gridColumnStart: 6 }} />
          <div className="timeline_cell" style={{ gridRowStart: 3, gridColumnStart: 11 }} />
          {/* Row 4 cells */}
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 4, gridColumnStart: 2 }} />
          <div className="timeline_cell is-bg-green01" style={{ gridRowStart: 4, gridColumnStart: 11 }} />
        </div>
        <div className="webflow_lottie-wrapper">
          <div className="lottie_track">
            <div className="webflow_lottie">
              Discovery<span>&#9679;</span>Architecture<span>&#9679;</span>Sprint 01<span>&#9679;</span>QA<span>&#9679;</span>Launch<span>&#9679;</span>Handover<span>&#9679;</span>
            </div>
            <div className="webflow_lottie">
              Discovery<span>&#9679;</span>Architecture<span>&#9679;</span>Sprint 01<span>&#9679;</span>QA<span>&#9679;</span>Launch<span>&#9679;</span>Handover<span>&#9679;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
