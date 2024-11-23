// src/SignIn.js
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      await Auth.signIn(username, password);
      alert('Sign in successful!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleSignIn}>Sign In</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
