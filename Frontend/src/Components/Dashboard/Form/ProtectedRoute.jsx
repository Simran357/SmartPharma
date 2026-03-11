import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import  { contextProvide }  from './Utils/Context/CommonContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(contextProvide);
  
  const token = sessionStorage.getItem("jwtToken");

  return auth && token ? children : <Navigate to="/" />;


};

export default ProtectedRoute;