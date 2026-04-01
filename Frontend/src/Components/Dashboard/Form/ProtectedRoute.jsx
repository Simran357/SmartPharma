import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import  { contextProvide }  from './Utils/Context/CommonContext';

const ProtectedRoute = ({ children }) => {
  const { userRoles } = useContext(contextProvide);
    if (userRoles === null) return <div>Loading...</div>;


  return userRoles  ? children : <Navigate to="/" />;


};

export default ProtectedRoute;