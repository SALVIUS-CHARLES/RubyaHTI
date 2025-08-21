import Image from 'next/image';

const Hero = ({ onGetStarted }) => {
  return (
    <section style={heroStyles}>
      {/* Background Image */}
      <div style={backgroundImageStyles}>
        <Image
          src="/images/hero-image.jpg"
          alt="RHTI Background"
          fill
          style={imageStyles}
          priority
        />
      </div>
      
      {/* Content */}
      <div style={contentOverlayStyles}>
        <div style={containerStyles}>
          <div style={contentStyles}>
            <h1 style={titleStyles}>
              Build Your Future in Health With RUBYA HEALTH TRAINING INSTITUTE
            </h1>
            <p style={subtitleStyles}>
              With over 62 years of excellence, Rubya Health Training Institute is dedicated to 
              shaping skilled health professionals through affordable education, quality facilities, 
              and hands-on training that serves communities across Tanzania.
            </p>
            
            {/* Get Started Button */}
            <button 
              onClick={onGetStarted}
              style={buttonStyles}
            >
              Get Started
            </button>

            {/* Apply Now Button */}
            <a 
              href="http://www.rhti.ac.tz" 
              target="_blank" 
              rel="noopener noreferrer"
              style={secondaryButtonStyles}
            >
              Apply Now
            </a>

            {/* Visible Website Link */}
            <p style={linkStyles}>
              Visit: <a href="http://www.rhti.ac.tz" target="_blank" rel="noopener noreferrer" style={visibleLinkStyles}>
                www.rhti.ac.tz
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal CSS styles
const heroStyles = {
  position: 'relative',
  height: 'calc(100vh - 80px)',
  width: '100%',
  overflow: 'hidden',
};

const backgroundImageStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
};

const imageStyles = {
  objectFit: 'cover',
  objectPosition: 'center',
};

const contentOverlayStyles = {
  position: 'relative',
  zIndex: 2,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const containerStyles = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
};

const contentStyles = {
  maxWidth: '700px',
  color: '#ffffff',
};

const titleStyles = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
  lineHeight: '1.3',
  textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
  marginTop: '2rem',
};

const subtitleStyles = {
  fontSize: '1.1rem',
  marginBottom: '2rem',
  textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
  lineHeight: '1.6',
};

const buttonStyles = {
  display: 'inline-block',
  backgroundColor: '#4a6cf7',
  color: 'white',
  textDecoration: 'none',
  padding: '1rem 2.5rem',
  borderRadius: '6px',
  fontSize: '1.2rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  marginRight: '1rem',
  marginBottom: '1rem',
  border: 'none',
};

const secondaryButtonStyles = {
  ...buttonStyles,
  backgroundColor: 'transparent',
  border: '2px solid #4a6cf7',
  color: '#4a6cf7',
};

const linkStyles = {
  fontSize: '1rem',
  color: '#ffffff',
  marginTop: '0.5rem',
};

const visibleLinkStyles = {
  color: '#ffdd57',
  fontWeight: '600',
  textDecoration: 'underline',
};

// Media queries will be handled via JavaScript
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  
  if (mediaQuery.matches) {
    heroStyles.height = 'calc(100vh - 70px)';
    containerStyles.padding = '0 1rem';
    contentStyles.textAlign = 'center';
    contentStyles.maxWidth = '100%';
    titleStyles.fontSize = '2rem';
    titleStyles.marginTop = '1rem';
    subtitleStyles.fontSize = '1rem';
    subtitleStyles.marginBottom = '1.5rem';
    buttonStyles.padding = '0.8rem 2rem';
    buttonStyles.fontSize = '1.1rem';
    secondaryButtonStyles.padding = '0.8rem 2rem';
    secondaryButtonStyles.fontSize = '1.1rem';
    linkStyles.fontSize = '0.9rem';
  }
  
  const smallMediaQuery = window.matchMedia('(max-width: 480px)');
  if (smallMediaQuery.matches) {
    titleStyles.fontSize = '1.8rem';
    subtitleStyles.fontSize = '0.95rem';
    buttonStyles.padding = '0.7rem 1.5rem';
    buttonStyles.fontSize = '1rem';
    buttonStyles.marginRight = '0.5rem';
    buttonStyles.marginBottom = '0.5rem';
    secondaryButtonStyles.padding = '0.7rem 1.5rem';
    secondaryButtonStyles.fontSize = '1rem';
  }
}

export default Hero;