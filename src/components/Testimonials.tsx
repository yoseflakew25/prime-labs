"use client";

import { useState, useCallback, useEffect } from "react";

const testimonials = [
  {
    quote:
      "The Prime Labs team was a genuine thought partner, not a vendor. They pushed back where it mattered and shipped the first release two weeks early.",
    initials: "DF",
    name: "Daniel Fikru",
    role: "Sante Health, Co-Founder",
  },
  {
    quote:
      "They did not just build the platform, they built an admin side our team could run without calling anyone. That alone paid for the project.",
    initials: "NH",
    name: "Nicole Hailu",
    role: "Radiant Fitness, Operations Director",
  },
  {
    quote:
      "Best delivery team I have worked with in fifteen years. Weekly demos, no surprises, and documentation we still use today.",
    initials: "PZ",
    name: "Peter Zawadi",
    role: "Aksum Logistics, Head of Technology",
  },
  {
    quote:
      "We were out of our depth on the integration work. Prime Labs scoped it in two days and delivered it in three weeks, under the quote.",
    initials: "BM",
    name: "Brook Mengistu",
    role: "Helix Payments, CTO",
  },
  {
    quote:
      "As soon as we saw how thorough they were on the first milestone, we knew we would keep coming back. We are on our fourth project.",
    initials: "SA",
    name: "Sara Abebe",
    role: "Meridian College, Registrar",
  },
  {
    quote:
      "Prime Labs understood our operation before writing a line of code. The AI workflow they built cut our manual review time by two thirds.",
    initials: "MG",
    name: "Michael Girma",
    role: "Orbit Retail, Head of Operations",
  },
];

function QuoteSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="#021207" aria-hidden="true">
      <path d="M10 7H6a4 4 0 00-4 4v6h8v-6H6a1 1 0 011-1h3zm12 0h-4a4 4 0 00-4 4v6h8v-6h-4a1 1 0 011-1h3z" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#021207" strokeWidth="2" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#021207" strokeWidth="2" aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const perView = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 991) return 2;
    return 3;
  }, []);

  const [pv, setPv] = useState(3);

  useEffect(() => {
    const update = () => setPv(perView());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perView]);

  const max = Math.max(0, testimonials.length - pv);
  const clamped = Math.min(index, max);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setIndex((i) => Math.min(max, i + 1)),
    [max]
  );

  return (
    <div className="section_customer-stories">
      <div className="padding-global z-index-2">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="section_global-flex">
              <div className="section_header align-center">
                <div className="section_label border-primary-green">
                  <span className="text-color-primary-green">
                    Our Customer Stories
                  </span>
                </div>
                <div className="section_title-block">
                  <h2 className="heading-style-h4">
                    Trusted by Teams That Ship
                  </h2>
                </div>
              </div>
              <div className="customer-storie_swiper">
                <div className="swiper">
                  <div
                    className="swiper-wrapper"
                    style={{
                      transform: `translateX(-${clamped * (100 / pv)}%)`,
                    }}
                  >
                    {testimonials.map((t, i) => (
                      <div className="swiper-slide" key={i}>
                        <div className="customer-slide">
                          <div className="quote_image">
                            <QuoteSvg />
                          </div>
                          <div className="slide_contant">
                            <p className="text-size-medium text-style-italic">
                              {t.quote}
                            </p>
                          </div>
                          <div className="customer_info">
                            <div className="costomer_image">{t.initials}</div>
                            <div className="customer_info-content">
                              <p className="customer_title">{t.name}</p>
                              <p className="text-size-small opacity-60">
                                {t.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="swiper-arrow-wrap">
                  <button
                    className="swiper-arrow"
                    id="testPrev"
                    aria-label="Previous testimonial"
                    onClick={prev}
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    className="swiper-arrow"
                    id="testNext"
                    aria-label="Next testimonial"
                    onClick={next}
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid_overlay" aria-hidden="true">
        <div className="horizontal_line" style={{ top: "6.4rem" }} />
        <div className="horizontal_line" style={{ top: "13.3rem" }} />
        <div
          className="horizontal_line"
          style={{ top: "auto", bottom: "10.3rem" }}
        />
        <div
          className="horizontal_line"
          style={{ top: "auto", bottom: "5rem" }}
        />
      </div>
    </div>
  );
}
