// // components/Login.jsx
// import React from 'react';

// const Login = () => {
//   return (
//     <section className="flex items-center justify-center min-h-[60vh] bg-gray-50 py-12">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
//         <form className="space-y-6">
//           <div>
//             <label className="block mb-2 text-gray-700 font-medium">Email</label>
//             <input type="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
//           </div>
//           <div>
//             <label className="block mb-2 text-gray-700 font-medium">Password</label>
//             <input type="password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold">Login</button>
//         </form>
//         <p className="mt-4 text-center text-gray-500">Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a></p>
//       </div>
//     </section>
//   );
// };

// export default Login;


import React from 'react';

const Login = () => {
  const styles = {
    loginSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem'
    },
    loginCard: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      padding: '2.5rem',
      width: '100%',
      maxWidth: '420px',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '6px',
        background: 'linear-gradient(90deg, #4361ee, #3a0ca3)'
      }
    },
    loginTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#2b2d42',
      textAlign: 'center',
      marginBottom: '2rem',
      position: 'relative',
      '&::after': {
        content: '""',
        display: 'block',
        width: '60px',
        height: '4px',
        background: '#4361ee',
        margin: '0.8rem auto 0',
        borderRadius: '2px'
      }
    },
    loginForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.8rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    formLabel: {
      fontSize: '0.95rem',
      fontWeight: '600',
      color: '#4a4e69',
      marginLeft: '0.2rem'
    },
    formInput: {
      padding: '0.9rem 1.2rem',
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      '&:focus': {
        outline: 'none',
        borderColor: '#4361ee',
        boxShadow: '0 0 0 3px rgba(67, 97, 238, 0.2)'
      },
      '&::placeholder': {
        color: '#adb5bd'
      }
    },
    loginButton: {
      background: 'linear-gradient(90deg, #4361ee, #3a0ca3)',
      color: 'white',
      border: 'none',
      padding: '1rem',
      borderRadius: '10px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '0.5rem',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 5px 15px rgba(67, 97, 238, 0.3)'
      },
      '&:active': {
        transform: 'translateY(0)'
      }
    },
    signupPrompt: {
      textAlign: 'center',
      marginTop: '1.8rem',
      color: '#6c757d',
      fontSize: '0.95rem'
    },
    signupLink: {
      color: '#4361ee',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      '&:hover': {
        color: '#3a0ca3',
        textDecoration: 'underline'
      }
    },
    forgotPassword: {
      textAlign: 'right',
      marginTop: '-0.8rem'
    },
    forgotLink: {
      color: '#6c757d',
      fontSize: '0.85rem',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      '&:hover': {
        color: '#4361ee',
        textDecoration: 'underline'
      }
    }
  };

  return (
    <section style={styles.loginSection}>
      <div style={styles.loginCard}>
        <h2 style={styles.loginTitle}>Welcome Back</h2>
        
        <form style={styles.loginForm}>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Email Address</label>
            <input 
              type="email" 
              style={styles.formInput}
              placeholder="your@email.com" 
              required
            />
          </div>
          
          <div style={styles.formGroup}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label style={styles.formLabel}>Password</label>
              <a href="/forgot-password" style={styles.forgotLink}>Forgot password?</a>
            </div>
            <input 
              type="password" 
              style={styles.formInput}
              placeholder="••••••••" 
              required
            />
          </div>
          
          <button type="submit" style={styles.loginButton}>Log In</button>
        </form>
        
        <p style={styles.signupPrompt}>
          Don't have an account?{' '}
          <a href="/signup" style={styles.signupLink}>Create account</a>
        </p>
      </div>
    </section>
  );
};

export default Login;