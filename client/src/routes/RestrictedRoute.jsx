// RestrictedRoute.jsx
import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const RestrictedRoute = () => {
    const { user } = useAuth();

    return !user ? <Outlet /> : <Navigate to="/" />;
};

export default RestrictedRoute;
