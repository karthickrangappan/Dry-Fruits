import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { products } from '../product/ProductCard';
import {
    HiOutlineHeart,
    HiOutlineUser,
    HiOutlineShoppingBag,
    HiMenuAlt3,
    HiX,
    HiChevronDown,
    HiLogout,
    HiFilter
} from 'react-icons/hi';

const Navbar = () => {
    const { cartCount, wishlistCount, user, logout } = useShop();
    const [isOpen, setIsOpen] = useState(false);
    const [catDropdown, setCatDropdown] = useState(false);
    const [pagesDropdown, setPagesDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const pagesRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const categories = [...new Set(products.map(p => p.category))];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setCatDropdown(false);
            }
            if (pagesRef.current && !pagesRef.current.contains(event.target)) {
                setPagesDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Categories', path: '#', dropdownType: 'categories' },
        { name: 'Pages', path: '#', dropdownType: 'pages' },
    ];

    const additionalPages = [
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isPagesActive = () => additionalPages.some(p => location.pathname === p.path);
    const isCategoriesActive = () => location.pathname.startsWith('/category/');

    const isActive = (link) => {
        if (link.dropdownType === 'pages') return isPagesActive();
        if (link.dropdownType === 'categories') return isCategoriesActive();
        return location.pathname === link.path;
    };

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-stone-900 shadow-sm py-2">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                            <img
                                src="/logo.png"
                                alt="KK Dry Fruits Logo"
                                className="w-full h-full rounded-full object-contain filter drop-shadow-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-black text-amber-400 leading-none">
                                Dry<span className="text-amber-600">Fruits</span>
                            </span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative" ref={link.dropdownType === 'categories' ? dropdownRef : link.dropdownType === 'pages' ? pagesRef : null}>
                                <button
                                    onClick={() => {
                                        if (link.dropdownType === 'categories') setCatDropdown(!catDropdown);
                                        else if (link.dropdownType === 'pages') setPagesDropdown(!pagesDropdown);
                                        else navigate(link.path);
                                    }}
                                    className={`group flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive(link) ? 'text-amber-500' : 'text-stone-200 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    {link.dropdownType && (
                                        <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${(link.dropdownType === 'categories' && catDropdown) ||
                                                (link.dropdownType === 'pages' && pagesDropdown) ? 'rotate-180' : ''}`} />
                                    )}
                                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-amber-600 transition-all duration-300 ${isActive(link) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </button>

                                {link.dropdownType === 'categories' && catDropdown && (
                                    <div className="absolute top-full left-0 mt-4 w-48 bg-white rounded-xl shadow-2xl border border-stone-100 py-2 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => {
                                                    navigate(`/category/${cat}`);
                                                    setCatDropdown(false);
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm font-bold text-stone-600 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {link.dropdownType === 'pages' && pagesDropdown && (
                                    <div className="absolute top-full left-0 mt-4 w-48 bg-white rounded-xl shadow-2xl border border-stone-100 py-2 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                                        {additionalPages.map((page) => (
                                            <button
                                                key={page.name}
                                                onClick={() => {
                                                    navigate(page.path);
                                                    setPagesDropdown(false);
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm font-bold text-stone-600 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                                            >
                                                {page.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 md:gap-5">
                        <Link to="/wishlist" className="relative p-2 text-stone-200 hover:text-rose-400 transition-colors cursor-pointer" aria-label="Wishlist">
                            <HiOutlineHeart className="w-6 h-6" />
                            {wishlistCount > 0 && (
                                <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        <Link to="/cart" className="relative p-2 text-stone-200 hover:text-amber-400 transition-colors" aria-label="Cart">
                            <HiOutlineShoppingBag className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute top-1 right-1 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <div className="relative group hidden sm:block">
                            <Link to={user ? "/profile" : "/login"} className="p-2 text-stone-200 hover:text-amber-400 transition-colors" aria-label="Account">
                                <div className="flex items-center gap-2">
                                    <HiOutlineUser className="w-6 h-6" />
                                    {user && <span className="text-xs font-bold hidden xl:block truncate max-w-[80px]">{user.name}</span>}
                                </div>
                            </Link>

                            {user && (
                                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="bg-white rounded-2xl shadow-2xl border border-stone-100 py-3 min-w-[200px] overflow-hidden">
                                        <div className="px-5 py-3 border-b border-stone-100 mb-1 bg-stone-50/50">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-0.5">Account</p>
                                            <p className="text-sm font-black text-stone-900 truncate">{user.name}</p>
                                        </div>
                                        <Link to="/profile" className="flex items-center gap-3 px-5 py-3 text-sm font-bold text-stone-600 hover:text-amber-600 hover:bg-amber-50 transition-colors">
                                            <HiOutlineUser className="w-5 h-5" />
                                            <span>My Profile</span>
                                        </Link>
                                        <Link to="/orders" className="flex items-center gap-3 px-5 py-3 text-sm font-bold text-stone-600 hover:text-amber-600 hover:bg-amber-50 transition-colors">
                                            <HiOutlineShoppingBag className="w-5 h-5" />
                                            <span>My Orders</span>
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-3 w-full px-5 py-3 text-sm font-bold text-rose-500 hover:bg-rose-50 transition-colors border-t border-stone-100 mt-1 text-left"
                                        >
                                            <HiLogout className="w-5 h-5" />
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            className="lg:hidden p-2 text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`} onClick={() => setIsOpen(false)} />

            <aside className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transition-transform duration-500 transform lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full bg-white shadow-lg py-3">
                    <div className="p-6 flex items-center justify-between border-b border-stone-200 bg-white">
                        <span className="font-bold text-xl text-stone-800">Menu</span>
                        <button onClick={() => setIsOpen(false)} className="p-2 text-stone-500 hover:text-stone-800">
                            <HiX className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <button
                                    onClick={() => {
                                        if (link.dropdownType === 'categories') setCatDropdown(!catDropdown);
                                        else if (link.dropdownType === 'pages') setPagesDropdown(!pagesDropdown);
                                        else {
                                            navigate(link.path);
                                            setIsOpen(false);
                                        }
                                    }}
                                    className={`flex items-center justify-between w-full text-lg font-medium transition-all ${isActive(link) ? 'text-amber-600 translate-x-2' : 'text-stone-700 hover:text-amber-600'
                                        }`}
                                >
                                    {link.name}
                                    {link.dropdownType && <HiChevronDown className={`w-5 h-5 transition-transform duration-300 ${(link.dropdownType === 'categories' && catDropdown) ||
                                            (link.dropdownType === 'pages' && pagesDropdown) ? 'rotate-180' : ''}`} />}
                                </button>

                                {link.dropdownType === 'categories' && catDropdown && (
                                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-amber-100 pl-4">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => {
                                                    navigate(`/category/${cat}`);
                                                    setIsOpen(false);
                                                    setCatDropdown(false);
                                                }}
                                                className="block w-full text-left text-sm font-bold text-stone-500 hover:text-amber-600 py-1"
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {link.dropdownType === 'pages' && pagesDropdown && (
                                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-amber-100 pl-4">
                                        {additionalPages.map((page) => (
                                            <button
                                                key={page.name}
                                                onClick={() => {
                                                    navigate(page.path);
                                                    setIsOpen(false);
                                                    setPagesDropdown(false);
                                                }}
                                                className="block w-full text-left text-sm font-bold text-stone-500 hover:text-amber-600 py-1"
                                            >
                                                {page.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {user && (
                            <>
                                <Link
                                    to="/profile"
                                    className={`flex items-center gap-3 text-lg font-medium transition-all ${location.pathname === "/profile" ? 'text-amber-600 translate-x-2' : 'text-stone-700 hover:text-amber-600'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <HiOutlineUser className="w-5 h-5 text-amber-600" />
                                    <span>My Profile</span>
                                </Link>
                                <Link
                                    to="/orders"
                                    className={`flex items-center gap-3 text-lg font-medium transition-all ${location.pathname === "/orders" ? 'text-amber-600 translate-x-2' : 'text-stone-700 hover:text-amber-600'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <HiOutlineShoppingBag className="w-5 h-5 text-amber-600" />
                                    <span>My Orders</span>
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="p-6 border-t border-stone-200 bg-white">
                        {user ? (
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-2 w-full py-3 bg-stone-800 text-white rounded-xl font-bold shadow-lg transition-colors"
                            >
                                <HiLogout className="w-5 h-5" />
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-amber-600 text-white rounded-xl font-bold shadow-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <HiOutlineUser className="w-5 h-5" />
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </aside>
        </nav>
    );
};

export default Navbar;
