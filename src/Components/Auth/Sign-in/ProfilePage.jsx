import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const accessToken = useSelector((state) => state.user.accessToken); // Get the accessToken from the Redux store

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!accessToken) {
          console.log('No access token found');
          return;
        }

        const response = await fetch('http://localhost:8888/profile', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        setProfileData(data.data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };

    fetchProfile();
  }, [accessToken]); // Add accessToken as a dependency to the useEffect hook

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
      <p>Phone: {profileData.phone}</p>
      <p>Address: {profileData.address}</p>
      <p>Position: {profileData.position}</p>
      <p>Club Name: {profileData.clubName}</p>
    </div>
  );
}