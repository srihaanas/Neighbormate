import React from "react";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const LoginPage = () => {
  return (
    <Container>
      <Logo src="https://neighbormate.s3.amazonaws.com/neighhourmate+logo" alt="Neighbormate Logo" />
      <FormWrapper>
        <h2>Welcome to Neighbormate</h2>
        <form>
          <InputWrapper>
            <AiOutlineUser size={20} />
            <input type="text" placeholder="Enter your username" />
          </InputWrapper>
          <InputWrapper>
            <AiOutlineLock size={20} />
            <input type="password" placeholder="Enter your password" />
          </InputWrapper>
          <Button type="submit">Login</Button>
        </form>
        <Footer>
          Don't have an account? <a href="/signup">Sign Up</a>
        </Footer>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #fdf5e6, #ffdf91);
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
  animation: fadeIn 2s ease-in;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #333;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;

  input {
    flex: 1;
    border: none;
    background: transparent;
    margin-left: 10px;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
`;

const Button = styled.button`
  background: #ff8c00;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ff6a00;
  }
`;

const Footer = styled.div`
  margin-top: 10px;
  font-size: 14px;

  a {
    color: #ff8c00;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
