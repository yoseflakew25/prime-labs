"use client";

import { useState, useCallback } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((o) => !o), []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.currentTarget.closest("#navMenu")) {
        setOpen(false);
      }
    },
    []
  );

  return (
    <div className="component_navbar">
      <div className="padding-global">
        <div className="container-large">
          <div className="navbar_flex">
            <a href="#top" className="navbar_logo" aria-label="Prime Labs home">
              <svg className="logo_mark" viewBox="0 0 64 64" aria-hidden="true">
                <rect width="64" height="64" fill="#021207" />
                <rect x="12" y="12" width="18" height="18" fill="#24cb71" />
                <rect x="34" y="12" width="18" height="18" fill="#d6fa7e" />
                <rect x="12" y="34" width="18" height="18" fill="#d6fa7e" />
                <rect x="34" y="34" width="18" height="18" fill="#24cb71" />
              </svg>
              <span className="logo_word">Prime Labs</span>
            </a>
            <nav
              className={`navbar_menu${open ? " is-open" : ""}`}
              id="navMenu"
            >
              <div className="navbar_menu-flex">
                <a
                  href="#services"
                  className="navbar_menu-link"
                  onClick={handleNavClick}
                >
                  Services
                </a>
                <a
                  href="#work"
                  className="navbar_menu-link"
                  onClick={handleNavClick}
                >
                  Our Work
                </a>
                <a
                  href="#process"
                  className="navbar_menu-link"
                  onClick={handleNavClick}
                >
                  How It Works
                </a>
                <a
                  href="#faq"
                  className="navbar_menu-link"
                  onClick={handleNavClick}
                >
                  FAQ
                </a>
              </div>
              <div className="nav_menu_button-mobile">
                <a href="#start" className="button" onClick={handleNavClick}>
                  Start Your Project
                </a>
                <a
                  href="#process"
                  className="button is-secondary"
                  onClick={handleNavClick}
                >
                  See How We Work
                </a>
              </div>
            </nav>
            <div className="navbar_button">
              <a href="#start" className="button nav-button">
                Start Your Project
              </a>
            </div>
            <button
              className="navbar_menu-btn"
              id="navToggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="navMenu"
              onClick={toggle}
            >
              <span className="navbar_men-btn-wrap">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
