import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", email: "", password: "" });
  const [formMessage, setFormMessage] = useState(""); // To show form-level messages

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required.",
      }));
    } else if (value.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username must be at least 3 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
    } else if (!validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required.",
      }));
    } else if (value.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || errors.username || errors.email || errors.password) {
      setFormMessage("Please fix all errors before submitting.");
      return;
    }

    setFormMessage("Signup successful!");
    // Add further signup logic here
  };

  return (
    <div className="signup-page">
      <h2 className="signup-title">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={handleUsernameChange}
            className={errors.username ? "input-error" : ""}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={handlePasswordChange}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Signup</button>
      </form>

      {/* Display form-level messages */}
      {formMessage && <p className={`form-message ${formMessage.includes("successful") ? "success" : "error"}`}>{formMessage}</p>}
    </div>
  );
}

export default Signup;
