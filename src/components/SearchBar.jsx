import React, { useState } from 'react';

<<<<<<< HEAD
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onClick={handleKeyPress}
        placeholder="Search for products, services, or blog posts"
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        🔍
      </button>
=======
const SearchBar = ({ onSearch, results = [], onResultClick }) => {
  const [query, setQuery] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      setSearchPerformed(true);
      onSearch(trimmedQuery);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search for products, services, or blog posts"
          style={styles.input}
          aria-label="Search"
        />
        <button onClick={handleSearch} style={styles.button} aria-label="Search button">
          🔍
        </button>
      </div>

      {searchPerformed && (
        <div style={styles.results}>
          {results.length === 0 ? (
            <p style={styles.noResults}>No results found.</p>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                style={styles.resultItem}
                onClick={() => onResultClick?.(item)}
              >
                <img src={item.image} alt={item.name || item.title} style={styles.image} />
                <div>
                  <h4 style={styles.title}>{item.name || item.title}</h4>
                  <p style={styles.description}>{item.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
>>>>>>> f90fde9 (adding new files)
    </div>
  );
};

const styles = {
<<<<<<< HEAD
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px auto',
    maxWidth: '600px',
    width: '90%',
    background: '#f0f0f0',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    padding: '10px 15px',
=======
  container: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '600px',
    width: '90%',
    background: '#f9f9f9',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    flex: 1,
    padding: '12px 16px',
>>>>>>> f90fde9 (adding new files)
    border: 'none',
    fontSize: '16px',
    outline: 'none',
    background: 'transparent',
  },
  button: {
<<<<<<< HEAD
    padding: '10px 15px',
    border: 'none',
    background: '#333',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
=======
    padding: '12px 16px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.2s',
  },
  results: {
    marginTop: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 20px',
  },
  resultItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '16px',
  },
  title: {
    margin: 0,
    fontSize: '16px',
  },
  description: {
    margin: '6px 0 0',
    fontSize: '14px',
    color: '#555',
  },
  noResults: {
    color: '#888',
    textAlign: 'center',
    marginTop: '10px',
  },
>>>>>>> f90fde9 (adding new files)
};

export default SearchBar;
