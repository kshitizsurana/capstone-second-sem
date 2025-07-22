import React from 'react';

const cartItems = [
  { id: 1, name: 'Product 1', price: '$19.99', quantity: 1 },
  { id: 2, name: 'Product 2', price: '$29.99', quantity: 2 },
];

const Cart = () => {
  return (
    <section className="py-12 bg-gray-50 min-h-[40vh]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-6">
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className="flex justify-between items-center py-4 border-b last:border-b-0">
                  <span className="font-medium text-gray-700">{item.name}</span>
                  <span className="text-gray-500">x{item.quantity}</span>
                  <span className="font-semibold text-blue-600">{item.price}</span>
                  <button className="ml-4 text-red-500 hover:text-red-700 transition">Remove</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
