import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, cartTotal, user, clearCart, addOrder } = useContext(ShopContext);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

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
      alert("Please login to continue");
      return;
    }

    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    const { fullName, email, address, city, postalCode } = formData;
    if (!fullName || !email || !address || !city || !postalCode) {
      alert("Please fill in all the billing details");
      return;
    }

    if (paymentMethod === "cod") {
      addOrder(formData);
      alert("Order placed successfully with Cash on Delivery ✅");
      navigate("/orders");
    } else {
      handleRazorpay();
    }
  };

  const handleRazorpay = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    const options = {
      key: "rzp_test_2ORD27rb7vGhwj",
      amount: cartTotal * 100,
      currency: "INR",
      name: "Dry Fruits Shop",
      description: "Order Payment",
      handler: function (response) {
        addOrder(formData);
        alert("Payment successful \nPayment ID: " + response.razorpay_payment_id);
        navigate("/orders");
      },
      prefill: {
        name: formData.fullName || user?.name || "",
        email: formData.email || user?.email || "",
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
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full mb-3 p-3 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full mb-3 p-3 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full mb-3 p-3 border rounded"
            required
          />
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full mb-3 p-3 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="w-full mb-3 p-3 border rounded"
            required
          />

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
