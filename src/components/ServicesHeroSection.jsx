import React from 'react';

const ServicesHeroSection = () => {
  const styles = {
    heroContainer: {
      position: 'relative',
      backgroundImage: `url('https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1600&q=80')`, // Replace with a relevant image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '65vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 5%',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    },
    textContainer: {
      position: 'relative',
      zIndex: 2,
      color: '#fff',
      maxWidth: '600px',
    },
    tagline: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      lineHeight: '1.3',
    },
  };

  return (
    <section style={styles.heroContainer}>
      <div style={styles.overlay}></div>
      <div style={styles.textContainer}>
        <h1 style={styles.tagline}>Services Designed for Your Success</h1>
<<<<<<< HEAD
=======
        <h2>Strategic Services. Superior Outcomes.</h2>
>>>>>>> f90fde9 (adding new files)
      </div>
    </section>
  );
};

export default ServicesHeroSection;
