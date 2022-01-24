import { useState, useEffect } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    userNameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  // set the value
  let handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // name validation
  useEffect(() => {
    if (userData.name === "") {
      setErrors({ ...errors, nameError: "this field is required" });
    } else {
      setErrors({ ...errors, nameError: "" });
    }
  }, [userData.name]);

  // user name validation
  useEffect(() => {
    if (userData.userName === "") {
      setErrors({ ...errors, userNameError: "this field is required" });
    } else {
      if (!validateUserName(userData.userName)) {
        setErrors({
          ...errors,
          userNameError: "please remove any spaces",
        });
      } else {
        setErrors({ ...errors, userNameError: "" });
      }
    }
  }, [userData.userName]);

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
      if (!validatePassword(userData.password)) {
        setErrors({
          ...errors,
          passwordError:
            "please choose a password with 8 characters or more that has one number, one special character",
        });
      } else {
        setErrors({ ...errors, passwordError: "" });
      }
    }
  }, [userData.password]);

  // confirm password validation
  useEffect(() => {
    if (userData.confirmPassword !== userData.password) {
      setErrors({
        ...errors,
        confirmPasswordError: "please make sure passwords match",
      });
    } else {
      setErrors({ ...errors, confirmPasswordError: "" });
    }
  }, [userData.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // validation helper functions
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = (password) => {
    return String(password).match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );
  };
  const validateUserName = (name) => {
    return String(name).match(/^\S*$/);
  };

  return (
    <>
      <form className="custom-container" onSubmit={handleSubmit}>
        {/* name */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <small id="error" className="form-text text-muted">
            {errors.nameError}
          </small>
        </div>
        {/* email */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <small id="error" className="form-text text-muted">
            {errors.emailError}
          </small>
        </div>
        {/* user name */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name</label>
          <input
            type="text"
            className="form-control"
            name="userName"
            value={userData.userName}
            onChange={handleChange}
          />
          <small id="error" className="form-text text-muted">
            {errors.userNameError}
          </small>
        </div>
        {/* password */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <small id="error" className="form-text text-muted">
            {errors.passwordError}
          </small>
        </div>
        {/* confirm password */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
          <small id="error" className="form-text text-muted">
            {errors.confirmPasswordError}
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;