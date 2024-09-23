import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import catImage from "../../images/cat couples.jpg";
import "./sign.css"; // Import the CSS file

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    petFamily: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="petname">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <select
            className="form-input"
            name="petFamily"
            value={formData.petFamily}
            onChange={handleChange}
          >
            <option value="">Select Pet Family</option>
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
            <option value="fish">Fish</option>
            <option value="birds">Birds</option>
            <option value="reptiles">Reptiles</option>
          </select>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
        <br />
        <fieldset className="oauth-container">
          <legend>Or sign up with</legend>
          <div className="oauth-buttons">
            <button className="google">
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button className="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button className="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </div>
        </fieldset>
      </div>

      <img
        src={catImage}
        alt="White cat with green eyes"
        className="cat-image"
      />
    </div>
  );
};

export default SignupPage;
