import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiChevronDown, HiOutlineTruck, HiOutlineShieldCheck } from "react-icons/hi";
import PageHeader from "../components/layout/PageHeader";

export default function OrdersPage() {
  const { orders } = useShop();
  const [expandedOrders, setExpandedOrders] = useState({});

  const toggleOrder = (orderId) => {
    setExpandedOrders(prev => ({
      ...prev,
      [orderId]: !prev[orderId]
    }));
  };

  if (orders.length === 0) {
    return (
      <main className="bg-white min-h-screen">
        <PageHeader 
          title="Your Order History"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
            <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 text-stone-300 shadow-inner border border-stone-100">
               <HiOutlineShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-stone-900 mb-4 tracking-tighter">No Orders Yet</h2>
            <p className="text-stone-500 mb-10 max-w-sm mx-auto font-medium leading-relaxed">Looks like you haven't placed any orders yet. Start shopping to fill your history!</p>
            <Link to="/shop" className="px-8 md:px-12 py-3 md:py-5 bg-amber-600 text-white font-black rounded-2xl md:rounded-3xl shadow-2xl shadow-amber-600/20 hover:bg-stone-900 transition-all transform hover:-translate-y-1 group">
              <span className="uppercase tracking-widest text-[10px] md:text-xs">Explore the Shop</span>
            </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-20">
      <PageHeader 
        title="Your Order History"
      />

      <section className="bg-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h1 className="text-2xl md:text-4xl font-black text-stone-900 tracking-tighter">
                My <span className="text-amber-600 italic font-serif text-3xl md:text-5xl">Orders</span>
            </h1>
            <p className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">
                Discovery: {orders.length} Premium Treasures tracking
            </p>
          </div>

          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-stone-50 rounded-[3rem] border border-stone-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:bg-white hover:border-amber-100">
                <button 
                  onClick={() => toggleOrder(order.id)}
                  className="w-full text-left bg-white/50 backdrop-blur-md px-4 md:px-10 py-6 md:py-8 flex flex-wrap items-center justify-between gap-4 md:gap-6 border-b border-stone-100 group-hover:bg-white transition-colors"
                >
                    <div className="flex flex-wrap gap-4 md:gap-12">
                       <div>
                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1 md:mb-2">Order ID</p>
                            <p className="text-xs md:text-xl font-black text-stone-900 leading-none">{order.id}</p>
                       </div>
                       <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Placed On</p>
                            <p className="text-stone-900 font-bold">{order.date}</p>
                       </div>
                       <div>
                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1 md:mb-2">Total Value</p>
                            <p className="text-stone-900 font-black text-sm md:text-base">₹{order.total}</p>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-3 md:gap-6">
                       <div className={`px-3 md:px-6 py-1.5 md:py-3 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${
                          order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' : 
                          order.status === 'Shipped' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                       }`}>
                            {order.status}
                       </div>
                       <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center bg-stone-100 text-stone-400 transition-transform duration-500 ${expandedOrders[order.id] ? 'rotate-180 bg-stone-900 text-white shadow-xl' : ''}`}>
                          <HiChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                       </div>
                    </div>
                </button>

                {expandedOrders[order.id] && (
                  <div className="p-4 md:p-10 animate-in slide-in-from-top-4 fade-in duration-500">
                      <div className="mb-8 md:mb-10 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-stone-100 shadow-sm text-[10px] md:text-sm">
                         <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
                            <div className="flex items-center gap-3 md:gap-4 group/info">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-50 rounded-xl md:rounded-2xl flex items-center justify-center text-amber-600 group-hover/info:bg-stone-900 group-hover/info:text-white transition-colors">
                                   <HiOutlineTruck className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                   <p className="text-[8px] md:text-[9px] font-black text-stone-400 uppercase tracking-widest">Shipping Destination</p>
                                   <p className="text-xs md:text-sm font-black text-stone-900">{order.address}, {order.city}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4 group/info">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-600 group-hover/info:bg-stone-900 group-hover/info:text-white transition-colors">
                                   <HiOutlineShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                   <p className="text-[8px] md:text-[9px] font-black text-stone-400 uppercase tracking-widest">Payment Verification</p>
                                   <p className="text-xs md:text-sm font-black text-stone-900">Success Verified</p>
                                </div>
                            </div>
                         </div>
                         <div className="text-left md:text-right">
                             <p className="text-[8px] md:text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Customer Profile</p>
                             <p className="text-stone-900 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">{order.fullName || 'Guest Explorer'}</p>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {order.items?.map((item, idx) => (
                              <div key={idx} className="bg-white p-6 rounded-[2rem] border border-stone-100 flex items-center gap-6 group/item hover:border-amber-200 transition-all hover:shadow-xl shadow-stone-200/20">
                                   <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 flex-shrink-0 shadow-inner group-hover/item:scale-105 transition-transform duration-700">
                                       <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                   </div>
                                   <div className="flex-1">
                                       <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-amber-600 mb-0.5 md:mb-1">{item.category || 'Treat'}</p>
                                       <p className="text-sm md:text-lg font-black text-stone-900 leading-tight mb-1 md:mb-2">{item.name}</p>
                                       <div className="flex items-center justify-between">
                                          <p className="text-[10px] md:text-xs font-bold text-stone-400 tracking-wide">Qty: <span className="text-stone-900">{item.quantity}</span></p>
                                          <p className="text-xs md:text-sm font-black text-stone-900">₹{item.price * item.quantity}</p>
                                       </div>
                                   </div>
                              </div>
                          ))}
                      </div>

                      {/* <div className="mt-10 pt-10 border-t border-stone-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-stone-300">
                          <p>Order Summary Detailed Report</p>
                          <p className="text-amber-600 animate-pulse">Tracking Active</p>
                      </div> */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

