"use client";
import Image from "next/image";
import { useState } from "react";

const Header = ({ setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setCurrentSection(section);
    setIsMenuOpen(false); // close menu on navigation
  };

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        {/* Logo */}
        <div onClick={() => handleNavigation("home")} style={{ cursor: "pointer" }}>
          <Image
            src="/images/logo.png"
            alt="RHITI Logo"
            width={120}
            height={50}
            style={logoStyles}
          />
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={menuButtonStyles}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <nav style={{ ...navStyles, ...(isMenuOpen ? navMobileOpen : {}) }}>
          <ul style={ulStyles}>
            <li style={liStyles}>
              <button onClick={() => handleNavigation("features")} style={navButtonStyles}>
                Features
              </button>
            </li>
            <li style={liStyles}>
              <button onClick={() => handleNavigation("testimonials")} style={navButtonStyles}>
                Testimonials
              </button>
            </li>
            <li style={liStyles}>
              <button onClick={() => handleNavigation("contact")} style={navButtonStyles}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Dark overlay when menu open (mobile only) */}
      {isMenuOpen && <div style={overlayStyles} onClick={() => setIsMenuOpen(false)} />}
    </header>
  );
};

// ---------- Styles ----------
const headerStyles = {
  backgroundColor: "#fff",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const containerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const logoStyles = {
  objectFit: "contain",
};

const menuButtonStyles = {
  display: "none", // hidden on desktop
  background: "transparent",
  border: "none",
  fontSize: "1.8rem",
  cursor: "pointer",
};

// Desktop nav by default
const navStyles = {
  display: "flex",
};

// Mobile nav open
const navMobileOpen = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  background: "#fff",
  flexDirection: "column",
  padding: "1rem 2rem",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

const ulStyles = {
  display: "flex",
  listStyle: "none",
  gap: "1rem",
  margin: 0,
  padding: 0,
};

const liStyles = {
  fontSize: "1rem",
};

const navButtonStyles = {
  background: "transparent",
  border: "none",
  color: "#333",
  fontWeight: "500",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  fontSize: "1rem",
};

// Overlay when menu is open on mobile
const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 500,
};

// 🔹 Mobile responsiveness (CSS via media query in JS)
if (typeof window !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    @media (max-width: 768px) {
      nav {
        display: none;
      }
      button[aria-label="Toggle Menu"] {
        display: block;
      }
      nav.mobile-open {
        display: flex !important;
      }
      ul {
        flex-direction: column;
        gap: 0;
      }
      li {
        margin: 0.5rem 0;
      }
    }
  `;
  document.head.appendChild(styleTag);
}

export default Header;
