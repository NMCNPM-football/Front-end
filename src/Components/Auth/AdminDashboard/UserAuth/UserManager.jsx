import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserTable from './UserTable.';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8888//users/all');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý người dùng</h1>
      <UserTable users={users} />
    </div>
  );
};

export default UserManagement;
