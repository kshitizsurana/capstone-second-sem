import React, { useState } from 'react';

const HeroSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <div style={styles.tagline}>
            <h1 style={styles.heading}>Empowering Ideas, Elevating Brands</h1>
            <p style={styles.subheading}>
              Explore our services, dive into expert insights on our blog, and uncover ideas crafted to inspire, inform, and elevate your brand.
            </p>
          </div>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              style={{ ...styles.input, height: '80px', resize: 'none' }}
              required
            />
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    height: '90vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1560073210-1eb8ea89d4cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    maxWidth: '1200px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  tagline: {
    flex: 1,
    marginRight: '40px',
    minWidth: '250px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '18px',
  },
  form: {
    flex: 1,
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    color: '#333',
  },
  input: {
    marginBottom: '12px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 15px',
    background: '#333',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '4px',
  },
};

export default HeroSection;
