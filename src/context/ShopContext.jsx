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
            // Load user specific orders
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

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

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
    };

    const logout = () => {
        setUser(null);
        clearCart(); 
        clearWishlist();
    };

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
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
