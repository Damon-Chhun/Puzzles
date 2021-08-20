import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/auth/auth.actions";
import { loadCartOnLogin } from "../../redux/cart/cart.actions";
import {setAlert} from '../../redux/alert/alert.actions'

import {
  LoginComponentContainer,
  Title,
  InputName,
  InputContainer,
  InputField,
  EmailAndPassword,
  SignInInput,
  TextWrapper
} from "./login.styled";

const Login = ({ login, history, loadCart }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = text => {
    setFormData({ ...formData, [text.target.name]: text.target.value });
  };
  const onSubmit = async text => {
    text.preventDefault();
    await login(email, password);
    if(localStorage.token){
    await history.goBack();
    }
  };
  return (
    <LoginComponentContainer>
      <Title>Sign Into Puzzles</Title>
      <form onSubmit={e => onSubmit(e)}>
        <EmailAndPassword>
          <InputContainer>
            <InputName>Email</InputName>
            <InputField
              name="email"
              type="email"
              defaultValue={email}
              onChange={text => onChange(text)}
              required
            />
          </InputContainer>
          <InputContainer>
            <InputName>Password</InputName>
            <InputField
              name="password"
              type="password"
              defaultValue={password}
              onChange={text => onChange(text)}
              required
            />
          </InputContainer>
        </EmailAndPassword>

        <SignInInput type="submit" value="Sign In" />
        <TextWrapper>
          Don't Have An Account? <Link to="/register">Sign up</Link>
        </TextWrapper>
      </form>
    </LoginComponentContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  loadCart: token => dispatch(loadCartOnLogin(token)),
  setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
