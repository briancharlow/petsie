import React, { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import catImage from "../../images/cat white background.jpg";
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
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <select
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
        <div className="oauth-container">
          <p>Or sign up with:</p>
          <div className="oauth-buttons">
            <button className="oauth-button google">G</button>
            <button className="oauth-button facebook">
              <Facebook size={20} />
            </button>
            <button className="oauth-button instagram">
              <Instagram size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img
          src={catImage}
          alt="White cat with green eyes"
          className="cat-image"
        />
      </div>
    </div>
  );
};

export default SignupPage;
