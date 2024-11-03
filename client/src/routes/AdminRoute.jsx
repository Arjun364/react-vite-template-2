import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const { user, loading } = useAuth();
    if (!user) {
        <Navigate to='/home' />
    }
    // Wait until loading is complete to check user status
    if (loading) return <div>Loading...</div>;

    return user?.role == "admin" ? <Outlet /> : <Navigate to="/home" />;
};

export default AdminRoute;
