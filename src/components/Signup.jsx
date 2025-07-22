// // components/Signup.jsx
// import React from 'react';

// const Signup = () => {
//   return (
//     <section className="flex items-center justify-center min-h-[60vh] bg-gray-50 py-12">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
//         <form className="space-y-6">
//           <div>
//             <label className="block mb-2 text-gray-700 font-medium">Email</label>
//             <input type="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
//           </div>
//           <div>
//             <label className="block mb-2 text-gray-700 font-medium">Password</label>
//             <input type="password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Create a password" />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold">Sign Up</button>
//         </form>
//         <p className="mt-4 text-center text-gray-500">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a></p>
//       </div>
//     </section>
//   );
// };

// export default Signup;


import React from 'react';

const Signup = () => {
  const styles = {
    section: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      backgroundColor: '#f8f9fa',
      padding: '48px 0'
    },
    container: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    title: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '24px',
      textAlign: 'center',
      color: '#1a202c'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#4a5568',
      fontWeight: '500'
    },
    input: {
      width: '100%',
      padding: '8px 16px',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      outline: 'none',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      '&:focus': {
        borderColor: '#4299e1',
        boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.5)'
      }
    },
    button: {
      width: '100%',
      backgroundColor: '#3182ce',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '6px',
      border: 'none',
      fontWeight: '600',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      '&:hover': {
        backgroundColor: '#2c5282'
      }
    },
    loginText: {
      marginTop: '16px',
      textAlign: 'center',
      color: '#718096'
    },
    loginLink: {
      color: '#3182ce',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Sign Up</h2>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input 
              type="email" 
              style={styles.input} 
              placeholder="Enter your email" 
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              style={styles.input} 
              placeholder="Create a password" 
            />
          </div>
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.loginText}>
          Already have an account?{' '}
          <a href="/login" style={styles.loginLink}>Login</a>
        </p>
      </div>
    </section>
  );
};

export default Signup;