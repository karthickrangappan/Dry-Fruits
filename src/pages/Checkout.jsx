import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader";

const Checkout = () => {
    const { checkoutItems, user, addOrder, showToast } = useContext(ShopContext);
    const navigate = useNavigate();

    const currentCheckoutTotal = checkoutItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    useEffect(() => {
        if (checkoutItems.length === 0) {
            navigate('/orders');
        }
    }, [checkoutItems, navigate]);

    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
    });

    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                fullName: user.name || "",
                email: user.email || ""
            }));
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { placeholder, value } = e.target;
        const nameMap = {
            "Full Name": "fullName",
            "Email": "email",
            "Address": "address",
            "City": "city",
            "Postal Code": "postalCode",
        };
        setFormData((prev) => ({ ...prev, [nameMap[placeholder]]: value }));
    };

    const handlePlaceOrder = () => {
        if (!user) {
            showToast("Please login to continue");
            return;
        }

        if (checkoutItems.length === 0) {
            showToast("Checkout is empty");
            return;
        }

        const { fullName, email, address, city, postalCode } = formData;
        if (!fullName || !email || !address || !city || !postalCode) {
            showToast("Please fill in all the billing details");
            return;
        }

        if (paymentMethod === "cod") {
            addOrder(formData);
            showToast("Order placed successfully with Cash on Delivery ✅");
            navigate("/orders");
        } else {
            handleRazorpay();
        }
    };

    const handleRazorpay = () => {
        if (!window.Razorpay) {
            showToast("Razorpay SDK failed to load.");
            return;
        }

        const options = {
            key: "rzp_test_2ORD27rb7vGhwj",
            amount: currentCheckoutTotal * 100,
            currency: "INR",
            name: "Dry Fruits Shop",
            description: "Order Payment",
            handler: function (response) {
                addOrder(formData);
                showToast("Payment successful! Order Placed ✅");
                navigate("/orders");
            },
            prefill: {
                name: formData.fullName || user?.name || "",
                email: formData.email || user?.email || "",
            },
            theme: {
                color: "#d97706",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <main className="bg-stone-50 min-h-screen">
            <PageHeader 
                title="Secure Your Purchase"
                subtitle="Complete your order by providing your shipping details and choosing a preferred payment method."
            />
            
            <section className="py-16 pb-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        
                        <div className="flex-grow bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] border border-stone-100 shadow-xl">
                            
                            <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 mb-10 tracking-tight">
                                Shipping <span className="text-amber-600 italic font-serif">Information</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                
                                <div className="md:col-span-2">
                                    <label className="text-xs font-bold text-stone-400 mb-2 block">
                                        Full Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-stone-200 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 text-stone-900 font-semibold focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none shadow-sm text-sm md:text-base"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="text-xs font-bold text-stone-400 mb-2 block">
                                        Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-stone-200 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 text-stone-900 font-semibold focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none shadow-sm text-sm md:text-base"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="text-xs font-bold text-stone-400 mb-2 block">
                                        Address <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                                        rows="3"
                                        className="w-full bg-white border border-stone-200 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 text-stone-900 font-semibold focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none shadow-sm resize-none text-sm md:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-stone-400 mb-2 block">
                                        City <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-stone-200 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 text-stone-900 font-semibold focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none shadow-sm text-sm md:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-stone-400 mb-2 block">
                                        Postal Code <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Postal Code"
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-stone-200 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 text-stone-900 font-semibold focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none shadow-sm text-sm md:text-base"
                                    />
                                </div>
                            </div>

                            <div className="mt-16">
                                <h3 className="text-xl font-black text-stone-900 mb-8">Payment Method</h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    
                                    <label className={`flex items-center gap-4 p-4 md:p-6 rounded-2xl md:rounded-3xl border-2 transition-all cursor-pointer hover:scale-[1.02] hover:shadow-lg ${paymentMethod === 'cod' ? 'border-amber-500 bg-amber-50/50' : 'border-stone-200 bg-white'}`}>
                                        <input
                                            type="radio"
                                            value="cod"
                                            checked={paymentMethod === "cod"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-4 md:w-5 h-4 md:h-5 accent-amber-600"
                                        />
                                        <div>
                                            <p className="font-bold text-sm md:text-base">Cash on Delivery</p>
                                            <p className="text-[10px] md:text-xs text-stone-400">Pay at Doorstep</p>
                                        </div>
                                    </label>

                                    <label className={`flex items-center gap-4 p-6 rounded-3xl border-2 transition-all cursor-pointer hover:scale-[1.02] hover:shadow-lg ${paymentMethod === 'razorpay' ? 'border-amber-500 bg-amber-50/50' : 'border-stone-200 bg-white'}`}>
                                        <input
                                            type="radio"
                                            value="razorpay"
                                            checked={paymentMethod === "razorpay"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-5 h-5 accent-amber-600"
                                        />
                                        <div>
                                            <p className="font-bold">Online Payment</p>
                                            <p className="text-xs text-stone-400">Secure Checkout</p>
                                        </div>
                                    </label>

                                </div>
                            </div>
                        </div>

                        <div className="lg:w-96 w-full">
                            <div className="bg-gradient-to-br from-white to-stone-50 p-8 rounded-[3rem] border border-stone-100 sticky top-32 shadow-2xl shadow-stone-900/5">

                                <h2 className="text-2xl font-black text-stone-900 mb-8">
                                    Your <span className="text-amber-600 italic font-serif">Order</span>
                                </h2>

                                <div className="space-y-6 mb-10 max-h-[300px] overflow-y-auto pr-2">
                                    {checkoutItems.map((item) => (
                                        <div key={item.id} className="flex justify-between">
                                            <div>
                                                <p className="font-semibold">{item.name}</p>
                                                <p className="text-xs text-stone-400">Qty: {item.quantity}</p>
                                            </div>
                                            <p className="font-bold">₹{item.price * item.quantity}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4 pt-6 border-t">
                                    <div className="flex justify-between text-sm">
                                        <span>Subtotal</span>
                                        <span>₹{currentCheckoutTotal}</span>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>

                                    <div className="flex justify-between text-xl font-bold pt-4">
                                        <span>Total</span>
                                        <span>₹{currentCheckoutTotal}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handlePlaceOrder}
                                    className="w-full mt-8 bg-gradient-to-r from-stone-900 to-stone-700 text-white py-3.5 md:py-5 rounded-2xl md:rounded-3xl font-bold uppercase text-xs md:text-sm hover:from-amber-600 hover:to-amber-500 transition-all active:scale-95 shadow-xl"
                                >
                                    Confirm Order
                                </button>

                                <p className="text-center text-xs text-stone-400 mt-6">
                                    Secure Checkout • SSL Protected
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Checkout;