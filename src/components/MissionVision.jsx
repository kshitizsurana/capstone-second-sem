import React from 'react';

const MissionVision = () => {
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '60px auto',
      padding: '0 20px',
      textAlign: 'center',
    },
    section: {
      marginBottom: '50px',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#222',
    },
    text: {
      fontSize: '1.1rem',
      lineHeight: '1.7',
      color: '#555',
    },
    divider: {
      height: '1px',
      width: '60%',
      backgroundColor: '#ccc',
      margin: '40px auto',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to simplify digital transformation for businesses by providing reliable, scalable, and user-centric technology solutions that solve real-world problems.
        </p>
      </div>

      <div style={styles.divider}></div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Our Vision</h2>
        <p style={styles.text}>
          We envision becoming a global leader in tech innovation, empowering millions of organizations to thrive through smart, ethical, and sustainable digital solutions.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
