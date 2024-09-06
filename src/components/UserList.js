import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, onDelete }) => {
  return (
    <div className="user-list">
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/edit/${user.id}`}>Edit</Link>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create" className="create-button">Create New User</Link>
    </div>
  );
};

export default UserList;
