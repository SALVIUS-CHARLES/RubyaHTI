import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = ({ setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <div style={logoContainerStyles}>
          <div onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>
            <Image 
              src="/images/logo.png" 
              alt="RHITI Logo" 
              width={120} 
              height={50}
              style={logoStyles}
            />
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          style={menuButtonStyles}
          aria-label="Toggle menu"
        >
          <span style={menuIconStyles}>{isMenuOpen ? '✕' : '☰'}</span>
        </button>
        
        <nav style={{
          ...navStyles,
          ...(isMenuOpen ? mobileNavOpenStyles : {})
        }}>
          <ul style={ulStyles}>
            <li style={liStyles}>
              <button 
                onClick={() => handleNavigation('features')} 
                style={navButtonStyles}
              >
                Features
              </button>
            </li>
            <li style={liStyles}>
              <button 
                onClick={() => handleNavigation('testimonials')} 
                style={navButtonStyles}
              >
                Testimonials
              </button>
            </li>
            <li style={liStyles}>
              <button 
                onClick={() => handleNavigation('contact')} 
                style={navButtonStyles}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Internal CSS styles
const headerStyles = {
  backgroundColor: '#ffffff',
  position: 'fixed',
  width: '100%',
  zIndex: 1000,
  top: 0,
};

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoContainerStyles = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyles = {
  objectFit: 'contain',
};

const menuButtonStyles = {
  display: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  padding: '0.5rem',
};

const menuIconStyles = {
  display: 'block',
};

const navStyles = {
  display: 'flex',
};

const mobileNavOpenStyles = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: '#ffffff',
  flexDirection: 'column',
  padding: '1rem',
  transform: 'translateY(0)',
  opacity: 1,
  visibility: 'visible',
};

const ulStyles = {
  display: 'flex',
  listStyle: 'none',
  gap: '1rem',
  margin: 0,
  padding: 0,
};

const liStyles = {
  fontSize: '1rem',
};

const navButtonStyles = {
  backgroundColor: 'transparent',
  border: 'none',
  color: '#333',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
};

// Media queries will be handled via JavaScript
if (typeof window !== 'undefined') {
  // This will only run on client side
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  
  if (mediaQuery.matches) {
    // Mobile styles
    containerStyles.padding = '1rem';
    logoStyles.width = '100px';
    logoStyles.height = '40px';
    menuButtonStyles.display = 'block';
    navStyles.position = 'absolute';
    navStyles.top = '100%';
    navStyles.left = 0;
    navStyles.right = 0;
    navStyles.backgroundColor = '#ffffff';
    navStyles.flexDirection = 'column';
    navStyles.padding = '1rem';
    navStyles.transform = 'translateY(-10px)';
    navStyles.opacity = 0;
    navStyles.visibility = 'hidden';
    navStyles.transition = 'all 0.3s ease';
    ulStyles.flexDirection = 'column';
    ulStyles.gap = '0.5rem';
    liStyles.width = '100%';
    navButtonStyles.width = '100%';
    navButtonStyles.textAlign = 'left';
    navButtonStyles.padding = '0.8rem 1rem';
  }
}

export default Header;