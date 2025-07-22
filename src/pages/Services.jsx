import React, { useState } from 'react';
import ServicesHeroSection from '../components/ServicesHeroSection';

const servicesData = [
  {
    title: 'Web Development',
    shortDesc: 'Responsive and scalable web solutions tailored to your business.',
    fullDesc: 'We craft fully responsive websites using modern technologies like React, Next.js, and Node.js. Our web apps are optimized for speed, security, and SEO.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '💻'
  },
  {
    title: 'UI/UX Design',
    shortDesc: 'User-friendly interfaces that delight and engage users.',
    fullDesc: 'Our design team focuses on user psychology to create interfaces that are both beautiful and functional. Tools used include Figma and Adobe XD.',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '🎨'
  },
  {
    title: 'SEO Optimization',
    shortDesc: 'Boost your online visibility and search engine ranking.',
    fullDesc: 'We conduct keyword research, audit your site structure, and implement on-page SEO strategies to increase organic traffic and conversions.',
    image: 'https://images.unsplash.com/photo-1709281847981-73a69aa6f770?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '🔍'
  },
  {
    title: 'E-Commerce Solutions',
    shortDesc: 'Powerful e-commerce platforms to drive online sales.',
    fullDesc: 'From cart design to payment gateway integration, we build reliable e-commerce solutions using Shopify, WooCommerce, and custom platforms.',
    image: 'https://images.unsplash.com/photo-1553499971-87f7a7e1b20a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '🛒'
  },
];

const faqs = [
  {
    question: "How do I purchase a product?",
    answer: "You can purchase products directly through our website by adding items to your cart and completing the checkout process.",
  },
  {
    question: "What is the duration of the service?",
    answer: "The duration varies by service, but most are offered on a monthly or project basis. You'll find details on each service page.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 14-day money-back guarantee on all eligible purchases. Please check our refund policy for details.",
  },
];

const Services = () => {
  const [selected, setSelected] = useState(servicesData[0]);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // CSS Styles
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
    serviceCard: {
      flex: '0 0 auto',
      width: '300px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      scrollSnapAlign: 'start',
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
      }
    },
    cardImage: {
      width: '100%',
      height: '180px',
      objectFit: 'cover'
    },
    cardContent: {
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
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    cardDesc: {
      fontSize: '15px',
      color: '#7f8c8d',
      marginBottom: '20px',
      lineHeight: '1.6'
    },
    selectedService: {
      display: 'flex',
      marginTop: '50px',
      flexWrap: 'wrap',
      gap: '40px',
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '40px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    selectedContent: {
      flex: '1 1 300px'
    },
    selectedTitle: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    selectedDesc: {
      fontSize: '16px',
      color: '#7f8c8d',
      lineHeight: '1.8'
    },
    selectedImage: {
      flex: '1 1 300px',
      maxWidth: '500px',
      borderRadius: '8px',
      objectFit: 'cover',
      alignSelf: 'center'
    },
    faqSection: {
      marginTop: '80px',
      paddingTop: '40px',
      borderTop: '1px solid #ecf0f1'
    },
    faqTitle: {
      textAlign: 'center',
      fontWeight: '700',
      marginBottom: '40px',
      fontSize: '32px',
      color: '#2c3e50'
    },
    faqItem: {
      borderBottom: '1px solid #ecf0f1',
      padding: '20px 0',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      '&:hover': {
        backgroundColor: '#f8f9fa'
      }
    },
    faqQuestion: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#2c3e50',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    faqAnswer: {
      marginTop: '15px',
      fontSize: '16px',
      color: '#7f8c8d',
      lineHeight: '1.6',
      paddingRight: '20px'
    }
  };

  return (
    <>
      <ServicesHeroSection />
      <section style={styles.wrapper}>
        <div style={styles.innerWrapper}>
          <h2 style={styles.title}>Our Services</h2>
          
          {/* Services Carousel */}
          <div style={styles.carousel}>
            {servicesData.map((service, index) => (
              <div
                key={index}
                style={{
                  ...styles.serviceCard,
                  border: selected.title === service.title ? '2px solid #3498db' : '2px solid transparent'
                }}
                onClick={() => setSelected(service)}
              >
                <img src={service.image} alt={service.title} style={styles.cardImage} />
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>
                    <span>{service.icon}</span>
                    {service.title}
                  </h3>
                  <p style={styles.cardDesc}>{service.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Service Detail */}
          <div style={styles.selectedService}>
            <div style={styles.selectedContent}>
              <h2 style={styles.selectedTitle}>
                <span>{selected.icon}</span>
                {selected.title}
              </h2>
              <p style={styles.selectedDesc}>{selected.fullDesc}</p>
            </div>
            <img 
              src={selected.image} 
              alt={selected.title} 
              style={{ 
                ...styles.selectedImage,
                height: '300px',
                width: '100%'
              }} 
            />
          </div>

          {/* FAQ Section */}
          <div style={styles.faqSection}>
            <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                style={styles.faqItem}
                onClick={() => toggleFAQ(index)}
              >
                <div style={styles.faqQuestion}>
                  {faq.question}
                  <span>{openFAQ === index ? '−' : '+'}</span>
                </div>
                {openFAQ === index && (
                  <div style={styles.faqAnswer}>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;