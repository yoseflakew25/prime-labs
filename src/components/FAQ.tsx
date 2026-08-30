"use client";

import { useState, useCallback, useRef } from "react";

const faqs = [
  {
    question: "How does Prime Labs work?",
    answer:
      "Send us your requirements and fill in a short intake form. Our team assesses the project (scope, data model, integrations, compliance) and sends a fixed-price quote within 24 to 48 hours. Once approved, we build it with our senior team and deliver a tested, documented release, typically in 4 to 8 weeks.",
  },
  {
    question: "What kind of software do you build?",
    answer:
      "Custom software for specific business problems, B2B SaaS products, internal platforms that replace spreadsheets, and AI workflows that sit on top of processes you already run. If it needs a database, users and uptime, it is in scope.",
  },
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Yes. We take over legacy systems regularly. We start with a short technical audit, tell you honestly what should be kept and what should be replaced, and then work in the codebase you already have.",
  },
  {
    question: "What is the minimum commitment?",
    answer:
      "One milestone. No retainers and no minimum beyond the piece of work you want built. Most clients start with a single scoped release and continue from there.",
  },
  {
    question: "Who owns the code and the infrastructure?",
    answer:
      "You do, from day one. Repositories, cloud accounts and credentials are yours. We work inside your accounts wherever possible, and hand over everything with written documentation at the end.",
  },
  {
    question: "What is your money-back guarantee?",
    answer:
      "If we miss an agreed delivery date, you are eligible for a full refund of that milestone. If the delivery does not meet the approved scope, we fix it free of charge until it does.",
  },
  {
    question: "Do you handle security and compliance?",
    answer:
      "Yes. Every delivery ships with role-based access, encrypted secrets, audit logging, dependency scanning and a documented backup plan. Security is part of the build, not an upsell.",
  },
  {
    question: "What about ongoing maintenance and support?",
    answer:
      "We offer optional monthly support retainers covering updates, monitoring and small changes. They are never required, and you can end them at any time without losing access to anything.",
  },
  {
    question: "Is my idea safe? Do you sign NDAs?",
    answer:
      "Yes. Our standard agreement includes mutual NDA terms. If your team requires a custom NDA, we sign it before any work begins and before you share anything sensitive.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section className="section_faq" id="faq">
      <div className="padding-section-medium">
        <div className="section_global-flex">
          <div className="padding-global">
            <div className="section_header align-center">
              <div className="section_label border-primary-green">
                <span className="text-color-primary-green">FAQ</span>
              </div>
              <div className="section_title-block align-center text-align-center">
                <h2 className="heading-style-h4">
                  Frequently asked questions.
                </h2>
              </div>
            </div>
          </div>
          <div className="faq_wrapper" id="faqWrapper">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  className={`faq_global${isOpen ? " is-open" : ""}`}
                  key={i}
                >
                  <div className="padding-global">
                    <div className="faq_global-max">
                      <div className="faq_collection">
                        <button
                          className="faq_item"
                          aria-expanded={isOpen}
                          onClick={() => toggle(i)}
                        >
                          <div className="faq_item-left">
                            <h3 className="text-size-medium">
                              {faq.question}
                            </h3>
                            <div
                              className="faq_answer-wrap"
                              ref={(el) => {
                                answerRefs.current[i] = el;
                              }}
                              style={{
                                maxHeight: isOpen
                                  ? `${(answerRefs.current[i]?.scrollHeight || 0) + 32}px`
                                  : undefined,
                              }}
                            >
                              <div className="faq_answer">
                                <p className="text-size-regular">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="faq_item-right">
                            <div className="faq_button-line" />
                            <div className="faq_button-line-vr" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
