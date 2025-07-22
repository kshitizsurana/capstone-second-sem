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
<<<<<<< HEAD
    title: 'Design Trends You Shouldnt Miss',
=======
    title: 'Design Trends You Shouldn’t Miss',
>>>>>>> f90fde9 (adding new files)
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
    post: {
      background: '#f9f9f9',
      marginBottom: '30px',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '20px',
      gap: '20px',
    },
    image: {
      width: '200px',
      height: 'auto',
      borderRadius: '6px',
      flexShrink: 0,
    },
    content: {
      flex: 1,
      textAlign: 'left',
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    desc: {
      marginBottom: '10px',
    },
    author: {
      fontStyle: 'italic',
      color: '#555',
    },
    readMore: {
      marginTop: '10px',
      display: 'inline-block',
      color: '#007bff',
<<<<<<< HEAD
      textDecoration: 'none',
=======
      background: 'none',
      border: 'none',
      padding: 0,
      font: 'inherit',
      cursor: 'pointer',
      textDecoration: 'underline',
>>>>>>> f90fde9 (adding new files)
    },
    carousel: {
      display: 'flex',
      overflowX: 'auto',
      gap: '20px',
      paddingBottom: '10px',
      scrollSnapType: 'x mandatory',
    },
    card: {
      minWidth: '250px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      cursor: 'pointer',
      scrollSnapAlign: 'start',
      transition: 'transform 0.3s',
      flexShrink: 0,
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
<<<<<<< HEAD
                <a href=" " style={styles.readMore}>Read More →</a>
=======
                <button
                  style={styles.readMore}
                  onClick={() => alert('Read more coming soon!')}
                >
                  Read More →
                </button>
>>>>>>> f90fde9 (adding new files)
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
