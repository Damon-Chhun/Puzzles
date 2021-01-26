import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password1: "",
    password2: ""
  });

  const { email, password1, firstName, lastName, password2 } = formData;

  const onChange = text => {
    setFormData({ ...formData, [text.target.name]: text.target.value });
  };
  const onSubmit = async text => {
    text.preventDefault();
    if (password1 !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <span>Create An Account</span>

      <form onSubmit={e => onSubmit(e)}>
        <div>
          <input
            name="firstName"
            type="name"
            placeholder="First Name"
            value={firstName}
            onChange={text => onChange(text)}
            required
          />

          <input
            name="lastName"
            type="name"
            placeholder="Last Name"
            value={lastName}
            onChange={text => onChange(text)}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={text => onChange(text)}
            required
          />

          <input
            name="password1"
            type="password"
            placeholder="Password"
            value={password1}
            onChange={text => onChange(text)}
            required
          />

          <input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={text => onChange(text)}
            required
          />

          <input type="submit" value="Sign In" />
          <a>
            Already Have an Account? <Link to="/signin">Sign In</Link>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
