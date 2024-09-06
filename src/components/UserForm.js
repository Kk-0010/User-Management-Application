import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ user, onSave }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [phone, setPhone] = useState(user ? user.phone : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, phone };
    try {
      if (user) {
        await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, userData);
      } else {
        await axios.post('https://jsonplaceholder.typicode.com/users', userData);
      }
      onSave();
    } catch (err) {
      alert('Error saving user');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
