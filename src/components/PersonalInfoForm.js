import React, { useState } from 'react';

const PersonalInfoForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result); // Set image as base64
      };
      reader.readAsDataURL(file); // Read file as Data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const personalInfo = { name, email, profilePicture };
    onSubmit(personalInfo); // Pass data back to the parent component
    setName('');
    setEmail('');
    setProfilePicture(null); // Reset profile picture after submission
  };

  return (
    <div>
      <h2>Enter Your Personal Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </div>
        {profilePicture && (
          <div>
            <h4>Profile Picture Preview</h4>
            <img src={profilePicture} alt="Profile Preview" width="100" height="100" />
          </div>
        )}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
