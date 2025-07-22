import React from 'react';

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.title}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/services" style={styles.link}>Services</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h4 style={styles.title}>Contact</h4>
          <p style={styles.text}>📞 +91-9876543210</p>
          <p style={styles.text}>✉️ support@yourcompany.com</p>
          <p><a href="/contact" style={styles.link}>Contact Form</a></p>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h4 style={styles.title}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>📘</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>🐦</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>💼</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>📸</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div style={styles.bottom}>
        <p style={styles.bottomText}>© 2025 Your Company Name. All rights reserved.</p>
=======
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-lg font-semibold">MyApp &copy; {new Date().getFullYear()}</div>
        <div className="flex space-x-6">
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/services" className="hover:text-blue-400 transition">Services</a>
          <a href="/blog" className="hover:text-blue-400 transition">Blog</a>
          <a href="/checkout" className="hover:text-blue-400 transition">Checkout</a>
        </div>
>>>>>>> f90fde9 (adding new files)
      </div>
    </footer>
  );
};

<<<<<<< HEAD
const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    paddingTop: '30px',
    fontSize: '14px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    flex: '1 1 200px',
    margin: '10px',
  },
  title: {
    fontSize: '16px',
    marginBottom: '10px',
    borderBottom: '1px solid #555',
    paddingBottom: '5px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: '#ddd',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '6px',
  },
  text: {
    margin: '6px 0',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
    fontSize: '22px',
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
  },
  bottom: {
    borderTop: '1px solid #444',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '20px',
  },
  bottomText: {
    color: '#aaa',
  },
};

=======
>>>>>>> f90fde9 (adding new files)
export default Footer;
