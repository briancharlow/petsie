import React, { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import catImage from "../images/cat white background.jpg";
const SignUp = () => {
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
    // Here you would typically send the data to your backend
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left side - Signup Form */}
      <div className="w-1/2 p-8 flex flex-col justify-center relative">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            name="petFamily"
            value={formData.petFamily}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Pet Family</option>
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
            <option value="fish">Fish</option>
            <option value="birds">Birds</option>
            <option value="reptiles">Reptiles</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <p className="text-center text-gray-600">Or sign up with:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded transition duration-300">
              G
            </button>
            <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-300">
              <Facebook size={20} />
            </button>
            <button className="p-2 bg-pink-600 hover:bg-pink-700 text-white rounded transition duration-300">
              <Instagram size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Cat Image */}
      <div className="w-1/2 relative overflow-hidden">
        <img
          src={catImage}
          alt="White cat with green eyes"
          className="object-cover w-full h-full"
        />
        {/* SVG for curved separator */}
        <svg
          className="absolute top-0 left-0 h-full w-24"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C50,0 50,100 0,100 Z"
            fill="rgb(249, 250, 251)" // matches bg-gray-50
          />
        </svg>
      </div>
    </div>
  );
};

export default SignUp;
