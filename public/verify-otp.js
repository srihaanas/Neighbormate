import { Auth } from 'aws-amplify';

// AWS Cognito configuration (same as before)
Auth.configure({
  region: 'us-east-1',
  userPoolId: 'us-east-1_FPnHoX09T',
  userPoolWebClientId: 'd6k56g6h1k5n23k3c7ntpklc'
});

// Get the username from the previous session or URL (e.g., from localStorage, sessionStorage, or URL params)
let username = sessionStorage.getItem('username'); // Assuming you stored the username in sessionStorage earlier

// Enable the OTP button when OTP is entered
const otpInput = document.getElementById('otp');
const verifyOtpButton = document.getElementById('verifyOtpButton');
const errorMessage = document.getElementById('error-message');

otpInput.addEventListener('input', () => {
  const otp = otpInput.value.trim();
  if (otp.length > 0) {
    verifyOtpButton.disabled = false;
  } else {
    verifyOtpButton.disabled = true;
  }
});

// Handle OTP verification when the button is clicked
verifyOtpButton.addEventListener('click', async () => {
  const otp = otpInput.value.trim();

  try {
    // Confirm the OTP using Cognito
    await Auth.confirmSignUp(username, otp);

    // OTP is correct, notify the user
    alert('OTP verified successfully! Your account is now verified.');
    
    // Optionally redirect the user to a new page or dashboard
    window.location.href = 'dashboard.html'; // Example redirect to dashboard

  } catch (error) {
    console.error('Error confirming OTP:', error);
    errorMessage.style.display = 'block'; // Show error message if OTP is invalid
  }
});
