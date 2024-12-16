// src/components/PersonalInfoForm.js

import React, { useState } from 'react';

function PersonalInfoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    github: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data to parent component or save
  };

  return (
    <div className="personal-info-form">
      <h2>Enter Your Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedIn">LinkedIn:</label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="github">GitHub:</label>
          <input
            type="text"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
