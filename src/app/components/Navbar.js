"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // check initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = ["features", "testimonials", "contact"];

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <div style={logoContainerStyles}>
          <Image
            src="/images/logo.png"
            alt="RHITI Logo"
            width={120}
            height={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <nav>
            <ul style={ulStyles}>
              {navLinks.map((link) => (
                <li key={link} style={liStyles}>
                  <a href={`#${link}`} style={navLinkStyles}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Hamburger button */}
        {isMobile && (
          <button onClick={toggleMenu} style={menuButtonStyles}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div style={mobileMenuStyles}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              style={mobileLinkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// --- Styles ---
const headerStyles = {
  backgroundColor: "#ffffff",
  position: "fixed",
  width: "100%",
  zIndex: 1000,
  top: 0,
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const containerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const logoContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const ulStyles = {
  display: "flex",
  listStyle: "none",
  gap: "1.5rem",
  margin: 0,
  padding: 0,
};

const liStyles = {
  fontSize: "1rem",
};

const navLinkStyles = {
  color: "#333",
  textDecoration: "none",
  fontWeight: 500,
  transition: "color 0.3s ease",
};

const menuButtonStyles = {
  backgroundColor: "transparent",
  border: "none",
  fontSize: "1.8rem",
  cursor: "pointer",
  zIndex: 1001,
};

const mobileMenuStyles = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  padding: "1rem 2rem",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  zIndex: 999,
};

const mobileLinkStyles = {
  padding: "0.8rem 0",
  borderBottom: "1px solid #e2e8f0",
  textDecoration: "none",
  color: "#333",
  fontWeight: 500,
};
