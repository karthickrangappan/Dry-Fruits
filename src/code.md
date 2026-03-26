import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Checkout = () => {
  const { cartItems, cartTotal, user } = useContext(ShopContext);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePlaceOrder = () => {
    if (!user) {
      alert("Please login to continue");
      return;
    }

    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (paymentMethod === "cod") {
      alert("Order placed successfully with Cash on Delivery ✅");
    } else {
      handleRazorpay();
    }
  };

  const handleRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // replace with your key
      amount: cartTotal * 100, // paise
      currency: "INR",
      name: "Dry Fruits Shop",
      description: "Order Payment",
      handler: function (response) {
        alert("Payment successful ✅\nPayment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: user?.name || "",
        email: user?.email || "",
      },
      theme: {
        color: "#f59e0b",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <input type="text" placeholder="Full Name" className="w-full mb-3 p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full mb-3 p-3 border rounded" />
          <input type="text" placeholder="Address" className="w-full mb-3 p-3 border rounded" />
          <input type="text" placeholder="City" className="w-full mb-3 p-3 border rounded" />
          <input type="text" placeholder="Postal Code" className="w-full mb-3 p-3 border rounded" />

          {/* Payment Method */}
          <h3 className="text-lg font-semibold mt-4 mb-2">Payment Method</h3>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="razorpay"
                checked={paymentMethod === "razorpay"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Razorpay (UPI / Card / Netbanking)
            </label>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
          )}

          <div className="border-t mt-4 pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span>₹{cartTotal}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-amber-600 text-white py-3 rounded-xl hover:bg-amber-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
