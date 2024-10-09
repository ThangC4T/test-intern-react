import React from 'react';
import './Header.css';  // Tạo file CSS riêng cho Header

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <h1>Thangct</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
