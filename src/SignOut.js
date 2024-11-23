// src/SignOut.js
import React from 'react';
import { Auth } from 'aws-amplify';

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      alert('You have been signed out.');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
