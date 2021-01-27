import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../redux/auth/auth.actions";

export const Register = ({ register, isAuthenticated }) => {
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
    }
  };

  //Redirect if Registered
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

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
            onChange={e => onChange(e)}
            required
          />

          <input
            name="lastName"
            type="name"
            placeholder="Last Name"
            value={lastName}
            onChange={e => onChange(e)}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => onChange(e)}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => onChange(e)}
            required
          />

          <input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={e => onChange(e)}
            required
          />

          <input type="submit" value="Register" />
          <a>
            Already Have an Account? <Link to="/signin">Sign In</Link>
          </a>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  register: ({ firstName, lastName, email, password }) =>
    dispatch(register({ firstName, lastName, email, password }))
});
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
