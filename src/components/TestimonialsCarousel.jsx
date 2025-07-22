import React from 'react';

const testimonials = [
  {
    name: 'Aarav Mehta',
    review: 'Absolutely wonderful service. I’m impressed by the professionalism and quality!',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Riya Sharma',
    review: 'Quick, efficient, and user-friendly. Highly recommend this to anyone starting out!',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Karan Desai',
    review: 'The team is always ready to help. Amazing experience overall!',
    photo: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    name: 'Neha Patil',
    review: 'Loved the design and ease of use. It has helped grow my small business!',
    photo: 'https://randomuser.me/api/portraits/women/67.jpg',
  },
  {
    name: 'Jane Doe',
    text: 'This service transformed our business! Highly recommended.',
    company: 'Acme Corp',
  },
  {
    name: 'John Smith',
    text: 'Professional, reliable, and innovative. A pleasure to work with.',
    company: 'Beta LLC',
  },
  {
    name: 'Alice Johnson',
    text: 'Exceeded our expectations in every way.',
    company: 'Gamma Inc',
  },
];

const TestimonialsCarousel = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>What Our Customers Say</h2>
      <div style={styles.carousel}>
        {testimonials.map((t, index) => (
          <div key={index} style={styles.card}>
            {t.photo && <img src={t.photo} alt={t.name} style={styles.photo} />}
            <p style={styles.review}>
              “{t.review || t.text}”
            </p>
            <h4 style={styles.name}>— {t.name}</h4>
            {t.company && <p style={styles.company}>{t.company}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.8em',
    color: '#333',
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    gap: '20px',
    padding: '10px',
    scrollSnapType: 'x mandatory',
  },
  card: {
    flex: '0 0 auto',
    width: '300px',
    minHeight: '220px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
    scrollSnapAlign: 'start',
    textAlign: 'center',
  },
  photo: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  review: {
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '10px',
  },
  name: {
    color: '#222',
    fontWeight: 'bold',
  },
  company: {
    fontSize: '14px',
    color: '#888',
    marginTop: '4px',
  },
};

export default TestimonialsCarousel;
