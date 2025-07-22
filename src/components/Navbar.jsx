import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
const Navbar = ({ setPage, currentPage }) => {
=======
const Navbar = ({ setPage, currentPage, cartCount = 0 }) => {
>>>>>>> f90fde9 (adding new files)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

<<<<<<< HEAD
=======
  const safeSetPage = (page) => {
    if (typeof setPage === 'function') {
      setPage(page);
      setMenuOpen(false); // close menu on navigation
    } else {
      console.warn('setPage is not a function');
    }
  };

>>>>>>> f90fde9 (adding new files)
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 25px',
    backgroundColor: '#333',
    color: '#fff',
    flexWrap: 'wrap',
    position: 'relative',
  };

  const logoStyle = {
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const linkStyle = (page) => ({
    margin: '10px',
    cursor: 'pointer',
    color: currentPage === page ? '#00bfff' : '#fff',
    borderBottom: currentPage === page ? '2px solid #00bfff' : 'none',
<<<<<<< HEAD
=======
    position: 'relative',
>>>>>>> f90fde9 (adding new files)
  });

  const navLinksStyle = {
    display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    width: isMobile ? '100%' : 'auto',
    backgroundColor: isMobile ? '#444' : 'transparent',
    padding: isMobile ? '10px' : 0,
  };

  const authStyle = {
    display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    marginTop: isMobile ? '10px' : 0,
  };

  const hamburgerStyle = {
    display: isMobile ? 'flex' : 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  const barStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '4px 0',
  };

<<<<<<< HEAD
  // Add safeguard fallback in case setPage is not passed
  const safeSetPage = (page) => {
    if (typeof setPage === 'function') {
      setPage(page);
    } else {
      console.warn('setPage is not a function');
    }
=======
  const badgeStyle = {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    padding: '2px 6px',
    position: 'absolute',
    top: '-8px',
    right: '-10px',
>>>>>>> f90fde9 (adding new files)
  };

  return (
    <div style={navStyle}>
      <div style={logoStyle} onClick={() => safeSetPage('home')}>
<<<<<<< HEAD
        MyLogo
=======
        MyShop
>>>>>>> f90fde9 (adding new files)
      </div>

      <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
        <div style={barStyle} />
        <div style={barStyle} />
        <div style={barStyle} />
      </div>

      <div style={navLinksStyle}>
        <span style={linkStyle('home')} onClick={() => safeSetPage('home')}>Home</span>
        <span style={linkStyle('about')} onClick={() => safeSetPage('about')}>About</span>
        <span style={linkStyle('services')} onClick={() => safeSetPage('services')}>Services</span>
        <span style={linkStyle('blog')} onClick={() => safeSetPage('blog')}>Blog</span>
<<<<<<< HEAD
      </div>

      <div style={authStyle}>
        <button style={{ margin: '5px', cursor: 'pointer' }}>Login</button>
        <button style={{ margin: '5px', cursor: 'pointer' }}>Signup</button>
=======
        <span style={linkStyle('products')} onClick={() => safeSetPage('products')}>Products</span>
        <span style={{ ...linkStyle('cart'), position: 'relative' }} onClick={() => safeSetPage('cart')}>
          Cart
          {cartCount > 0 && <span style={badgeStyle}>{cartCount}</span>}
        </span>
      </div>

      <div style={authStyle}>
        <button style={{ margin: '5px', cursor: 'pointer' }} onClick={() => safeSetPage('login')}>Login</button>
        <button style={{ margin: '5px', cursor: 'pointer' }} onClick={() => safeSetPage('signup')}>Signup</button>
>>>>>>> f90fde9 (adding new files)
      </div>
    </div>
  );
};

export default Navbar;
