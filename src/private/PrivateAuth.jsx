import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const PrivateAuth = () => {
    const { user } = useShop();

    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};

export default PrivateAuth;
