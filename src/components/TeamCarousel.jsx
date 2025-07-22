import React from 'react';

const teamMembers = [
  {
    name: 'Ayesha Khan',
    role: 'Chief Executive Officer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'With 15 years of leadership in tech, Ayesha drives innovation and strategy across teams.',
  },
  {
    name: 'Rohan Mehta',
    role: 'Lead Developer',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
    bio: 'Rohan specializes in full-stack development and system architecture.',
  },
  {
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Priya creates intuitive designs that enhance user experience and engagement.',
  },
  {
    name: 'Arjun Das',
    role: 'Marketing Manager',
    photo: 'https://randomuser.me/api/portraits/men/67.jpg',
    bio: 'Arjun leads marketing campaigns and manages brand communication globally.',
  },
];

const TeamCarousel = () => {
  const styles = {
    section: {
      padding: '60px 20px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '30px',
      color: '#222',
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
      flex: '0 0 auto',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      textAlign: 'center',
      padding: '20px',
      scrollSnapAlign: 'start',
    },
    photo: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '15px',
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      margin: '10px 0 5px',
    },
    role: {
      fontSize: '0.95rem',
      color: '#777',
      marginBottom: '10px',
    },
    bio: {
      fontSize: '0.9rem',
      color: '#555',
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Meet the Team</h2>
      <div style={styles.carousel}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.card}>
            <img src={member.photo} alt={member.name} style={styles.photo} />
            <div style={styles.name}>{member.name}</div>
            <div style={styles.role}>{member.role}</div>
            <p style={styles.bio}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamCarousel;
