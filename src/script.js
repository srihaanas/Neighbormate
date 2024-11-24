// Import Amplify and configure it with Cognito details
import { Auth } from 'aws-amplify';

Auth.configure({
  region: 'us-east-1', // Replace with your AWS region
  userPoolId: 'us-east-1_FPnHoX09T', // Replace with your User Pool ID
  userPoolWebClientId: 'd6k56g6h1k5n23k3c7ntpklc' // Replace with your App Client ID
});

document.getElementById('phone').addEventListener('input', (e) => {
  const phoneInput = e.target.value.trim();
  const continueButton = document.getElementById('continue');
  if (phoneInput.startsWith('+91') && phoneInput.length === 13) {
    continueButton.disabled = false;
  } else {
    continueButton.disabled = true;
  }
});

document.getElementById('continue').addEventListener('click', async () => {
  const phoneNumber = document.getElementById('phone').value.trim();
  
  try {
    // Initiate sign-up or sign-in process
    await Auth.signIn(phoneNumber);
    alert('Code sent to your mobile number for verification.');
  } catch (error) {
    if (error.code === 'UserNotFoundException') {
      await Auth.signUp({
        username: phoneNumber,
        password: 'RandomPassword123!', // Auto-generated password
        attributes: { phone_number: phoneNumber }
      });
      alert('User created. Verification code sent.');
    } else {
      alert(`Error: ${error.message}`);
    }
  }
});
