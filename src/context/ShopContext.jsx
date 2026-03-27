import React, { createContext, useState, useEffect, useContext } from 'react';

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

        const newOrder = {
            ...orderDetails,
            id: formattedId,
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
            status: 'Processing',
            items: [...cartItems],
            total: cartTotal
        };

        setOrders(prev => {
            const updated = [newOrder, ...prev];
            if (user) {
                localStorage.setItem(`orders_${user.email}`, JSON.stringify(updated));
            }
            return updated;
        });
        clearCart();
    };

    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
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
        } else {
            addToWishlist(product);
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
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        login,
        logout,
        cartCount,
        wishlistCount,
        cartTotal
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
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
