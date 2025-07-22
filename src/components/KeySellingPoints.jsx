import React from 'react';

const KeySellingPoints = () => {
  return (
    <div style={styles.container}>
      {/* First Selling Point */}
      <div style={styles.section}>
        <div style={styles.textBlock}>
          <h2>Fast & Reliable Service</h2>
          <p>
            At BrandLift, speed and reliability are not just features — they’re our foundation.
            We leverage cutting-edge infrastructure and the latest web technologies to ensure
            your digital presence is fast, secure, and scalable. Whether it’s a sleek website
            or a robust product platform, we deliver with precision, minimizing load times and
            maximizing uptime. With 24/7 availability and enterprise-grade performance, your
            business stays ahead — always accessible, always optimized.
          </p>
        </div>
        <div style={styles.imageBlock}>
          <img
            src="https://images.unsplash.com/photo-1690192053520-c44899a79fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Speed and Reliability"
            style={styles.image}
          />
        </div>
      </div>

      {/* Second Selling Point */}
      <div style={{ ...styles.section, flexDirection: 'row-reverse' }}>
        <div style={styles.textBlock}>
          <h2>User-Centric Design</h2>
          <p>
            Every element we create is rooted in empathy and intentionality — designed with
            the user at the core. From seamless navigation to visually captivating layouts,
            we craft intuitive interfaces that feel natural, not forced. Our approach blends
            aesthetics with functionality, ensuring your audience not only connects effortlessly
            but enjoys every interaction. The result? Memorable digital experiences that build
            trust, boost engagement, and keep your users coming back for more.
          </p>
        </div>
        <div style={styles.imageBlock}>
          <img
            src="https://images.unsplash.com/photo-1613759612065-d5971d32ca49?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Focused"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#fff',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '60px',
    flexWrap: 'wrap',
  },
  textBlock: {
    flex: '1',
    padding: '20px',
    minWidth: '280px',
  },
  imageBlock: {
    flex: '1',
    padding: '20px',
    minWidth: '280px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '500px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
};

export default KeySellingPoints;
