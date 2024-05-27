import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserRow = ({ user }) => {
  const [role, setRole] = useState(user.roleId);
  const [team, setTeam] = useState(user.tenDoiBong || '');
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/users/${user.id}`);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [user.id]);

  const handleRoleChange = async (e) => {
    setRole(e.target.value);
    try {
      await axios.put(`/position/${user.id}`, {
        roleId: e.target.value,
        tenDoiBong: team,
      });
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  const handleTeamChange = async (e) => {
    setTeam(e.target.value);
    try {
      await axios.put(`http://localhost:8888/position/${user.id}`, {
        roleId: role,
        tenDoiBong: e.target.value,
      });
    } catch (error) {
      console.error('Error updating team:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/delete-crud?id=${user.id}`);
      // Refresh the page or remove the user from the state
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <tr>
      <td className="py-2">{user.firstName}</td>
      <td className="py-2">{user.lastName}</td>
      <td className="py-2">{user.userName}</td>
      <td className="py-2">{details?.password}</td> {/* Use details for more accurate data */}
      <td className="py-2">
        <select value={role} onChange={handleRoleChange}>
          <option value="guest">Khách</option>
          <option value="manager">Manager</option>
          <option value="banquanly">Ban Quản lý</option>
          <option value="admin">Admin</option>
        </select>
      </td>
      <td className="py-2">
        {role === 'manager' && (
          <select value={team} onChange={handleTeamChange}>
            {/* Populate with team options */}
            {/* Example: <option value="Team A">Team A</option> */}
          </select>
        )}
      </td>
      <td className="py-2">
        <button onClick={handleDelete} className="text-red-600">Xóa</button>
      </td>
    </tr>
  );
};

export default UserRow;
