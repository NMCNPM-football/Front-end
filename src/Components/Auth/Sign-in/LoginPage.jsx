import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = !isLogin ? e.target.role.value : null;

    // Kiểm tra email hợp lệ
    if (!validateEmail(email)) {
      alert('Vui lòng nhập một địa chỉ email hợp lệ.');
      return;
    }

    // Logic đăng nhập hoặc đăng ký
    if (isLogin) {
      // Giả sử đăng nhập thành công với email "admin@example.com" và password "admin"
      if (email === 'admin@example.com' && password === 'admin') {
        localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
        navigate('/admin-dashboard');
      } else {
        localStorage.setItem('user', JSON.stringify({ email, role: 'user' }));
        navigate('/user-dashboard');
      }
    } else {
      // Giả sử đăng ký thành công
      localStorage.setItem('user', JSON.stringify({ email, role }));
      navigate(role === 'admin' ? '/admin-dashboard' : '/user-dashboard');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const validateEmail = (email) => {
    // Kiểm tra định dạng email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          {isLogin ? 'Đăng nhập' : 'Đăng ký'}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập địa chỉ email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập lại mật khẩu"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                  Chọn vai trò
                </label>
                <select
                  id="role"
                  name="role"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="user">Người dùng</option>
                  <option value="admin">Quản trị viên</option>
                </select>
              </div>
            </>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              {isLogin ? 'Đăng nhập' : 'Đăng ký'}
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700 font-bold"
            onClick={toggleForm}
          >
            {isLogin ? 'Đăng ký tài khoản mới' : 'Quay lại đăng nhập'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
