import React from 'react';

const Hero = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '70vh',
      backgroundImage: 'url("https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    textContent: {
      position: 'relative',
      color: 'white',
      padding: '0 50px',
      maxWidth: '600px',
      zIndex: 1,
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: '1.3',
    },
    subheading: {
      fontSize: '1.2rem',
      marginTop: '15px',
      color: '#ddd',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.textContent}>
        <h1 style={styles.heading}>Driven by People, Powered by Passion</h1>
        <p style={styles.subheading}>
          We’re committed to creating value through innovation, teamwork, and integrity.
        </p>
      </div>
    </div>
  );
};

export default Hero;
