<<<<<<< HEAD
import React from 'react';
=======
// import React from 'react';
>>>>>>> f90fde9 (adding new files)

const items = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Modern and responsive website designs.',
    image: 'https://source.unsplash.com/300x200/?webdesign',
<<<<<<< HEAD
    link: '#'
=======
>>>>>>> f90fde9 (adding new files)
  },
  {
    id: 2,
    title: 'SEO Services',
    description: 'Optimize your site for search engines.',
    image: 'https://source.unsplash.com/300x200/?seo',
<<<<<<< HEAD
    link: '#'
=======
>>>>>>> f90fde9 (adding new files)
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Promote your brand across the web.',
    image: 'https://source.unsplash.com/300x200/?marketing',
<<<<<<< HEAD
    link: '#'
=======
>>>>>>> f90fde9 (adding new files)
  },
  {
    id: 4,
    title: 'E-Commerce Solutions',
    description: 'Sell your products online with ease.',
    image: 'https://source.unsplash.com/300x200/?ecommerce',
<<<<<<< HEAD
    link: '#'
=======
>>>>>>> f90fde9 (adding new files)
  },
  {
    id: 5,
    title: 'Brand Identity',
    description: 'Make your brand unforgettable.',
    image: 'https://source.unsplash.com/300x200/?branding',
<<<<<<< HEAD
    link: '#'
=======
>>>>>>> f90fde9 (adding new files)
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
<<<<<<< HEAD
            <a href={item.link} style={styles.button}>Learn More</a>
=======
>>>>>>> f90fde9 (adding new files)
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
<<<<<<< HEAD
  },
  button: {
    display: 'inline-block',
    padding: '8px 12px',
    backgroundColor: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '14px'
=======
>>>>>>> f90fde9 (adding new files)
  }
};

export default FeatureCarousel;
