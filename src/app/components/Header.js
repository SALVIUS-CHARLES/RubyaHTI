import Link from 'next/link';
import Image from 'next/image';

const Header = ({ setCurrentSection }) => {
  const handleNavigation = (section) => {
    setCurrentSection(section);
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
        <nav style={navStyles}>
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
}; // Ensure it stays at top

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

const navStyles = {
  display: 'flex',
};

const ulStyles = {
  display: 'flex',
  listStyle: 'none',
  gap: '1rem',
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
  ':hover': {
    color: '#ffffff',
    backgroundColor: '#4a6cf7',
  },
};

export default Header;