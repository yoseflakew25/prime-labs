export default function ProblemSection() {
  return (
    <section className="section_about-team">
      <div className="padding-global">
        <div className="container-large">
          <div className="section-padding-custom">
            <div className="section_global-flex">
              <div className="max-width-xmedium align-center">
                <div className="section_header align-center">
                  <div className="section_label border-fresh-green">
                    <span className="text-color-fresh-green">
                      The Software Delivery Problem
                    </span>
                  </div>
                  <div className="section_title-block align-center text-align-center">
                    <h2 className="heading-style-h4 text-color-white">
                      You Know Exactly What You Need to Build.
                      <br />
                      So Why Does It Take Nine Months to Ship?
                    </h2>
                    <p className="text-size-regular text-color-white">
                      Your roadmap has a date on it. But the gap between &quot;the
                      spec is approved&quot; and &quot;it is live&quot; keeps widening, because
                      finding a team that can actually deliver is a full-time
                      job of its own.
                    </p>
                  </div>
                </div>
              </div>
              <div className="developer_list-block">
                <div className="developer_list-item">
                  <div className="developer_item_image-block">
                    <img
                      src="/assets/problem-1.svg"
                      alt="Stacked applicant cards next to a question mark"
                      className="developer-video"
                      loading="lazy"
                      width={640}
                      height={400}
                    />
                  </div>
                  <div className="developer_item_box">
                    <h3 className="heading-style-h6 text-size-large">
                      The Hiring Lottery
                    </h3>
                    <p className="text-size-regular">
                      You post the role. You get 60 applications. You interview
                      six. Two accept, one starts, and none of them stay past
                      month three.
                    </p>
                  </div>
                </div>
                <div className="developer_list-item">
                  <div className="developer_item_image-block">
                    <img
                      src="/assets/problem-2.svg"
                      alt="Two disconnected interface panels with a broken link between them"
                      className="developer-video"
                      loading="lazy"
                      width={640}
                      height={400}
                    />
                  </div>
                  <div className="developer_item_box">
                    <h3 className="heading-style-h6 text-size-large">
                      The Handover Black Hole
                    </h3>
                    <p className="text-size-regular">
                      You hired people who are &quot;technical.&quot; They ship code
                      nobody else can read, leave no documentation, and every
                      change becomes a negotiation.
                    </p>
                  </div>
                </div>
                <div className="developer_list-item">
                  <div className="developer_item_image-block">
                    <img
                      src="/assets/problem-3.svg"
                      alt="A project timeline stretching across twelve weeks"
                      className="developer-video"
                      loading="lazy"
                      width={640}
                      height={400}
                    />
                  </div>
                  <div className="developer_item_box">
                    <h3 className="heading-style-h6 text-size-large">
                      The Agency Time Trap
                    </h3>
                    <p className="text-size-regular">
                      Agencies are dependable but slow and expensive. You do not
                      need a twelve week discovery phase to build the thing you
                      already understand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
