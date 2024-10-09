import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />; // Nếu chưa đăng nhập, chuyển hướng đến trang login
  }

  return children;
};

export default ProtectedRoute;
