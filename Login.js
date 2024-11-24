import React, { useState } from "react";
import { Auth } from "aws-amplify";

function Login() {
  const [phone, setPhone] = useState("");
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  const validatePhoneNumber = (phone) => {
    const regex = /^\+91\d{10}$/;
    return regex.test(phone);
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    setPhone(input);
    setButtonEnabled(validatePhoneNumber(input));
  };

  const handleContinue = async () => {
    try {
      await Auth.signUp({
        username: phone,
        password: "TemporaryPassword123!",
        attributes: { phone_number: phone },
      });
      alert("OTP sent to your mobile number. Please verify.");
      // Move to OTP step logic here
    } catch (error) {
      console.error("Sign-up error:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <h2>Login/Signup</h2>
      <input
        type="text"
        placeholder="Enter your mobile number"
        value={phone}
        onChange={handlePhoneChange}
      />
      <button
        onClick={handleContinue}
        disabled={!isButtonEnabled}
        style={{
          backgroundColor: isButtonEnabled ? "#007bff" : "#ddd",
          cursor: isButtonEnabled ? "pointer" : "not-allowed",
        }}
      >
        Continue
      </button>
      <p>
        By proceeding, you agree to Neighbormate's{" "}
        <a href="#">Privacy Policy</a>, <a href="#">User Agreement</a>, and{" "}
        <a href="#">Terms of Service</a>.
      </p>
    </div>
  );
}

export default Login;
