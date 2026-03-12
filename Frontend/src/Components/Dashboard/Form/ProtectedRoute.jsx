import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import  { contextProvide }  from './Utils/Context/CommonContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(contextProvide);
    if (auth === null) return <div>Loading...</div>;


  return auth  ? children : <Navigate to="/" />;


};

export default ProtectedRoute;