import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './authSlice';

function Auth() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Trong thực tế, bạn sẽ gọi API để xác thực
    if (username === 'test' && password === '123') {
      dispatch(login({ username: username, email: 'test@example.com' }));
    } else {
      alert('Đăng nhập thất bại!');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Quản lý Đăng nhập</h2>
      {isLoggedIn ? (
        <div>
          <p>Chào mừng, {user.username}!</p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      )}
    </div>
  );
}

export default Auth;