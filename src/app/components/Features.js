import Image from 'next/image';
import BackToHome from './BackToHome';

const Features = ({ onBackToHome }) => {
  const features = [
    {
      id: 1,
      title: "Academic Programs Offered",
      description: "RHTI offers Diploma courses in Diagnostic Radiography, Clinical Medicine, Nursing and Midwifery, Medical Laboratory Science, and Pharmaceutical Science.",
      image: "/images/programs.jpg"
    },
    {
      id: 2,
      title: "Affordable Services & Facilities",
      description: "The institute provides free hostel accommodation with beds, mattresses, and mosquito nets. Meals are available for students at the institute.",
      image: "/images/hero-image.jpg"
    },
    {
      id: 3,
      title: "Payment Options",
      description: "Tuition fees are affordable and flexible, allowing students to pay in four installments throughout the year, easing financial burden on families.",
      image: "/images/payment.jpg"
    },
    {
      id: 4,
      title: "Institutional Identity & Legacy",
      description: "Under Bukoba Catholic Diocese, RHTI has over 62 years of experience in health training (since 1963). It is located in Muleba District, Kagera Region, within Rubya Hospital premises.",
      image: "/images/legacy.png"
    },
    {
      id: 5,
      title: "Practical Learning with Technology",
      description: "Students gain hands-on experience using modern computer labs and digital tools to strengthen their skills and keep up with the latest healthcare innovations.",
      image: "/images/practice.jpg"
    },
    {
      id: 6,
      title: "Successful Graduations",
      description: "Year after year, RHTI graduates enter the healthcare workforce with confidence, equipped with knowledge and professionalism to serve communities across Tanzania.",
      image: "/images/graduation.jpg"
    }
  ];

  return (
    <div style={containerStyles}>
      <BackToHome onClick={onBackToHome} />
      <h2 style={titleStyles}>Our Amazing Features</h2>
      <p style={subtitleStyles}>DISCOVER WHAT MAKES RHTI STAND OUT FROM THE REST</p>
      
      <div style={featuresContainerStyles}>
        {features.map((feature) => (
          <div key={feature.id} style={featureCardStyles}>
            <div style={imageWrapperStyles}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={200}
                style={featureImageStyles}
              />
            </div>
            <h3 style={featureTitleStyles}>{feature.title}</h3>
            <p style={featureDescriptionStyles}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Internal CSS styles
const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '6rem 2rem',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#f8fbff',
};

const titleStyles = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#2d3748',
  textAlign: 'center',
  marginBottom: '1rem',
};

const subtitleStyles = {
  fontSize: '1.2rem',
  color: '#4a5568',
  textAlign: 'center',
  marginBottom: '3rem',
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const featuresContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
};

const featureCardStyles = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '2rem',
  boxShadow: '0 4px 15px rgba(74, 108, 247, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: '1px solid #e2e8f0',
};

const imageWrapperStyles = {
  borderRadius: '6px',
  overflow: 'hidden',
  marginBottom: '1.5rem',
};

const featureImageStyles = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

const featureTitleStyles = {
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '1rem',
};

const featureDescriptionStyles = {
  fontSize: '1rem',
  color: '#4a5568',
  lineHeight: '1.6',
};

export default Features;
