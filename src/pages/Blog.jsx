import React from 'react';
import BlogHeroSection from '../components/BlogHeroSection';

const blogPosts = [
  {
    title: 'Mastering React Hooks',
    description: 'A quick guide to understanding and using React Hooks effectively.',
    image: 'https://via.placeholder.com/400x200?text=React+Hooks',
    author: 'Jane Doe',
  },
  {
    title: 'Top 10 SEO Tips for 2025',
    description: 'Boost your website traffic with these proven SEO strategies.',
    image: 'https://via.placeholder.com/400x200?text=SEO+Tips',
    author: 'John Smith',
  },
  {
    title: 'Design Trends You Shouldn’t Miss',
    description: 'Explore the latest design trends that will shape the digital world.',
    image: 'https://via.placeholder.com/400x200?text=Design+Trends',
    author: 'Emily Johnson',
  },
];

const Blog = () => {
  const styles = {
    wrapper: {
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    carousel: {
      display: 'flex',
      overflowX: 'auto',
      gap: '20px',
      paddingBottom: '10px',
      scrollSnapType: 'x mandatory',
    },
    card: {
      minWidth: '300px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      scrollSnapAlign: 'start',
      flexShrink: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    content: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    desc: {
      flexGrow: 1,
      marginBottom: '10px',
      color: '#555',
    },
    author: {
      fontStyle: 'italic',
      color: '#777',
      fontSize: '0.9rem',
    },
    readMore: {
      marginTop: '10px',
      color: '#007bff',
      background: 'none',
      border: 'none',
      padding: 0,
      font: 'inherit',
      cursor: 'pointer',
      textDecoration: 'underline',
      alignSelf: 'flex-start',
    },
  };

  return (
    <>
      <BlogHeroSection />
      <section style={styles.wrapper}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Our Blog</h2>
        <div style={styles.carousel}>
          {blogPosts.map((post, index) => (
            <div key={index} style={styles.card}>
              <img src={post.image} alt={post.title} style={styles.image} />
              <div style={styles.content}>
                <h3 style={styles.title}>{post.title}</h3>
                <p style={styles.desc}>{post.description}</p>
                <p style={styles.author}>By {post.author}</p>
                <button
                  style={styles.readMore}
                  onClick={() => alert(`Coming soon: "${post.title}"`)}
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
