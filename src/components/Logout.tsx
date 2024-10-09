import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Xóa token khi người dùng đăng xuất
    navigate('/login'); // Chuyển hướng về trang đăng nhập
  };

  return (
    <header>
      <h1>My Website</h1>
      <button onClick={handleLogout}>Logout</button> {/* Nút đăng xuất */}
    </header>
  );
};

export default Header;
