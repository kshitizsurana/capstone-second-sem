// import React from 'react';
// import BlogHeroSection from '../components/BlogHeroSection';

// const blogPosts = [
//   {
//     title: 'Mastering React Hooks',
//     description: 'A quick guide to understanding and using React Hooks effectively.',
//     image: 'https://via.placeholder.com/400x200?text=React+Hooks',
//     author: 'Jane Doe',
//   },
//   {
//     title: 'Top 10 SEO Tips for 2025',
//     description: 'Boost your website traffic with these proven SEO strategies.',
//     image: 'https://via.placeholder.com/400x200?text=SEO+Tips',
//     author: 'John Smith',
//   },
//   {
//     title: 'Design Trends You Shouldn’t Miss',
//     description: 'Explore the latest design trends that will shape the digital world.',
//     image: 'https://via.placeholder.com/400x200?text=Design+Trends',
//     author: 'Emily Johnson',
//   },
// ];

// const Blog = () => {
//   const styles = {
//     wrapper: {
//       padding: '40px 20px',
//       maxWidth: '1000px',
//       margin: '0 auto',
//     },
//     carousel: {
//       display: 'flex',
//       overflowX: 'auto',
//       gap: '20px',
//       paddingBottom: '10px',
//       scrollSnapType: 'x mandatory',
//     },
//     card: {
//       minWidth: '300px',
//       background: '#fff',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//       borderRadius: '8px',
//       scrollSnapAlign: 'start',
//       flexShrink: 0,
//       overflow: 'hidden',
//       display: 'flex',
//       flexDirection: 'column',
//       transition: 'transform 0.3s',
//     },
//     image: {
//       width: '100%',
//       height: '200px',
//       objectFit: 'cover',
//     },
//     content: {
//       padding: '16px',
//       display: 'flex',
//       flexDirection: 'column',
//       flex: 1,
//     },
//     title: {
//       fontSize: '1.25rem',
//       fontWeight: 'bold',
//       marginBottom: '10px',
//     },
//     desc: {
//       flexGrow: 1,
//       marginBottom: '10px',
//       color: '#555',
//     },
//     author: {
//       fontStyle: 'italic',
//       color: '#777',
//       fontSize: '0.9rem',
//     },
//     readMore: {
//       marginTop: '10px',
//       color: '#007bff',
//       background: 'none',
//       border: 'none',
//       padding: 0,
//       font: 'inherit',
//       cursor: 'pointer',
//       textDecoration: 'underline',
//       alignSelf: 'flex-start',
//     },
//   };

//   return (
//     <>
//       <BlogHeroSection />
//       <section style={styles.wrapper}>
//         <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Explore Our Blog</h2>
//         <div style={styles.carousel}>
//           {blogPosts.map((post, index) => (
//             <div key={index} style={styles.card}>
//               <img src={post.image} alt={post.title} style={styles.image} />
//               <div style={styles.content}>
//                 <h3 style={styles.title}>{post.title}</h3>
//                 <p style={styles.desc}>{post.description}</p>
//                 <p style={styles.author}>By {post.author}</p>
//                 <button
//                   style={styles.readMore}
//                   onClick={() => alert(`Coming soon: "${post.title}"`)}
//                 >
//                   Read More →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;


import React from 'react';
import BlogHeroSection from '../components/BlogHeroSection';

const blogPosts = [
  {
    title: 'Mastering React Hooks',
    description: 'A quick guide to understanding and using React Hooks effectively.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Jane Doe',
    date: 'May 15, 2025'
  },
  {
    title: 'Top 10 SEO Tips for 2025',
    description: 'Boost your website traffic with these proven SEO strategies.',
    image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'John Smith',
    date: 'June 2, 2025'
  },
  {
    title: 'Design Trends You Shouldn’t Miss',
    description: 'Explore the latest design trends that will shape the digital world.',
    image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Emily Johnson',
    date: 'June 18, 2025'
  },
];

const Blog = () => {
  const styles = {
    wrapper: {
      padding: '60px 20px',
      backgroundColor: '#f8f9fa',
      overflowX: 'hidden',
      width: '100%'
    },
    innerWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    title: {
      textAlign: 'center',
      fontWeight: '700',
      marginBottom: '40px',
      fontSize: '32px',
      color: '#2c3e50',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    carousel: {
      display: 'flex',
      gap: '30px',
      padding: '20px 0',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      minHeight: '400px'
    },
    card: {
      flex: '0 0 auto',
      width: '350px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      scrollSnapAlign: 'start',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
      }
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    content: {
      padding: '25px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '15px',
      lineHeight: '1.4'
    },
    description: {
      fontSize: '15px',
      color: '#7f8c8d',
      marginBottom: '20px',
      lineHeight: '1.6',
      flexGrow: 1
    },
    meta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto'
    },
    author: {
      fontSize: '14px',
      color: '#3498db',
      fontWeight: '600'
    },
    date: {
      fontSize: '13px',
      color: '#95a5a6'
    },
    readMore: {
      marginTop: '20px',
      color: 'white',
      backgroundColor: '#3498db',
      border: 'none',
      borderRadius: '6px',
      padding: '12px 20px',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      alignSelf: 'flex-start',
      '&:hover': {
        backgroundColor: '#2980b9'
      }
    }
  };

  return (
    <>
      <BlogHeroSection />
      <section style={styles.wrapper}>
        <div style={styles.innerWrapper}>
          <h2 style={styles.title}>Latest Articles</h2>
          <div style={styles.carousel}>
            {blogPosts.map((post, index) => (
              <article key={index} style={styles.card}>
                <img src={post.image} alt={post.title} style={styles.image} />
                <div style={styles.content}>
                  <h3 style={styles.cardTitle}>{post.title}</h3>
                  <p style={styles.description}>{post.description}</p>
                  <div style={styles.meta}>
                    <span style={styles.author}>By {post.author}</span>
                    <span style={styles.date}>{post.date}</span>
                  </div>
                  <button
                    style={styles.readMore}
                    onClick={() => alert(`Coming soon: "${post.title}"`)}
                  >
                    Read Article
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;