// components/Signup.jsx
import React from 'react';

const Signup = () => {
  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-gray-50 py-12">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Create a password" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-gray-500">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a></p>
      </div>
    </section>
  );
};

export default Signup;
