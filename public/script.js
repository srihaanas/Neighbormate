import { Auth } from 'aws-amplify';

// AWS Cognito configuration
Auth.configure({
  region: 'us-east-1',
  userPoolId: 'us-east-1_FPnHoX09T',
  userPoolWebClientId: 'd6k56g6h1k5n23k3c7ntpklc'
});

// Handle "Continue" button click
const continueButton = document.getElementById('continue');
const usernameInput = document.getElementById('username');
const nextLink = document.getElementById('link-next');
const submitDetailsButton = document.getElementById('submitDetails');

// Enable "Continue" button when username is valid
usernameInput.addEventListener('input', () => {
  const username = usernameInput.value.trim();
  const usernamePattern = /^[a-zA-Z0-9_]+$/;  // Basic username validation (can be adjusted)
  if (usernamePattern.test(username)) {
    continueButton.disabled = false;
  } else {
    continueButton.disabled = true;
  }
});

// On "Continue" button click, create the user and show next section
continueButton.addEventListener('click', async () => {
  const username = usernameInput.value.trim();

  try {
    const result = await Auth.signUp({
      username,
      password: 'TempPassword123!', // Temporary password
    });

    console.log('User created:', result);

    // Hide current section and show next section
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  } catch (error) {
    console.error('Error creating user:', error);
    alert('Error: ' + error.message);
  }
});

// Handle "Submit Details" button click (Save email, phone, address)
submitDetailsButton.addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  
  try {
    const username = usernameInput.value.trim();

    // Update user attributes in AWS Cognito
    await Auth.updateUserAttributes(
      { Username: username },
      { email: email, phone_number: phone, address: address }
    );

    console.log('User attributes updated');
    
    // Redirect for OTP verification
    alert('Details submitted. Please check your email for OTP verification.');

    // Optionally redirect user to another page or prompt for OTP
    // window.location.href = "verify-otp.html"; // Redirect to OTP verification page

  } catch (error) {
    console.error('Error updating user:', error);
    alert('Error: ' + error.message);
  }
});
