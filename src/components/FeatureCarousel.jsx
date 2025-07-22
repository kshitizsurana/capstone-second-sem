import React from 'react';

const items = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Modern and responsive website designs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#'
  },
  {
    id: 2,
    title: 'SEO Services',
    description: 'Optimize your site for search engines.',
    image: 'https://images.unsplash.com/photo-1684835609103-57dc56e07433?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Promote your brand across the web.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#'
  },
  {
    id: 4,
    title: 'E-Commerce Solutions',
    description: 'Sell your products online with ease.',
    image: 'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#'
  },
  {
    id: 5,
    title: 'Brand Identity',
    description: 'Make your brand unforgettable.',
    image: 'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#'
  }
];

const FeatureCarousel = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Featured Services</h2>
      <div style={styles.carousel}>
        {items.map(item => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.description}>{item.description}</p>
            <a href={item.link} style={styles.button}>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px'
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    paddingBottom: '10px',
  },
  card: {
    minWidth: '280px',
    maxWidth: '280px',
    marginRight: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '16px',
    flexShrink: 0,
    transition: 'transform 0.3s ease-in-out',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '6px'
  },
  title: {
    fontSize: '20px',
    margin: '12px 0 6px'
  },
  description: {
    fontSize: '14px',
    marginBottom: '10px',
    color: '#555'
  },
  button: {
    display: 'inline-block',
    padding: '8px 12px',
    backgroundColor: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '14px'
  }
};

export default FeatureCarousel;
