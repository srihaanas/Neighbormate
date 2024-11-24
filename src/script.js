// Import AWS Amplify Auth
import { Auth } from 'aws-amplify';

// AWS Cognito Configuration
Auth.configure({
  region: 'us-east-1', // Your AWS region
  userPoolId: 'us-east-1_FPnHoX09T', // Your User Pool ID
  userPoolWebClientId: 'd6k56g6h1k5n23k3c7ntpklc' // Your App Client ID
});

// Reference DOM elements
const phoneInput = document.getElementById('phone');
const continueButton = document.getElementById('continue');

// Function to validate mobile number
function validatePhoneNumber(phone) {
  // Check if the phone starts with +91 and has 10 digits after it
  const regex = /^\+91\d{10}$/;
  return regex.test(phone);
}

// Event listener for phone input changes
phoneInput.addEventListener('input', () => {
  const phone = phoneInput.value.trim();
  if (validatePhoneNumber(phone)) {
    continueButton.disabled = false;
    continueButton.style.backgroundColor = "#007bff"; // Highlight button
    continueButton.style.cursor = "pointer";
  } else {
    continueButton.disabled = true;
    continueButton.style.backgroundColor = "#ddd"; // Dim button
    continueButton.style.cursor = "not-allowed";
  }
});

// Handle "Continue" button click to send OTP using Cognito
continueButton.addEventListener('click', async () => {
  const phoneNumber = phoneInput.value.trim();
  try {
    // Sign up user with a temporary password and phone number
    await Auth.signUp({
      username: phoneNumber,
      password: 'TemporaryPassword123!', // Temporary password
      attributes: { phone_number: phoneNumber }
    });
    alert('OTP sent to your mobile number. Please verify.');
    // Move to the next step (e.g., show OTP input form)
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  } catch (error) {
    console.error('Sign-up Error:', error);
    alert(`Error: ${error.message}`);
  }
});
