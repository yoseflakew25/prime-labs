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
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 7H6a4 4 0 00-4 4v6h8v-6H6a1 1 0 011-1h3zm12 0h-4a4 4 0 00-4 4v6h8v-6h-4a1 1 0 011-1h3z" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
    <div className="section_testimonials section_testimonials--lime">
      {/* geometric pattern background */}
      <div className="testimonials_bg-pattern" aria-hidden="true">
        <div className="grid_overlay">
          <div className="verticle_line" />
          <div className="verticle_line is-right" />
          <div className="verticle_line" style={{ left: "50%" }} />
          <div className="horizontal_line" style={{ top: 0 }} />
          <div className="horizontal_line" style={{ bottom: 0 }} />
          <div className="footer_geo-box _1" />
          <div className="footer_geo-box _2" />
          <div className="footer_geo-box _3" />
          <div className="footer_geo-box _4" />
        </div>
        <div className="dot_grid" style={{ "--cols": 14, right: 0, top: 0 } as React.CSSProperties}>
          {Array.from({ length: 42 }).map((_, i) => <span key={`t-${i}`} />)}
        </div>
        <div className="dot_grid" style={{ "--cols": 10, left: 0, bottom: 0 } as React.CSSProperties}>
          {Array.from({ length: 30 }).map((_, i) => <span key={`b-${i}`} />)}
        </div>
        <div className="dot_grid" style={{ "--cols": 8, left: "20%", top: "15%" } as React.CSSProperties}>
          {Array.from({ length: 24 }).map((_, i) => <span key={`m-${i}`} />)}
        </div>
        <svg className="testimonials_diags" viewBox="0 0 200 200" fill="none">
          <line x1="0" y1="200" x2="200" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="40" y1="200" x2="200" y2="40" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="200" x2="200" y2="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="160" x2="160" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="120" x2="120" y2="0" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="testimonials_bracket testimonials_bracket--tl" viewBox="0 0 60 60" fill="none">
          <path d="M0 20 L0 0 L20 0" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="testimonials_bracket testimonials_bracket--br" viewBox="0 0 60 60" fill="none">
          <path d="M60 40 L60 60 L40 60" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="testimonials_circles" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="testimonials_diamonds" viewBox="0 0 120 120" fill="none">
          <path d="M60 10 L110 60 L60 110 L10 60 Z" stroke="currentColor" strokeWidth="0.4" />
          <path d="M60 25 L95 60 L60 95 L25 60 Z" stroke="currentColor" strokeWidth="0.4" />
          <path d="M60 40 L80 60 L60 80 L40 60 Z" stroke="currentColor" strokeWidth="0.4" />
        </svg>
      </div>

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
                <div className="section_title-block align-center text-align-center">
                  <h2 className="heading-style-h4">
                    Trusted by Teams That Ship
                  </h2>
                </div>
              </div>
              <div className="testimonials_swiper">
                <div className="testimonials_track" style={{ transform: `translateX(-${clamped * (100 / pv)}%)` }}>
                  {testimonials.map((t, i) => (
                    <div className="testimonials_slide" key={i}>
                      <div className="testimonials_card">
                        <div className="testimonials_card-quote">
                          <QuoteSvg />
                        </div>
                        <p className="testimonials_card-text">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <div className="testimonials_card-author">
                          <div className="testimonials_card-avatar">{t.initials}</div>
                          <div className="testimonials_card-info">
                            <p className="testimonials_card-name">{t.name}</p>
                            <p className="testimonials_card-role">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="testimonials_nav">
                  <button className="testimonials_arrow" aria-label="Previous" onClick={prev}>
                    <ChevronLeft />
                  </button>
                  <div className="testimonials_dots">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        className={`testimonials_dot${i === clamped ? " is-active" : ""}`}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setIndex(i)}
                      />
                    ))}
                  </div>
                  <button className="testimonials_arrow" aria-label="Next" onClick={next}>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
