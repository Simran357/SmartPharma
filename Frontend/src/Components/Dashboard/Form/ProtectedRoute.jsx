import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import  { contextProvide }  from './Utils/Context/CommonContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(contextProvide);
  console.log(auth)

  return auth ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;