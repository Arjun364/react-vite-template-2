import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const { user, loading } = useAuth();

    // Wait until loading is complete to check user status
    if (loading) return <div>Loading...</div>;
    return user ? <Outlet/> :<Navigate to={'/'} />
}

export default PrivateRoute