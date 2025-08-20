import Image from 'next/image';

const Hero = () => {
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
            
            {/* Apply Now Button */}
            <a 
              href="http://www.rhti.ac.tz" 
              target="_blank" 
              rel="noopener noreferrer"
              style={buttonStyles}
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
  height: 'calc(100vh - 120px)', // Adjust based on header/footer height
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
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly darker for better text visibility
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
  fontSize: '2.5rem',     // reduced from 3.5rem
  fontWeight: '700',
  marginBottom: '1rem',
  lineHeight: '1.3',
  textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
  marginTop: '2rem',      // extra spacing from top so header doesn't overlap
};

const subtitleStyles = {
  fontSize: '1.1rem',     // reduced from 1.3rem
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
  marginBottom: '1rem',
};

buttonStyles[':hover'] = {
  backgroundColor: '#3a5bd9',
  transform: 'translateY(-3px)',
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

export default Hero;
