import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section_about" id="about">
      <div className="container-large">
        <div className="about_flex">
          <div className="about_left">
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
          </div>
          <div className="about_right">
            <div className="about_image-wrapper">
              <Image
                src="/assets/about-image.svg"
                alt="Prime Labs team and workflow"
                fill
                className="about_image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid_overlay" aria-hidden="true">
        <div className="verticle_line" style={{ left: "45.6%", top: 0 }} />
        <div className="horizontal_line" style={{ top: "50%" }} />
      </div>
    </section>
  );
}
