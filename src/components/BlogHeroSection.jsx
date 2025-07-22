import React from 'react';

const BlogHeroSection = () => {
  const styles = {
    heroContainer: {
      position: 'relative',
      backgroundImage: `url('https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
      padding: '0 20px',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
    textContainer: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
    },
    title: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    tagline: {
      fontSize: '1.2rem',
      fontWeight: '300',
    },
  };

  return (
    <section style={styles.heroContainer}>
      <div style={styles.overlay}></div>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Our Blog</h1>
        <p style={styles.tagline}>
          Explore the latest trends, insights, and stories from our experts.
        </p>
      </div>
    </section>
  );
};

export default BlogHeroSection;
