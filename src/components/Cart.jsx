// import React from 'react';

// const cartItems = [
//   { id: 1, name: 'Product 1', price: '$19.99', quantity: 1 },
//   { id: 2, name: 'Product 2', price: '$29.99', quantity: 2 },
// ];

// const Cart = () => {
//   return (
//     <section className="py-12 bg-gray-50 min-h-[40vh]">
//       <div className="max-w-3xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Your Cart</h2>
//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty.</p>
//         ) : (
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <ul>
//               {cartItems.map(item => (
//                 <li key={item.id} className="flex justify-between items-center py-4 border-b last:border-b-0">
//                   <span className="font-medium text-gray-700">{item.name}</span>
//                   <span className="text-gray-500">x{item.quantity}</span>
//                   <span className="font-semibold text-blue-600">{item.price}</span>
//                   <button className="ml-4 text-red-500 hover:text-red-700 transition">Remove</button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex justify-end mt-6">
//               <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Checkout</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Cart;
import React from 'react';

const Cart = ({ items, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  const handleCheckout = () => {
    alert(`Thank you for your purchase!\n\nTotal: $${totalPrice}\nItems: ${items.reduce((sum, item) => sum + item.quantity, 0)}`);
  };

  // CSS styles
  const styles = {
    cartSection: {
      backgroundColor: '#f8f9fa',
      padding: '60px 20px',
      minHeight: '60vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      padding: '30px',
      position: 'relative'
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#2c3e50',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    emptyCart: {
      textAlign: 'center',
      color: '#7f8c8d',
      fontSize: '18px',
      padding: '40px 0'
    },
    cartList: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      borderBottom: '1px solid #ecf0f1',
      transition: 'all 0.3s ease'
    },
    itemImage: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginRight: '20px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    itemInfo: {
      flex: '1',
      minWidth: '200px'
    },
    itemName: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '5px'
    },
    itemPrice: {
      fontSize: '16px',
      color: '#7f8c8d'
    },
    quantityControls: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 20px'
    },
    quantityButton: {
      width: '30px',
      height: '30px',
      border: '1px solid #bdc3c7',
      backgroundColor: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#f1f1f1'
      }
    },
    quantityDisplay: {
      width: '40px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '600'
    },
    itemTotal: {
      minWidth: '80px',
      textAlign: 'right',
      fontSize: '16px',
      fontWeight: '600',
      color: '#3498db',
      margin: '0 20px'
    },
    removeButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#e74c3c',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      padding: '5px 10px',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: '#fadbd8'
      }
    },
    cartFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '30px',
      paddingTop: '20px',
      borderTop: '2px solid #ecf0f1'
    },
    totalPrice: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#2c3e50'
    },
    checkoutButton: {
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: '12px 30px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      '&:hover': {
        backgroundColor: '#2980b9',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }
    }
  };

  return (
    <section style={styles.cartSection}>
      <div style={styles.container}>
        <h2 style={styles.title}>Your Shopping Cart</h2>
        {items.length === 0 ? (
          <p style={styles.emptyCart}>Your cart is empty. Start shopping to add items!</p>
        ) : (
          <>
            <ul style={styles.cartList}>
              {items.map(item => (
                <li key={item.id} style={styles.cartItem}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={styles.itemImage} 
                    />
                    <div style={styles.itemInfo}>
                      <h3 style={styles.itemName}>{item.name}</h3>
                      <p style={styles.itemPrice}>${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                  <div style={styles.quantityControls}>
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      -
                    </button>
                    <span style={styles.quantityDisplay}>{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      +
                    </button>
                  </div>
                  <span style={styles.itemTotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={styles.removeButton}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div style={styles.cartFooter}>
              <span style={styles.totalPrice}>Total: ${totalPrice}</span>
              <button 
                onClick={handleCheckout}
                style={styles.checkoutButton}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;