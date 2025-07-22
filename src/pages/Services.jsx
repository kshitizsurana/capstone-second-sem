import React, { useState } from 'react';
import ServicesHeroSection from '../components/ServicesHeroSection';

const servicesData = [
  {
    title: 'Web Development',
    shortDesc: 'Responsive and scalable web solutions tailored to your business.',
    fullDesc: 'We craft fully responsive websites using modern technologies like React, Next.js, and Node.js. Our web apps are optimized for speed, security, and SEO.',
    image: 'https://via.placeholder.com/400x250?text=Web+Development',
  },
  {
    title: 'UI/UX Design',
    shortDesc: 'User-friendly interfaces that delight and engage users.',
    fullDesc: 'Our design team focuses on user psychology to create interfaces that are both beautiful and functional. Tools used include Figma and Adobe XD.',
    image: 'https://via.placeholder.com/400x250?text=UI+UX+Design',
  },
  {
    title: 'SEO Optimization',
    shortDesc: 'Boost your online visibility and search engine ranking.',
    fullDesc: 'We conduct keyword research, audit your site structure, and implement on-page SEO strategies to increase organic traffic and conversions.',
    image: 'https://via.placeholder.com/400x250?text=SEO+Optimization',
  },
  {
    title: 'E-Commerce Solutions',
    shortDesc: 'Powerful e-commerce platforms to drive online sales.',
    fullDesc: 'From cart design to payment gateway integration, we build reliable e-commerce solutions using Shopify, WooCommerce, and custom platforms.',
    image: 'https://via.placeholder.com/400x250?text=E-Commerce+Solutions',
  },
];

const faqs = [
  {
    question: "How do I purchase a product?",
    answer: "You can purchase products directly through our website by adding items to your cart and completing the checkout process.",
  },
  {
    question: "What is the duration of the service?",
    answer: "The duration varies by service, but most are offered on a monthly or project basis. You’ll find details on each service page.",
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

  const styles = {
    section: {
      padding: '40px 20px',
      maxWidth: '1200px',
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
      minWidth: '250px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      cursor: 'pointer',
      scrollSnapAlign: 'start',
      transition: 'transform 0.3s',
      flexShrink: 0,
    },
    cardImage: {
      width: '100%',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    },
    cardContent: {
      padding: '15px',
      textAlign: 'left',
    },
    selectedDetail: {
      display: 'flex',
      marginTop: '40px',
      flexWrap: 'wrap',
      gap: '30px',
    },
    detailText: {
      flex: '1 1 300px',
    },
    detailImage: {
      flex: '1 1 300px',
      maxWidth: '400px',
    },
    faqSection: {
      marginTop: '60px',
      padding: '20px',
      borderTop: '1px solid #eee',
    },
    faqHeading: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#333',
    },
    faqItem: {
      borderBottom: '1px solid #ccc',
      padding: '15px 0',
      cursor: 'pointer',
    },
    faqQuestion: {
      fontSize: '18px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    faqAnswer: {
      marginTop: '10px',
      fontSize: '16px',
      color: '#555',
      lineHeight: '1.5',
    },
  };

  return (
    <>
      <ServicesHeroSection />
      <section style={styles.section}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>What We Offer</h2>
        <div style={styles.carousel}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => setSelected(service)}
            >
              <img src={service.image} alt={service.title} style={styles.cardImage} />
              <div style={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Section */}
        <div style={styles.selectedDetail}>
          <div style={styles.detailText}>
            <h2>{selected.title}</h2>
            <p>{selected.fullDesc}</p>
          </div>
          <img src={selected.image} alt={selected.title} style={styles.detailImage} />
        </div>

        {/* FAQ Section */}
        <div style={styles.faqSection}>
          <h2 style={styles.faqHeading}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem} onClick={() => toggleFAQ(index)}>
              <div style={styles.faqQuestion}>
                {faq.question}
                <span>{openFAQ === index ? '-' : '+'}</span>
              </div>
              {openFAQ === index && <div style={styles.faqAnswer}>{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
