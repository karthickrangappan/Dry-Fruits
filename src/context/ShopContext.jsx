import React, { createContext, useState, useEffect, useContext } from 'react';
import { HiX } from 'react-icons/hi';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlistItems, setWishlistItems] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlistItems');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [orders, setOrders] = useState([]);
    const [toast, setToast] = useState(null);
    const [toastTimeout, setToastTimeout] = useState(null);
    const [checkoutItems, setCheckoutItems] = useState([]);

    const dismissToast = () => {
        if (toastTimeout) clearTimeout(toastTimeout);
        setToast(null);
        setToastTimeout(null);
    };

    const showToast = (message) => {
        dismissToast();
        setToast(message);
        const timeout = setTimeout(() => {
            setToast(null);
            setToastTimeout(null);
        }, 3000);
        setToastTimeout(timeout);
    };

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            const savedOrders = localStorage.getItem(`orders_${user.email}`);
            setOrders(savedOrders ? JSON.parse(savedOrders) : []);
        } else {
            localStorage.removeItem('user');
            setOrders([]);
        }
    }, [user]);

    const addOrder = (orderDetails) => {
        const nextOrderNum = orders.length + 1;
        const formattedId = `#ORD${String(nextOrderNum).padStart(4, '0')}`;
        
        const currentCheckoutTotal = checkoutItems.reduce((total, item) => total + (item.price * item.quantity), 0);

        const newOrder = {
            ...orderDetails,
            id: formattedId,
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            status: 'Processing',
            items: [...checkoutItems],
            total: currentCheckoutTotal
        };

        setOrders(prev => {
            const updated = [newOrder, ...prev];
            if (user) {
                localStorage.setItem(`orders_${user.email}`, JSON.stringify(updated));
            }
            return updated;
        });

        const isCartCheckout = checkoutItems.length === cartItems.length && 
                              checkoutItems.every((item, index) => item.id === cartItems[index].id);
        
        if (isCartCheckout) {
            clearCart();
        }
        setCheckoutItems([]);
    };

    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                showToast(`Updated ${product.name} quantity in cart!`);
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            showToast(`${product.name} added to cart!`);
            return [...prevItems, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const incrementQuantity = (productId) => {
        setCartItems(prevItems =>
            prevItems.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)
        );
    };

    const decrementQuantity = (productId) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.id === productId) {
                    const newQty = item.quantity - 1;
                    return newQty > 0 ? { ...item, quantity: newQty } : item;
                }
                return item;
            })
        );
    };

    const clearCart = () => setCartItems([]);
    const setImmediateCheckout = (product, quantity = 1) => {
        setCheckoutItems([{ ...product, quantity }]);
    };
    const setCartCheckout = () => {
        setCheckoutItems([...cartItems]);
    };
    const clearWishlist = () => setWishlistItems([]);

    const addToWishlist = (product) => {
        setWishlistItems(prev => {
            if (prev.some(item => item.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems(prev => prev.filter(item => item.id !== productId));
    };

    const toggleWishlist = (product) => {
        if (wishlistItems.some(item => item.id === product.id)) {
            removeFromWishlist(product.id);
            showToast(`${product.name} removed from wishlist!`);
        } else {
            addToWishlist(product);
            showToast(`${product.name} added to wishlist!`);
        }
    };

    const login = (userData) => {
        setUser(userData);
        const savedUserCart = localStorage.getItem(`cart_${userData.email}`);
        if (savedUserCart) {
            const userItems = JSON.parse(savedUserCart);
            setCartItems(prev => {
                const merged = [...userItems];
                prev.forEach(item => {
                    const existing = merged.find(i => i.id === item.id);
                    if (existing) {
                        existing.quantity += item.quantity;
                    } else {
                        merged.push(item);
                    }
                });
                return merged;
            });
        }

        const savedUserWishlist = localStorage.getItem(`wishlist_${userData.email}`);
        if (savedUserWishlist) {
            const userWish = JSON.parse(savedUserWishlist);
            setWishlistItems(prev => {
                const merged = [...userWish];
                prev.forEach(item => {
                    if (!merged.some(i => i.id === item.id)) {
                        merged.push(item);
                    }
                });
                return merged;
            });
        }
    };

    const logout = () => {
        setUser(null);
        clearCart();
        clearWishlist();
        localStorage.removeItem('cartItems');
        localStorage.removeItem('wishlistItems');
    };

    useEffect(() => {
        if (user) {
            localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartItems));
        } else {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems, user]);

    useEffect(() => {
        if (user) {
            localStorage.setItem(`wishlist_${user.email}`, JSON.stringify(wishlistItems));
        } else {
            localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        }
    }, [wishlistItems, user]);

    const cartCount = cartItems.length;
    const wishlistCount = wishlistItems.length;
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const value = {
        cartItems,
        wishlistItems,
        user,
        orders,
        addOrder,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        checkoutItems,
        setImmediateCheckout,
        setCartCheckout,
        setCheckoutItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        login,
        logout,
        cartCount,
        wishlistCount,
        cartTotal,
        showToast,
        dismissToast
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
            {toast && (
                <div className="fixed top-24 right-4 z-[100] animate-in fade-in slide-in-from-right-5 duration-300">
                    <div className="bg-white border-2 border-stone-900 text-stone-900 px-6 py-4 rounded-2xl flex items-center gap-4 min-w-[280px]">
                        <p className="flex-1 text-xs font-black uppercase tracking-widest">{toast}</p>
                        <button onClick={dismissToast} className="hover:rotate-90 transition-transform">
                            <HiX className="text-xl" />
                        </button>
                    </div>
                </div>
            )}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
};
