const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Studying at RHTI has been a life-changing experience. The programs are practical, well-structured, and truly prepare us for real healthcare challenges.",
      rating: 5
    },
    {
      id: 2,
      content: "The accommodation and meals provided by the institute make student life stress-free. It&apos;s easier to focus on studies knowing basic needs are taken care of.",
      rating: 4
    },
    {
      id: 3,
      content: "With over 60 years of legacy in health training, RHTI stands out as a trusted institution. I feel proud to be part of this community of excellence.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={titleStyles}>What Our Students Say</h2>
        <p style={subtitleStyles}>
          Real experiences from those who have studied at Rubya Health Training Institute.
        </p>
        
        <div style={testimonialsContainerStyles}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={testimonialCardStyles}>
              <div style={ratingStyles}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} style={starStyles}>★</span>
                ))}
              </div>
              <p style={contentStyles}>&quot;{testimonial.content}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal CSS styles
const sectionStyles = {
  padding: '6rem 2rem',
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
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

const testimonialsContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
};

const testimonialCardStyles = {
  backgroundColor: '#f8fbff',
  borderRadius: '8px',
  padding: '2rem',
  boxShadow: '0 4px 15px rgba(74, 108, 247, 0.1)',
  border: '1px solid #e2e8f0',
};

const ratingStyles = {
  marginBottom: '1rem',
};

const starStyles = {
  color: '#ffc107',
  fontSize: '1.3rem',
};

const contentStyles = {
  fontSize: '1.1rem',
  color: '#4a5568',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
  fontStyle: 'italic',
};

export default Testimonials;
