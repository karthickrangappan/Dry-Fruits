import React from 'react';
import { useShop } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { HiPlus, HiMinus, HiX, HiArrowRight, HiOutlineShoppingBag, HiChevronRight } from 'react-icons/hi';


const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, cartTotal } = useShop();
    const navigate = useNavigate();

    const shipping = cartTotal > 500 ? 0 : 50;
    const total = cartTotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <HiOutlineShoppingBag className="w-10 h-10 text-stone-300" />
                    </div>
                    <h2 className="text-3xl font-black text-stone-900 mb-4">Your basket is empty</h2>
                    <p className="text-stone-500 mb-10 max-w-sm mx-auto font-medium">
                        Looks like you haven't added any of our premium treasures to your cart yet.
                    </p>
                    <Link 
                        to="/shop" 
                        className="inline-flex items-center gap-2 px-10 py-4 bg-amber-600 text-white rounded-2xl font-bold shadow-lg shadow-amber-600/20 hover:bg-stone-900 transition-all transform hover:-translate-y-1"
                    >
                        Explore the Shop
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-18 pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mt-5">
                 <div className="flex flex-col md:flex-row md:items-end justify-center gap-8 mb-16">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-black text-center text-stone-900 mb-4 tracking-tighter">
                        Your <span className="text-amber-600">Shopping</span>
                    </h1>
                    <p className="text-stone-500 font-medium text-lg">
                        Keep track of all the nature's treats you love in one place.
                    </p>
                </div>
            </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <div 
                                key={item.id} 
                                className="bg-stone-200 p-6 rounded-3xl border border-stone-100 flex flex-col sm:flex-row items-center gap-8 group transition-all hover:shadow-xl hover:shadow-stone-200/50"
                            >
                                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-stone-50 flex-shrink-0">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="flex-grow text-center sm:text-left ">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">{item.category}</p>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">{item.name}</h3>
                                    <p className="text-lg font-black text-stone-900">₹{item.price}</p>
                                </div>

                                <div className="flex items-center bg-stone-100 rounded-2xl p-1 shadow-inner ring-1 ring-stone-200">
                                    <button 
                                        onClick={() => decrementQuantity(item.id)}
                                        className="p-3 text-stone-600 hover:text-amber-600 hover:bg-white rounded-xl transition-all"
                                    >
                                        <HiMinus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center text-sm font-black text-stone-900">{item.quantity}</span>
                                    <button 
                                        onClick={() => incrementQuantity(item.id)}
                                        className="p-3 text-stone-600 hover:text-amber-600 hover:bg-white rounded-xl transition-all"
                                    >
                                        <HiPlus className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="text-right sm:w-28">
                                    <p className="text-[10px] font-bold text-stone-400 uppercase mb-1">Total</p>
                                    <p className="text-lg font-black text-stone-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                                </div>

                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-3 text-stone-300 hover:text-rose-500 transition-colors"
                                >
                                    <HiX className="w-6 h-6" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {}
                    <div className="lg:col-span-1">
                        <div className="bg-stone-200 p-8 rounded-[40px] border border-stone-100 shadow-2xl shadow-stone-200/50 sticky top-32">
                            <h2 className="text-2xl font-black text-stone-900 mb-8 tracking-tight">Order Summary</h2>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-stone-500 font-medium">
                                    <span>Subtotal</span>
                                    <span className="text-stone-900 font-bold">₹{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-stone-500 font-medium">
                                    <span>Shipping</span>
                                    <span className={shipping === 0 ? "text-emerald-500 font-bold" : "text-stone-900 font-bold"}>
                                        {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="pt-4 border-t border-stone-100 flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Total to pay</p>
                                        <p className="text-4xl font-black text-stone-900 tracking-tighter">₹{total.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>

                            <button 
                            onClick={()=>navigate("/checkout")}
                            className="w-full bg-amber-600 text-white py-5 rounded-3xl font-black flex items-center justify-center gap-3 hover:bg-amber-700 transition-all shadow-xl shadow-stone-900/10 transform active:scale-[0.98] group">
                                <span>Proceed to Checkout</span>
                                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
