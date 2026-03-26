import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useShop();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/login');
    }, [logout, navigate]);

    return (
        <div className="min-h-screen pt-24 flex items-center justify-center bg-stone-50">
            <div className="text-center animate-pulse">
                <p className="text-2xl font-black text-stone-900">Logging you out...</p>
            </div>
        </div>
    );
};

export default Logout;
