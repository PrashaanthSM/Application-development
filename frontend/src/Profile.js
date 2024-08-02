import React, { useState } from 'react';
import './Profile.css'; // Ensure you have appropriate styles for the Profile page

function Profile({ userDetails }) {
  const [profileDetails, setProfileDetails] = useState(userDetails);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = () => {
    // Implement update logic if needed
    console.log('Profile updated:', profileDetails);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-photo">
        {profilePhoto ? (
          <img src={profilePhoto} alt="Profile" />
        ) : (
          <div className="placeholder-photo">No Photo</div>
        )}
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
      </div>
      <div className="profile-details">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profileDetails.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profileDetails.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={profileDetails.username}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
        {isEditing ? (
          <div>
            <button onClick={handleUpdateProfile}>Update Profile</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        )}
      </div>
    </div>
  );
}

export default Profile;
