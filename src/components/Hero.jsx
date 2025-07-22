import React from 'react';

const Hero = () => {
<<<<<<< HEAD
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '70vh',
      backgroundImage: 'url("https://source.unsplash.com/1600x900/?team,office")', // Replace with your image URL
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
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Translucent overlay
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
    '@media (maxWidth: 768px)': {
      heading: {
        fontSize: '2rem',
      },
      textContent: {
        padding: '0 20px',
      },
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
=======
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg">Welcome to MyApp</h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">Empowering your business with modern solutions and a beautiful, responsive web experience.</p>
      <a href="/services" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition">Get Started</a>
    </section>
>>>>>>> f90fde9 (adding new files)
  );
};

export default Hero;

