import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserForm from '../components/UserForm';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Updated hook

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (err) {
        alert('Error fetching user');
      }
    };
    fetchUser();
  }, [id]);

  const handleSave = () => {
    navigate('/'); // Updated navigation method
  };

  if (!user) return <div className="loading">Loading...</div>;

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm user={user} onSave={handleSave} />
    </div>
  );
};

export default UserDetail;
