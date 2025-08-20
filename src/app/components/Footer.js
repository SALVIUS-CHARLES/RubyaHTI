import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={logoColumnStyles}>
          <Image 
            src="/images/logo.png" 
            alt="RHITI Logo" 
            width={50} 
            height={50}
            style={logoStyles}
          />
          <p style={descriptionStyles}>
            RHTI is committed to train competent health workers in line with Gospel values who 
            will promote Physical, psychological, social and welfare of health people throughout 
            adequate and modern teaching learning facilities.
          </p>
          <div style={socialIconsStyles}>
            <a href="#" style={socialIconLinkStyles}>
              <span style={socialIconStyles}>📱</span>
            </a>
            <a href="#" style={socialIconLinkStyles}>
              <span style={socialIconStyles}>📘</span>
            </a>
            <a href="#" style={socialIconLinkStyles}>
              <span style={socialIconStyles}>📸</span>
            </a>
            <a href="#" style={socialIconLinkStyles}>
              <span style={socialIconStyles}>🔗</span>
            </a>
          </div>
        </div>
        
        <div style={linksColumnStyles}>
          <h3 style={columnTitleStyles}>Quick Links</h3>
          <ul style={linksListStyles}>
            <li style={linkItemStyles}><Link href="#features" style={linkStyles}>Features</Link></li>
            <li style={linkItemStyles}><Link href="#testimonials" style={linkStyles}>Testimonials</Link></li>
            <li style={linkItemStyles}><Link href="#contact" style={linkStyles}>Contact</Link></li>
          </ul>
        </div>
        
        <div style={contactColumnStyles}>
          <h3 style={columnTitleStyles}>Contact Us</h3>
          <ul style={contactListStyles}>
            <li style={contactItemStyles}>
              <span style={contactIconStyles}>📍</span>
              <span>RUBYA HEALTH TRAINING INSTITUTE, P.O.BOX 133, RUBYA-BUKOBA. TANZANIA</span>
            </li>
            <li style={contactItemStyles}>
              <span style={contactIconStyles}>📞</span>
              <span>0754 513 656 or 0766 209 213 or 0766 135 315</span>
            </li>
            <li style={contactItemStyles}>
              <span style={contactIconStyles}>✉️</span>
              <span>rubyahti@gmail.com</span>
            </li>
            {/* WhatsApp contact */}
            <li style={contactItemStyles}>
              <a 
                href="https://wa.me/255766135315?text=Hello!%20I%20want%20to%20know%20more%20about%20RHTI"
                target="_blank"
                rel="noopener noreferrer"
                style={whatsappLinkStyles}
              >
                <Image 
                  src="/images/whatsap.jpg" 
                  alt="WhatsApp" 
                  width={30} 
                  height={30} 
                  style={{ borderRadius: '50%' }}
                />
                &nbsp; Chat with us on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div style={copyrightStyles}>
        <p>© {currentYear} RHTI. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Internal CSS styles
const footerStyles = {
  backgroundColor: '#2d3748',
  color: '#ffffff',
  padding: '2rem',
  zIndex: 100,
  position: 'relative',
};

const containerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '3rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoColumnStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const logoStyles = {
  marginBottom: '1.5rem',
};

const descriptionStyles = {
  fontSize: '0.9rem',
  lineHeight: '1.6',
  color: '#a0aec0',
  marginBottom: '1.5rem',
};

const socialIconsStyles = {
  display: 'flex',
  gap: '1rem',
};

const socialIconLinkStyles = {
  color: '#a0aec0',
  transition: 'color 0.3s ease',
};

const socialIconStyles = {
  fontSize: '1.2rem',
};

const linksColumnStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const columnTitleStyles = {
  fontSize: '1.2rem',
  fontWeight: '600',
  marginBottom: '1.5rem',
};

const linksListStyles = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
};

const linkItemStyles = {
  fontSize: '0.9rem',
};

const linkStyles = {
  color: '#a0aec0',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const contactColumnStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const contactListStyles = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const contactItemStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.9rem',
  color: '#a0aec0',
  lineHeight: '1.6',
};

const contactIconStyles = {
  marginTop: '0.2rem',
};

const whatsappLinkStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  color: '#25D366',
  fontWeight: 'bold',
};

const copyrightStyles = {
  textAlign: 'center',
  padding: '1.5rem 0',
  marginTop: '3rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  fontSize: '0.9rem',
  color: '#a0aec0',
};

export default Footer;
