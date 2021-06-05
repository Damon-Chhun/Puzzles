import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../redux/auth/auth.actions";
import { loadCartOnLogin } from "../../redux/cart/cart.actions";

import {
  LoginComponentContainer,
  Title,
  InputName,
  InputContainer,
  InputField,
  EmailAndPassword,
  SignInInput,
  TextWrapper
} from "./register.styled";

export const Register = ({ register, isAuthenticated, history, loadCart }) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    password2: ""
  });

  const { email, password, firstName, lastName, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      register({ firstName, lastName, email, password });
      await loadCart();
      history.goBack();
    }
  };

  //Redirect if Registered
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <LoginComponentContainer>
      <Title>Register</Title>
      {/* <span>Create An Account</span> */}

      <form onSubmit={e => onSubmit(e)}>
        <div>
          <EmailAndPassword>
            <InputContainer>
              <InputName>First Name</InputName>
              <InputField
                name="firstName"
                type="name"
                value={firstName}
                onChange={e => onChange(e)}
                required
              />
            </InputContainer>
            <InputContainer>
              <InputName>Last Name</InputName>
              <InputField
                name="lastName"
                type="name"
                value={lastName}
                onChange={e => onChange(e)}
                required
              />
            </InputContainer>
            <InputContainer>
              <InputName>Email</InputName>
              <InputField
                name="email"
                type="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </InputContainer>
            <InputContainer>
              <InputName>Create Password</InputName>
              <InputField
                name="password"
                type="password"
                value={password}
                onChange={e => onChange(e)}
                required
              />
            </InputContainer>
            <InputContainer>
              <InputName>Confirm Password</InputName>
              <InputField
                name="password2"
                type="password"
                value={password2}
                onChange={e => onChange(e)}
                required
              />
            </InputContainer>
          </EmailAndPassword>

          <SignInInput type="submit" value="Register" />
          <TextWrapper>
            Already Have an Account? <Link to="/signin">Sign In</Link>
          </TextWrapper>
        </div>
      </form>
    </LoginComponentContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  register: ({ firstName, lastName, email, password }) =>
    dispatch(register({ firstName, lastName, email, password })),
  loadCart: token => dispatch(loadCartOnLogin(token))
});
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
