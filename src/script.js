import { Auth } from 'aws-amplify';

Auth.configure({
  region: 'us-east-1', // Replace with your AWS region
  userPoolId: 'us-east-1_FPnHoX09T', // Replace with your User Pool ID
  userPoolWebClientId: 'd6k56g6h1k5n23k3c7ntpklc' // Replace with your App Client ID
});

const phoneInput = document.getElementById('phone');
const continueButton = document.getElementById('continue');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

let phoneNumber;

phoneInput.addEventListener('input', (e) => {
  const phone = e.target.value.trim();
  if (phone.startsWith('+91') && phone.length === 13) {
    continueButton.disabled = false;
  } else {
    continueButton.disabled = true;
  }
});

continueButton.addEventListener('click', async () => {
  phoneNumber = phoneInput.value.trim();
  try {
    await Auth.signUp({
      username: phoneNumber,
      password: 'RandomPassword123!',
      attributes: { phone_number: phoneNumber }
    });
    step1.style.display = 'none';
    step2.style.display = 'block';
    alert('OTP sent to your mobile number.');
  } catch (error) {
    console.error('Sign-up Error:', error);
    alert(error.message);
  }
});

document.getElementById('verify-otp').addEventListener('click', async () => {
  const otp = document.getElementById('otp').value.trim();
  try {
    await Auth.confirmSignUp(phoneNumber, otp);
    step2.style.display = 'none';
    step3.style.display = 'block';
  } catch (error) {
    console.error('OTP Verification Error:', error);
    alert(error.message);
  }
});

document.getElementById('submit-details').addEventListener('click', async () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();
  
  try {
    await Auth.updateUserAttributes(Auth.currentAuthenticatedUser(), {
      name: name,
      email: email,
      address: address
    });
    alert('Details updated successfully. A verification email has been sent.');
    await Auth.verifyCurrentUserAttribute('email');
  } catch (error) {
    console.error('Details Submission Error:', error);
    alert(error.message);
  }
});
