"use client";

import { useState, useCallback } from "react";

const steps = [
  {
    num: "01",
    label: "Share Your Requirements",
    ariaLabel: "Step 01, Share Your Requirements",
    description:
      "Send a brief, a spec, or even a rough idea, then fill in a short intake form: scope, integrations, timeline, and the constraints that matter. An NDA is part of our standard terms.",
    image: "/assets/step-1.svg",
    alt: "Upload panel for project requirements",
  },
  {
    num: "02",
    label: "We Scope and Architect (24 to 48 Hours)",
    ariaLabel: "Step 02, We Scope and Architect",
    description:
      "Our team reviews the requirements for complexity, data model, integrations and compliance needs. We choose the right approach, size the team, and prepare your quote.",
    image: "/assets/step-2.svg",
    alt: "Requirements being turned into a technical plan",
  },
  {
    num: "03",
    label: "Transparent Quote and Timeline",
    ariaLabel: "Step 03, Transparent Quote and Timeline",
    description:
      "You receive a clear fixed-price estimate for your scope and a delivery schedule you can share with your board. No hourly billing. No surprises halfway through.",
    image: "/assets/step-3.svg",
    alt: "A fixed price quote document",
  },
  {
    num: "04",
    label: "Build, Test and Hand Over",
    ariaLabel: "Step 04, Build, Test and Hand Over",
    description:
      "We build in two week sprints with demos you can actually see, automated tests, and written documentation. You own the code and the infrastructure from day one.",
    image: "/assets/step-4.svg",
    alt: "A delivery dashboard with passing tests",
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
                      How It Works
                    </span>
                  </div>
                  <div className="section_title-block align-center text-align-center">
                    <h2 className="heading-style-h4">
                      Here is how you go from requirement to running software.
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
                            {step.label}
                          </h3>
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
              <div className="button_group">
                <a href="#start" className="button">
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
