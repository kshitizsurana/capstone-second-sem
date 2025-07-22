import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './components/Firebase';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
import FeatureCarousel from './components/FeatureCarousel';
import KeySellingPoints from './components/KeySellingPoints';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';

import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';

const products = [
  { id: 1, name: 'Web Development', image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 19.99, description: 'Custom websites built for performance and scalability.' },
  { id: 2, name: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 29.99, description: 'Designing seamless digital experiences for users.' },
  { id: 3, name: 'SEO Optimization', image: 'https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 39.99, description: 'Improve search rankings and visibility.' },
  { id: 4, name: 'E-Commerce Solutions', image: 'https://images.unsplash.com/photo-1726064855870-9a438a9517bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 49.99, description: 'Launch and manage online stores easily.' },
  { id: 5, name: 'Brand Identity', image: 'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 59.99, description: 'Create a lasting brand impression.' },
  { id: 6, name: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1602343457704-131bcf6e21b2?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 69.99, description: 'Grow your audience through online strategies.' },
];

const services = [
  { id: 101, title: 'SEO Services', description: 'Rank higher in search engines.', image: 'https://source.unsplash.com/300x200/?seo' },
  { id: 102, title: 'Digital Marketing', description: 'Drive traffic and conversions.', image: 'https://source.unsplash.com/300x200/?marketing' },
  { id: 103, title: 'E-Commerce Solutions', description: 'Boost your online store.', image: 'https://source.unsplash.com/300x200/?ecommerce' },
  { id: 104, title: 'Brand Identity', description: 'Build a unique brand voice.', image: 'https://source.unsplash.com/300x200/?branding' },
];

const blogPosts = [
  { id: 201, title: 'Top 10 Web Trends 2025', description: 'Discover the latest trends in web design.', image: 'https://source.unsplash.com/300x200/?blog,design' },
  { id: 202, title: 'How SEO Can Save Your Business', description: 'Learn why SEO is critical today.', image: 'https://source.unsplash.com/300x200/?blog,seo' },
];

const App = () => {
  const [page, setPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsub();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();

    const matchedProducts = products.filter(p =>
      p.name.toLowerCase().includes(lowerQuery) || p.description.toLowerCase().includes(lowerQuery)
    );

    const matchedServices = services.filter(s =>
      s.title.toLowerCase().includes(lowerQuery) || s.description.toLowerCase().includes(lowerQuery)
    );

    const matchedBlogs = blogPosts.filter(b =>
      b.title.toLowerCase().includes(lowerQuery) || b.description.toLowerCase().includes(lowerQuery)
    );

    const results = [
      ...matchedProducts.map(r => ({ ...r, type: 'product' })),
      ...matchedServices.map(r => ({ ...r, type: 'service' })),
      ...matchedBlogs.map(r => ({ ...r, type: 'blog' })),
    ];

    setSearchPerformed(true);
    setSearchResults(results);
  };

  const handleResultClick = (result) => {
    if (result.type === 'product') {
      setPage('products');
    } else if (result.type === 'service') {
      setPage('services');
    } else if (result.type === 'blog') {
      setPage('blog');
    }
  };

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login onSwitch={() => setPage('signup')} />;
      case 'signup':
        return <Signup onSwitch={() => setPage('login')} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'blog':
        return <Blog />;
      case 'products':
        return <ProductList products={products} addToCart={handleAddToCart} />;
      case 'cart':
        return (
          <Cart
            items={cartItems}
            removeFromCart={handleRemoveFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );
      case 'home':
      default:
        return (
          <>
            <SearchBar
              onSearch={handleSearch}
              results={searchResults}
              onResultClick={handleResultClick}
              searchPerformed={searchPerformed}
            />
            <HeroSection />
            <FeatureCarousel />
            <KeySellingPoints />
            <TestimonialsCarousel />
          </>
        );
    }
  };

  return (
    <div>
      <Navbar
        setPage={setPage}
        currentPage={page}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        user={user}
        onLogout={handleLogout}
      />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
