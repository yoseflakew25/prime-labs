"use client";

import { useState, useCallback } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    label: "Understanding your needs",
    ariaLabel: "Step 01, Discovery",
    description:
      "We begin by deeply understanding your business, challenges, and objectives through collaborative workshops and research.",
    image: "/assets/step-1.svg",
    alt: "Discovery phase illustration",
  },
  {
    num: "02",
    title: "Strategy",
    label: "Planning the solution",
    ariaLabel: "Step 02, Strategy",
    description:
      "We develop a comprehensive strategy and roadmap tailored to your specific requirements and business goals.",
    image: "/assets/step-2.svg",
    alt: "Strategy planning illustration",
  },
  {
    num: "03",
    title: "Development",
    label: "Building with precision",
    ariaLabel: "Step 03, Development",
    description:
      "Our expert team designs and develops your solution using agile methodologies, ensuring quality at every step.",
    image: "/assets/step-3.svg",
    alt: "Development phase illustration",
  },
  {
    num: "04",
    title: "Delivery & Growth",
    label: "Continuous improvement",
    ariaLabel: "Step 04, Delivery & Growth",
    description:
      "We deploy your solution and provide ongoing support, optimization, and enhancements to ensure long-term success.",
    image: "/assets/step-4.svg",
    alt: "Delivery and growth illustration",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  const handleInteraction = useCallback((index: number) => {
    setActive(index);
  }, []);

  return (
    <div className="section_talent-work" id="process">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="section_global-flex">
              <div className="max-width-large align-center">
                <div className="section_header align-center">
                  <div className="section_label border-primary-green">
                    <span className="text-color-primary-green">
                      Our Process
                    </span>
                  </div>
                  <div className="section_title-block align-center text-align-center">
                    <h2 className="heading-style-h4">
                      We follow a proven methodology to deliver exceptional results for every project.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="talent-work_tabs">
                <div className="talent-work_flex" id="stepTabs">
                  {steps.map((step, i) => (
                    <div
                      key={step.num}
                      className={`talent-work_link${active === i ? " is-active" : ""}`}
                      data-step={i + 1}
                      role="button"
                      tabIndex={0}
                      aria-label={step.ariaLabel}
                      onClick={() => handleInteraction(i)}
                      onMouseEnter={() => {
                        if (window.innerWidth > 991) handleInteraction(i);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleInteraction(i);
                        }
                      }}
                    >
                      <div className="talent-work_toggle">
                        <div className="talent-work_toggle-item">
                          <div className="talent-work_toggle-step">Step</div>
                          <h3 className="talent-work_heading">{step.num}</h3>
                        </div>
                      </div>
                      <div className="work_content">
                        <div className="work_info-content">
                          <h3 className="heading-style-h6 text-size-large">
                            {step.title}
                          </h3>
                          <p className="work_info-subtitle">{step.label}</p>
                          <p className="opacity-60">{step.description}</p>
                        </div>
                        <div className="work_video-block">
                          <img
                            src={step.image}
                            alt={step.alt}
                            className="work-video"
                            loading="lazy"
                            width={800}
                            height={520}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
