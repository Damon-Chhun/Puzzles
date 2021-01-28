import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/auth/auth.actions";

const Login = ({ login }) => {
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
    login(email, password);
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
  login: (email, password) => dispatch(login(email, password))
});

export default connect(null, mapDispatchToProps)(Login);