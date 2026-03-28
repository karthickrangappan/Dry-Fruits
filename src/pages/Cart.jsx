import React from 'react';
import { useShop } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { HiPlus, HiMinus, HiX, HiArrowRight, HiOutlineShoppingBag } from 'react-icons/hi';
import PageHeader from '../components/layout/PageHeader';

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, cartTotal } = useShop();
    const navigate = useNavigate();

    const shipping = cartTotal > 500 ? 0 : 50;
    const total = cartTotal + shipping;

    if (cartItems.length === 0) {
        return (
            <main className="bg-stone-50 min-h-screen">
                <PageHeader
                    title="Your Shopping Basket"
                    subtitle="It looks like your basket is currently empty. Explore our collection to find nature's finest treasures."
                    breadcrumbs={[{ name: "Cart" }]}
                />
                <div className="max-w-7xl mx-auto px-4 text-center py-20">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border border-stone-100">
                        <HiOutlineShoppingBag className="w-10 h-10 text-stone-300" />
                    </div>
                    <h2 className="text-xl md:text-3xl font-black text-stone-900 mb-4">Your basket is empty</h2>
                    <p className="text-stone-500 mb-10 max-w-sm mx-auto font-medium">
                        Looks like you haven't added any of our premium treasures to your cart yet.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 px-6 md:px-10 py-3 md:py-5 bg-amber-600 text-white rounded-2xl md:rounded-3xl font-black shadow-2xl shadow-amber-600/20 hover:bg-stone-900 transition-all transform hover:-translate-y-1 text-xs md:text-base"
                    >
                        Explore the Shop
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-stone-50 min-h-screen pb-20">
            <PageHeader
                title="Your Shopping Basket"
                subtitle="Review your selection of premium dry fruits and proceed to checkout for a healthy lifestyle."
                breadcrumbs={[{ name: "Cart" }]}
            />

            <section className="bg-white py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tighter">My <span className="text-amber-600 italic font-serif">Basket</span></h2>
                            <p className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">{cartItems.length} Treasures selected</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-stone-50 p-6 rounded-[2.5rem] border border-stone-100 flex flex-col sm:flex-row items-center gap-8 group transition-all hover:bg-white hover:shadow-xl"
                                >
                                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl overflow-hidden bg-white flex-shrink-0 border border-stone-100 shadow-sm">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="flex-grow text-center sm:text-left">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">{item.category}</p>
                                        <h3 className="text-sm md:text-xl font-black text-stone-900 mb-1">{item.name}</h3>
                                        <p className="text-sm font-black text-stone-400">Unit Price: <span className="text-stone-900 font-bold">₹{item.price}</span></p>
                                    </div>

                                    <div className="flex items-center bg-white rounded-2xl p-1 shadow-sm border border-stone-100">
                                        <button
                                            onClick={() => decrementQuantity(item.id)}
                                            className="p-2.5 text-stone-400 hover:text-amber-600 hover:bg-stone-50 rounded-xl transition-all"
                                        >
                                            <HiMinus className="w-4 h-4" />
                                        </button>
                                        <span className="w-10 text-center text-sm font-black text-stone-900">{item.quantity}</span>
                                        <button
                                            onClick={() => incrementQuantity(item.id)}
                                            className="p-2.5 text-stone-400 hover:text-amber-600 hover:bg-stone-50 rounded-xl transition-all"
                                        >
                                            <HiPlus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="text-right sm:w-24">
                                        <p className="text-lg font-black text-stone-900">₹{(item.price * item.quantity).toFixed(0)}</p>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-stone-200 hover:text-rose-500 transition-colors"
                                    >
                                        <HiX className="w-6 h-6" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-stone-50 p-8 rounded-[3rem] border border-stone-100 shadow-sm sticky top-32">
                                <h2 className="text-2xl font-black text-stone-900 mb-8 tracking-tighter">Order Summary</h2>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-stone-400 font-black uppercase text-[10px] tracking-widest">
                                        <span>Subtotal</span>
                                        <span className="text-stone-900">₹{cartTotal.toFixed(0)}</span>
                                    </div>
                                    <div className="flex justify-between text-stone-400 font-black uppercase text-[10px] tracking-widest">
                                        <span>Shipping Cost</span>
                                        <span className={shipping === 0 ? "text-emerald-500" : "text-stone-900"}>
                                            {shipping === 0 ? "Complimentary" : `₹${shipping.toFixed(0)}`}
                                        </span>
                                    </div>
                                    <div className="pt-6 border-t border-stone-200 flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-1">Total Amount</p>
                                            <p className="text-2xl md:text-4xl font-black text-stone-900 tracking-tighter">₹{total.toFixed(0)}</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate("/checkout")}
                                    className="w-full bg-stone-900 text-white py-3.5 md:py-5 rounded-2xl md:rounded-3xl font-black flex items-center justify-center gap-3 hover:bg-amber-600 transition-all shadow-xl shadow-stone-900/10 transform active:scale-[0.98] group"
                                >
                                    <span className="uppercase tracking-widest text-[10px]">Secure Checkout</span>
                                    <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </button>

                                <p className="mt-8 text-[10px] font-bold text-stone-400 uppercase tracking-widest flex items-center justify-center gap-2 italic">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                    Secure Encrypted Payment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cart;
