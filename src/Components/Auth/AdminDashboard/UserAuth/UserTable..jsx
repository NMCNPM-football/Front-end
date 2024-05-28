import React from 'react';
import UserRow from './UserRow'

const UserTable = ({ users }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2">Họ</th>
          <th className="py-2">Tên</th>
          <th className="py-2">Username</th>
          <th className="py-2">Password</th>
          <th className="py-2">Vai trò</th>
          <th className="py-2">Đội bóng</th>
          <th className="py-2">Phân quyền</th>
          <th className="py-2">Xóa</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
