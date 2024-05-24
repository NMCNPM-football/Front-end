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
    <div className="min-h-3.5 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-4xl w-full p-4 m-4 shadow-lg rounded-md bg-white">
        <div className="md:max-w-md w-full sm:px-6 py-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-12">
              <h3 className="text-3xl font-extrabold">{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h3>
              <p className="text-sm mt-4">
                {isLogin ? "Don't have an account" : 'Quay lại đăng nhập'}
                <button
                  type="button"
                  className="text-white-600 font-semibold hover:underline ml-1"
                  onClick={toggleForm}
                >
                  {isLogin ? 'Register here' : 'Quay lại đăng nhập'}
                </button>
              </p>
            </div>
            <div className="mb-4">
              <label className="text-xs block mb-2" htmlFor="email">Email</label>
              <div className="relative flex items-center">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                  placeholder="Nhập địa chỉ email"
                  required
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                  <g transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"></path>
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="mt-8">
              <label className="text-xs block mb-2" htmlFor="password">Mật khẩu</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                  placeholder="Nhập mật khẩu"
                  required
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                </svg>
              </div>
            </div>
            {!isLogin && (
              <>
                <div className="mt-8">
                  <label className="text-xs block mb-2" htmlFor="confirm-password">Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                    placeholder="Nhập lại mật khẩu"
                    required
                  />
                </div>
                <div className="mt-8">
                  <label className="text-xs block mb-2" htmlFor="role">Chọn vai trò</label>
                  <select
                    id="role"
                    name="role"
                    className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                  >
                    <option value="user">Người dùng</option>
                    <option value="admin">Quản trị viên</option>
                  </select>
                </div>
              </>
            )}
            <div className="flex items-center justify-between gap-2 mt-5">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">Ghi nhớ</label>
              </div>
              <div>
                <a href="javascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">Quên mật khẩu?</a>
              </div>
            </div>
            <div className="mt-12">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 text-sm bg-blue-500 hover:bg-blue-600 transition text-white font-semibold rounded-md"
              >
                {isLogin ? 'Đăng nhập' : 'Đăng ký'}
              </button>
            </div>
          </form>
          <div className="mt-4 text-center space-x-8 flex justify-center">
            <button type="button" className="border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" className="inline" viewBox="0 0 512 512">
                <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" />
                <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" />
                <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" />
                <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="/assets/Logo_VPF_main.png" alt="banner" className="object-cover w-full h-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
