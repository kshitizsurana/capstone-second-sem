import React from 'react';

const Hero = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '70vh',
      backgroundImage: 'url("https://source.unsplash.com/1600x900/?team,office")',
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
