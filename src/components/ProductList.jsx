import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$19.99', image: 'https://source.unsplash.com/200x200/?product,1' },
  { id: 2, name: 'Product 2', price: '$29.99', image: 'https://source.unsplash.com/200x200/?product,2' },
  { id: 3, name: 'Product 3', price: '$39.99', image: 'https://source.unsplash.com/200x200/?product,3' },
  { id: 4, name: 'Product 4', price: '$49.99', image: 'https://source.unsplash.com/200x200/?product,4' },
];

const ProductList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-700">{product.name}</h3>
              <p className="text-blue-600 font-bold mb-4">{product.price}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
