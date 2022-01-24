import { useState, useEffect } from "react";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  // set the value
  let handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // email validation
  useEffect(() => {
    if (userData.email === "") {
      setErrors({ ...errors, emailError: "this field is required" });
    } else {
      if (!validateEmail(userData.email)) {
        setErrors({
          ...errors,
          emailError: "please enter a valid email address",
        });
      } else {
        setErrors({ ...errors, emailError: "" });
      }
    }
  }, [userData.email]);

  // password validation
  useEffect(() => {
    if (userData.password === "") {
      setErrors({ ...errors, passwordError: "this field is required" });
    } else {
      if (userData.password.length < 8) {
        setErrors({
          ...errors,
          passwordError: "please choose a password with 8 characters or more",
        });
      } else {
        setErrors({ ...errors, passwordError: "" });
      }
    }
  }, [userData.password]);

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>
    
      <form className="custom-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <small id="error" className="form-text text-muted">
            {errors.emailError}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <small id="error" className="form-text text-muted">
            {errors.passwordError}
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
