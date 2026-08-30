"use client";

import { useState, useCallback } from "react";

const cards = [
  {
    tag: "Education",
    image: "/assets/work-1.svg",
    alt: "School management platform interface",
    title: "School management platform for 12,000 students",
    large: true,
  },
  {
    tag: "Fitness",
    image: "/assets/work-2.svg",
    alt: "Membership and access control dashboard",
    title: "Gym membership and access control suite",
    large: false,
  },
  {
    tag: "Fintech",
    image: "/assets/work-3.svg",
    alt: "Crowdfunding campaign dashboard with payout reporting",
    title: "Crowdfunding platform with escrow payouts",
    large: false,
  },
];

export default function FeaturedWork() {
  const [order, setOrder] = useState([0, 1, 2]);

  const rotate = useCallback((forward: boolean) => {
    setOrder((prev) => {
      const next = [...prev];
      if (forward) {
        next.push(next.shift()!);
      } else {
        next.unshift(next.pop()!);
      }
      return next;
    });
  }, []);

  return (
    <section className="featured-section" id="work">
      <div className="padding-global">
        <div className="container-large">
          <div className="featured-grid">
            <div className="intro">
              <div className="project_title-block">
                <div className="section_header align-left">
                  <div className="section_label border-light-lime">
                    <span className="text-color-light-lime">Our Work</span>
                  </div>
                  <div className="section_title-block">
                    <h2 className="heading-style-h4 text-color-white">
                      Featured builds
                    </h2>
                    <p className="text-size-regular text-color-white opacity-60">
                      Every system is shaped around the way our clients actually
                      work, not around a template.
                    </p>
                  </div>
                </div>
                <a href="#start" className="button">
                  Start a similar build
                </a>
              </div>
            </div>
            <div className={`card-slot ${cards[order[0]].large ? "card-tall" : ""}`}>
              <article className="card">
                <div className="card-image-wrap">
                  <span className="card-tag">{cards[order[0]].tag}</span>
                  <img
                    src={cards[order[0]].image}
                    alt={cards[order[0]].alt}
                    className="card-image"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="card-footer">
                  <p className={`card-title ${cards[order[0]].large ? "card-title-lg" : ""}`}>
                    {cards[order[0]].title}
                  </p>
                </div>
              </article>
            </div>
            <div className={`card-slot ${cards[order[1]].large ? "card-tall" : ""}`}>
              <article className="card">
                <div className="card-image-wrap">
                  <span className="card-tag">{cards[order[1]].tag}</span>
                  <img
                    src={cards[order[1]].image}
                    alt={cards[order[1]].alt}
                    className="card-image"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="card-footer">
                  <p className={`card-title ${cards[order[1]].large ? "card-title-lg" : ""}`}>
                    {cards[order[1]].title}
                  </p>
                </div>
              </article>
            </div>
            <div className="controls-stat">
              <div className="nav-buttons">
                <button
                  className="nav-btn"
                  id="workPrev"
                  aria-label="Previous project"
                  onClick={() => rotate(false)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#021207" strokeWidth="2" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button
                  className="nav-btn"
                  id="workNext"
                  aria-label="Next project"
                  onClick={() => rotate(true)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#021207" strokeWidth="2" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="project-rate">
                <h3 className="rate-title">120+</h3>
                <div>
                  Releases
                  <br />
                  Shipped
                </div>
              </div>
            </div>
            <div className={`card-slot ${cards[order[2]].large ? "card-tall" : ""}`}>
              <article className="card">
                <div className="card-image-wrap">
                  <span className="card-tag">{cards[order[2]].tag}</span>
                  <img
                    src={cards[order[2]].image}
                    alt={cards[order[2]].alt}
                    className="card-image"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="card-footer">
                  <p className={`card-title ${cards[order[2]].large ? "card-title-lg" : ""}`}>
                    {cards[order[2]].title}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
