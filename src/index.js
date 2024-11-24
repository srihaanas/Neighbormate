import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Define the Cognito hosted UI URL
const hostedUIURL = `https://us-east-1fpnhox09t.auth.us-east-1.amazoncognito.com/login?client_id=d6k56g6h1k5n23k3c7ntpklc&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.dq6ynn49vwg49.amplifyapp.com%2F`;

// Automatically redirect to the Cognito hosted UI if the user lands on this URL
if (window.location.href === "https://main.dq6ynn49vwg49.amplifyapp.com/") {
  window.location.href = hostedUIURL;
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
