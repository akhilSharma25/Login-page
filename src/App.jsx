// import './App.css'

// function App(){

//   return(
//     <div className="App">
//       <div className="logo-box">
//         <img src="./logo.jpeg" alt="logo" className='logo'/>
//         <h2>Sign in to Twitter</h2>
//         <button>
//           <img src="./google.jpeg" alt="" className='logo' />
//           Sign in With Google
//         </button>
//         <button>
//           <img src="./apple.jpeg" alt="" className='logo' />
//           Sign in With Apple
//         </button>
//  <hr />

//  <span>Or</span>
//  <form action="">
//   <input type="text" placeholder='phone email or username' name="" id="" />
//   <button>Next</button>
//  </form>

//  <button>Forget Password</button>
//  <p>Don't Have an Account <a href="">Sign Up</a></p>
//       </div>
//     </div>
//   )
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  // Event handler for handling form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Email Submitted:', email);
    alert(`Email submitted: ${email}`);
  };

  // Event handler for handling Google sign-in redirection
  const handleGoogleSignIn = () => {
    const googleOAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile`;
    window.location.href = googleOAuthURL; // Redirect to Google OAuth URL
  };

  // Event handler for handling Apple sign-in redirection
  const handleAppleSignIn = () => {
    const appleOAuthURL = `https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=name%20email`;
    window.location.href = appleOAuthURL; // Redirect to Apple OAuth URL
  };

  // Event handler for handling the Forgot Password button
  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
    alert('Password reset link sent');
  };

  // Event handler for handling the Sign Up link
  const handleSignUp = () => {
    console.log('Sign Up clicked');
    alert('Redirecting to Sign Up page');
  };

  return (
    <div className="App">
      <div className="logo-box">
        <img src="./logo.jpeg" alt="logo" className='logo'/>
        <h2>Sign in to Twitter</h2>

        <button onClick={handleGoogleSignIn}>
          <img src="./google.jpeg" alt="Google" className='logo'/>
          Sign in With Google
        </button>

        <button onClick={handleAppleSignIn}>
          <img src="./apple.jpeg" alt="Apple" className='logo'/>
          Sign in With Apple
        </button>

        <hr />

        <span>Or</span>

        {/* Email Form */}
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder='Phone, email or username'
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Update state on change
          />
          <button type="submit">Next</button>
        </form>

        {/* Forgot Password Button */}
        <button onClick={handleForgotPassword}>Forgot Password</button>

        <p>Don't Have an Account? <a href="#" onClick={handleSignUp}>Sign Up</a></p>
      </div>
    </div>
  );
}

export default App;
