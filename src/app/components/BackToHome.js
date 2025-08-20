const BackToHome = ({ onClick }) => {
    return (
      <button 
        onClick={onClick}
        style={buttonStyles}
      >
        ← Back to Home
      </button>
    );
  };
  
  // Internal CSS styles
  const buttonStyles = {
    position: 'fixed',
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
  
  export default BackToHome;