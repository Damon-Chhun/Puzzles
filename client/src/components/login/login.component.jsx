import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/auth/auth.actions";
import { loadCartOnLogin } from "../../redux/cart/cart.actions";
import { selectAuthToken } from "../../redux/auth/auth.selectors";

import { createStructuredSelector } from "reselect";

const Login = ({ login, history, token, loadCart, prevProps }) => {
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
    console.log(token, "TOKEN TOKEN LOGIN");
    await loadCart(token);
    history.goBack();
  };
  return (
    <div>
      <h2>Sign In</h2>
      <span>Already have an account</span>

      <form onSubmit={e => onSubmit(e)}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={text => onChange(text)}
          required
        />
        <label>Email</label>

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={text => onChange(text)}
          required
        />
        <label>Password</label>

        <input type="submit" value="Sign In" />
        <a>
          Not Registered? <Link to="/register">Sign up</Link>
        </a>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  loadCart: token => dispatch(loadCartOnLogin(token))
});
const mapStateToProps = state => ({
  token: state.auth.token
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
