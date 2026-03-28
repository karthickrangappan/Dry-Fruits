import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { 
    HiOutlineMail, 
    HiOutlineLockClosed, 
    HiOutlineUser, 
    HiArrowNarrowRight 
} from 'react-icons/hi';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { login } = useShop();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        setTimeout(() => {
            const userData = { 
                id: Date.now(),
                name: formData.name || formData.email.split('@')[0], 
                email: formData.email 
            };
            login(userData);
            navigate('/');
            setLoading(false);
        }, 800);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-stone-50 px-4">
            <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-stone-100 relative overflow-hidden group">
                {}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-600/10 rounded-full blur-2xl group-hover:bg-amber-600/20 transition-all duration-700" />
                
                <div className="text-center mb-10">
                    <img src="/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-6 rounded-2xl drop-shadow-lg" />
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-2">
                        {isLogin ? 'Welcome Back!' : 'Create Account'}
                    </h2>
                    <p className="text-stone-500 font-medium">
                        {isLogin ? 'Sign in to access premium dry fruits.' : 'Join us for exclusive deals and nutrition tips.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <div className="relative">
                            <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                            <input 
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 md:py-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all text-stone-800 text-sm md:text-base"
                            />
                        </div>
                    )}

                    <div className="relative">
                        <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 font-bold" />
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 md:py-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all text-stone-800 text-sm md:text-base"
                        />
                    </div>

                    <div className="relative">
                        <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 font-bold" />
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 md:py-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all text-stone-800 text-sm md:text-base"
                        />
                    </div>

                    {isLogin && (
                        <div className="flex justify-end">
                            <button type="button" className="text-sm font-bold text-amber-600 hover:text-amber-700">
                                Forgot Password?
                            </button>
                        </div>
                    )}

                    <button 
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 md:py-4 bg-amber-600 text-white rounded-xl md:rounded-2xl font-black shadow-xl shadow-amber-600/20 hover:bg-amber-700 transform active:scale-95 transition-all flex items-center justify-center gap-2 group/btn text-sm md:text-base"
                    >
                        {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Sign Up')}
                        {!loading && <HiArrowNarrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />}
                    </button>
                </form>

                <div className="mt-8 text-center pt-8 border-t border-stone-50">
                    <button 
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-stone-500 font-bold hover:text-stone-900 transition-colors"
                    >
                        {isLogin ? (
                            <>Don't have an account? <span className="text-amber-600 underline">Register Now</span></>
                        ) : (
                            <>Already have an account? <span className="text-amber-600 underline">Login Here</span></>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
