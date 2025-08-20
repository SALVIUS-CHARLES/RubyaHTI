"use client";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ onBackToHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS with your credentials
      emailjs.init("IVN_sI3Jkr_RljICU");

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        to_email: "salvius220@gmail.com",
        reply_to: formData.email,
        subject: `New Contact Form Submission from ${formData.name}`
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        "service_e96vc7f",
        "template_fgwwue4",
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={containerStyles}>
      <button 
        onClick={onBackToHome}
        style={backButtonStyles}
      >
        ← Back to Home
      </button>
      
      <div style={contentStyles}>
        <h2 style={titleStyles}>Get In Touch/Wasiliana nasi</h2>
        <p style={subtitleStyles}>
          Have questions? Reach out to us and our institution will get back to you promptly./
          Una maswali? Wasiliana nasi na taasisi yetu itakujibu kwa haraka.
        </p>
        
        {/* Success Message */}
        {submitStatus === 'success' && (
          <div style={successMessageStyles}>
            <span style={messageIconStyles}>✅</span>
            Thank you for your message! We'll get back to you within 24 hours./
            Asante kwa maoni, tutakujibu haraka ndani ya masaa 24.
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div style={errorMessageStyles}>
            <span style={messageIconStyles}>❌</span>
            Sorry, there was an error sending your message. Please try again or email us directly./
            Samahani kuna kosa wakati wa kutuma maoni yako. Tafadhali jaribu tena baadaye au tumia namba ya simu au emaili 
            kwa msaada.
          </div>
        )}

        <form onSubmit={handleSubmit} style={formStyles}>
          <div style={formGroupStyles}>
            <label htmlFor="name" style={labelStyles}>Your Name/Jina lako</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              style={inputStyles}
              placeholder="Enter your name/Weka jina lako"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div style={formGroupStyles}>
            <label htmlFor="email" style={labelStyles}>Email Address/Barua pepe</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyles}
              placeholder="Enter your email/Weka barua pepe yako"
              required
              disabled={isSubmitting}
            />
          </div>

          <div style={formGroupStyles}>
            <label htmlFor="phone" style={labelStyles}>Phone Number/Namba ya Simu</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleInputChange}
              style={inputStyles}
              placeholder="Enter your phone number/Weka namba yako ya simu"
              disabled={isSubmitting}
            />
          </div>
          
          <div style={formGroupStyles}>
            <label htmlFor="message" style={labelStyles}>Your Message/Ujumbe wako</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleInputChange}
              rows="5" 
              style={textareaStyles}
              placeholder="How can we help you?/Unahitaji msaada gani?"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            style={{
              ...submitButtonStyles,
              ...(isSubmitting && disabledButtonStyles)
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending.../Inatuma...' : 'Send Message/Tuma Ujumbe'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Internal CSS styles
const containerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '6rem 2rem 4rem',
  minHeight: '100vh',
  backgroundColor: '#f8fbff',
  position: 'relative',
};

const backButtonStyles = {
  position: 'absolute',
  top: '80px',
  left: '20px',
  backgroundColor: '#4a6cf7',
  color: 'white',
  border: 'none',
  padding: '0.6rem 1rem',
  borderRadius: '4px',
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer',
  zIndex: 100,
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  ':hover': {
    backgroundColor: '#3a5bd9',
    transform: 'translateY(-2px)',
  },
};

const contentStyles = {
  textAlign: 'center',
};

const titleStyles = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#2d3748',
  marginBottom: '1rem',
};

const subtitleStyles = {
  fontSize: '1.2rem',
  color: '#4a5568',
  marginBottom: '2rem',
  lineHeight: '1.6',
};

// Message Styles
const messageBaseStyles = {
  padding: '1rem',
  borderRadius: '6px',
  marginBottom: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  fontSize: '1rem',
  lineHeight: '1.5',
};

const successMessageStyles = {
  ...messageBaseStyles,
  backgroundColor: '#d1fae5',
  color: '#065f46',
  border: '1px solid #a7f3d0',
};

const errorMessageStyles = {
  ...messageBaseStyles,
  backgroundColor: '#fee2e2',
  color: '#b91c1c',
  border: '1px solid #fecaca',
};

const messageIconStyles = {
  fontSize: '1.2rem',
};

// Form Styles
const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem',
};

const formGroupStyles = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
};

const labelStyles = {
  fontSize: '1.1rem',
  fontWeight: '500',
  color: '#4a5568',
  marginBottom: '0.5rem',
};

const inputStyles = {
  padding: '1rem',
  border: '1px solid #e2e8f0',
  borderRadius: '6px',
  fontSize: '1rem',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  ':focus': {
    borderColor: '#4a6cf7',
    outline: 'none',
    boxShadow: '0 0 0 3px rgba(74, 108, 247, 0.2)',
  },
  ':disabled': {
    backgroundColor: '#f7fafc',
    cursor: 'not-allowed',
  },
};

const textareaStyles = {
  ...inputStyles,
  resize: 'vertical',
  minHeight: '150px',
};

const submitButtonStyles = {
  backgroundColor: '#4a6cf7',
  color: 'white',
  border: 'none',
  padding: '1rem 1.5rem',
  borderRadius: '6px',
  fontSize: '1.1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  ':hover': {
    backgroundColor: '#3a5bd9',
    transform: 'translateY(-2px)',
  },
};

const disabledButtonStyles = {
  backgroundColor: '#a0aec0',
  cursor: 'not-allowed',
  ':hover': {
    backgroundColor: '#a0aec0',
    transform: 'none',
  },
};

export default ContactForm;