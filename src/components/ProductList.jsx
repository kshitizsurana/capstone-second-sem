// import React from 'react';

// const products = [
//   { id: 1, name: 'Product 1', price: '$19.99', image: 'https://source.unsplash.com/200x200/?product,1' },
//   { id: 2, name: 'Product 2', price: '$29.99', image: 'https://source.unsplash.com/200x200/?product,2' },
//   { id: 3, name: 'Product 3', price: '$39.99', image: 'https://source.unsplash.com/200x200/?product,3' },
//   { id: 4, name: 'Product 4', price: '$49.99', image: 'https://source.unsplash.com/200x200/?product,4' },
// ];

// const ProductList = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Products</h2>
//         <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map(product => (
//             <div key={product.id} className="bg-white rounded-xl  shadow-md hover:shadow-xl transition p-6 flex  items-center">
//               <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg mb-4" />
//               <h3 className="text-lg font-semibold mb-2 text-gray-700">{product.name}</h3>
//               <p className="text-blue-600 font-bold mb-4">{product.price}</p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductList;

// import React from 'react';

// const products = [
//   { id: 1, name: 'Web devlopment', price: '$19.99', image: 'https://images.unsplash.com/photo-1555209183-8facf96a4349?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 2, name: 'Digital Marketing', price: '$29.99', image: 'https://images.unsplash.com/photo-1637454699780-f6af272fc109?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 3, name: 'Ui/UX design', price: '$39.99', image: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 4, name: 'SEO optimization', price: '$49.99', image: 'https://images.unsplash.com/photo-1602343457704-131bcf6e21b2?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 1, name: 'Web devlopment', price: '$19.99', image: 'https://images.unsplash.com/photo-1555209183-8facf96a4349?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 2, name: 'Digital Marketing', price: '$29.99', image: 'https://images.unsplash.com/photo-1637454699780-f6af272fc109?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 3, name: 'Ui/UX design', price: '$39.99', image: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 4, name: 'SEO optimization', price: '$49.99', image: 'https://images.unsplash.com/photo-1602343457704-131bcf6e21b2?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
// ];

// const productContainerStyle = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: '2rem',
//   justifyContent: 'center',
// };

// const productCardStyle = {
//   padding:"20px",
//   backgroundColor: 'white',
//   borderRadius: '1rem',
//   boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//   border:"2px solid black",
//   padding: '1.5rem',
//   flex: '1 1 200px',  
//   maxWidth: '250px',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   transition: 'box-shadow 0.3s ease',
//   marginBottom: "2vw"
// };

// const imgStyle = {
//   width: '100%',
//   height: '208px',
//   objectFit: 'cover',
//   borderRadius: '0.5rem',
//   marginBottom: '1rem',
// };

// const ProductList = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
// <h2 style={{ textAlign: 'center', fontWeight: '700', marginBottom: '2rem', fontSize: '1.875rem', color: '#2d3748' }}>
//   Our Products
// </h2>        <div style={productContainerStyle}>
//           {products.map(product => (
//             <div
//               key={product.id}
//               style={productCardStyle}
//               onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)'}
//               onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}
//             >
//               <img src={product.image} alt={product.name} style={imgStyle} />
//               <h3 style={{  fontSize: '1.5rem',  }}>{product.name}</h3>
//               <p style={{  fontSize: '1.5rem',  }}>{product.price}</p>
//               <button style={{  fontSize: '1.2rem', color: '#2d3748' ,padding:"10px" }}>
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductList;

// import React from 'react';

// const ProductList = ({ products, addToCart }) => {
//   const productContainerStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '2rem',
//     justifyContent: 'center',
//   };

//   const productCardStyle = {
//     padding: "20px",
//     backgroundColor: 'white',
//     borderRadius: '1rem',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//     border: "2px solid black",
//     padding: '1.5rem',
//     flex: '1 1 200px',  
//     maxWidth: '250px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     transition: 'box-shadow 0.3s ease',
//     marginBottom: "2vw"
//   };

//   const imgStyle = {
//     width: '100%',
//     height: '208px',
//     objectFit: 'cover',
//     borderRadius: '0.5rem',
//     marginBottom: '1rem',
//   };

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 style={{ textAlign: 'center', fontWeight: '700', marginBottom: '2rem', fontSize: '1.875rem', color: '#2d3748' }}>
//           Our Products
//         </h2>
//         <div style={productContainerStyle}>
//           {products.map(product => (
//             <div
//               key={product.id}
//               style={productCardStyle}
//               onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)'}
//               onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}
//             >
//               <img src={product.image} alt={product.name} style={imgStyle} />
//               <h3 style={{ fontSize: '1.5rem' }}>{product.name}</h3>
//               <p style={{ fontSize: '1.5rem' }}>${product.price.toFixed(2)}</p>
//               <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>{product.description}</p>
//               <button 
//                 style={{ 
//                   fontSize: '1.2rem', 
//                   color: '#2d3748', 
//                   padding: "10px",
//                   backgroundColor: '#f0f0f0',
//                   border: '1px solid #ccc',
//                   borderRadius: '4px',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => addToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductList;

import React from 'react';

const ProductList = ({ products, addToCart }) => {
  // Main container styles
  const styles = {
    section: {
      padding: '60px 20px',
      backgroundColor: '#f8f9fa',
      overflowX: 'auto', // Enable horizontal scrolling
      width: '100%'
    },
    container: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0 20px'
    },
    title: {
      textAlign: 'center',
      fontWeight: '700',
      marginBottom: '40px',
      fontSize: '32px',
      color: '#2c3e50'
    },
    productsContainer: {
      display: 'flex',
      gap: '30px',
      padding: '20px 0',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollbarWidth: 'none', // Hide scrollbar in Firefox
      msOverflowStyle: 'none', // Hide scrollbar in IE
      '&::-webkit-scrollbar': {
        display: 'none' // Hide scrollbar in Chrome/Safari
      },
      minHeight: '400px' // Ensure consistent height
    },
    productCard: {
      flex: '0 0 auto',
      width: '280px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      scrollSnapAlign: 'start',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
      }
    },
    productImage: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '20px'
    },
    productName: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '10px',
      textAlign: 'center'
    },
    productPrice: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#3498db',
      marginBottom: '15px'
    },
    productDescription: {
      fontSize: '14px',
      color: '#7f8c8d',
      marginBottom: '20px',
      textAlign: 'center',
      lineHeight: '1.5'
    },
    addToCartButton: {
      fontSize: '16px',
      fontWeight: '600',
      color: 'white',
      backgroundColor: '#3498db',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      width: '100%',
      '&:hover': {
        backgroundColor: '#2980b9'
      }
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Our Products</h2>
        <div style={styles.productsContainer}>
          {products.map(product => (
            <div key={product.id} style={styles.productCard}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={styles.productImage} 
              />
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
              <p style={styles.productDescription}>{product.description}</p>
              <button 
                style={styles.addToCartButton}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;