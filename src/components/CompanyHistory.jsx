import React from 'react';

const CompanyHistory = () => {
  const styles = {
    section: {
      padding: '60px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.2rem',
      marginBottom: '20px',
      fontWeight: 'bold',
      color: '#333',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.7',
      color: '#555',
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Our History</h2>
      <p style={styles.paragraph}>
        Founded in 2015 in Bengaluru, our company started with a small but passionate team focused on delivering quality software solutions.
        In 2017, we launched our flagship product which gained nationwide adoption. Over the years, we expanded into international markets,
        doubled our team size, and added a wide range of services to meet client demands. Today, we stand as a trusted name in innovation,
        backed by a culture of excellence and collaboration.
      </p>
    </section>
  );
};

export default CompanyHistory;
