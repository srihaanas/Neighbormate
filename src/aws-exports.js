// src/aws-exports.js

const awsconfig = {
  Auth: {
    mandatorySignIn: true,
    region: 'us-east-1',  // Your AWS region
    userPoolId: 'us-east-1_FPnHoX09T',  // Your Cognito User Pool ID
    userPoolWebClientId: 'd6k56g6h1k5n23k3c7ntpklc',  // Your Cognito App Client ID
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
};

export default awsconfig;
