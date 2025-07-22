import React from 'react';

const BlogHeroSection = () => {
  const styles = {
    heroContainer: {
      position: 'relative',
      backgroundImage: `url('https://via.placeholder.com/1600x600?text=Blog+Background')`, 
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
