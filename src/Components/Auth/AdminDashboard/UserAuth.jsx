import React, { useEffect, useState } from 'react';
import { Table, Select, Button, message } from 'antd';
import { useSelector } from 'react-redux'; // Import useSelector


const { Option } = Select;

const UserAuth = () => {
  const [users, setUsers] = useState([]);
  const accessToken = useSelector((state) => state.user.accessToken); // Lấy accessToken từ Redux store

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        message.error('Failed to fetch users');
      }
    };

    fetchUsers();
  }, [accessToken]);

  const handleRoleChange = async (userId, newRole) => {
    try {
      const response = await fetch(`/api/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ role: newRole })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
      message.success('Role updated successfully');
    } catch (error) {
      message.error('Failed to update role');
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setUsers(users.filter(user => user.id !== userId));
      message.success('User deleted successfully');
    } catch (error) {
      message.error('Failed to delete user');
    }
  };

  const columns = [
    { title: 'Họ', dataIndex: 'lastName', key: 'lastName' },
    { title: 'Tên', dataIndex: 'firstName', key: 'firstName' },
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Password', dataIndex: 'password', key: 'password' },
    {
      title: 'Vai trò',
      dataIndex: 'role',
      key: 'role',
      render: (text, record) => (
        <Select defaultValue={text} onChange={newRole => handleRoleChange(record.id, newRole)}>
          <Option value="Admin">Admin</Option>
          <Option value="Manager">Manager</Option>
          <Option value="Khách">Khách</Option>
          <Option value="Ban Quản lý">Ban Quản lý</Option>
        </Select>
      )
    },
    { title: 'Đội bóng', dataIndex: 'team', key: 'team' },
    {
      title: 'Phân quyền',
      key: 'phân quyền',
      render: (text, record) => (
        <Button onClick={() => handleRoleChange(record.id, record.role)}>Phân quyền</Button>
      )
    },
    {
      title: 'Xóa',
      key: 'delete',
      render: (text, record) => (
        <Button danger onClick={() => handleDeleteUser(record.id)}>Xóa</Button>
      )
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <Table columns={columns} dataSource={users} rowKey="id" />
    </div>
  );
};

export default UserAuth;
