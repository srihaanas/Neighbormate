// src/App.js
// src/App.js
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkUser();
  }, []);

  return (
    <div>
      <h1>Neighbormate App</h1>
      {isAuthenticated ? (
        <div>
          <h2>Welcome back!</h2>
          <SignOut />
        </div>
      ) : (
        <div>
          <SignIn />
          <SignUp />
        </div>
      )}
    </div>
  );
};

export default App;

