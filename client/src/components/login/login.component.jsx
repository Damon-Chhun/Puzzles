import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
    console.log("SUCCESS");
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

export default Login;
