import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CommonContext  from './Utils/Context/CommonContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(CommonContext);

  return auth ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;