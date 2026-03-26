import React from "react";
import { useShop } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function OrdersPage() {
  const { orders } = useShop();

  if (orders.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-10 text-center">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-400">
           <HiOutlineShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-stone-900 mb-2 tracking-tighter">No Orders Yet</h2>
        <p className="text-stone-500 mb-8 max-w-sm">Looks like you haven't placed any orders yet. Start shopping to fill your history!</p>
        <Link to="/shop" className="px-8 py-4 bg-amber-600 text-white font-black rounded-2xl shadow-xl shadow-amber-600/20 hover:bg-stone-900 transition-all">
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-5xl mx-auto min-h-screen">

      <div className="flex flex-col md:flex-row md:items-end justify-center gap-8 mb-16">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-black text-center text-stone-900 mb-4 tracking-tighter">
                            Your <span className="text-amber-600">Orders</span>
                        </h1>
                        <p className="text-stone-500 font-medium text-lg">
                            Keep track of all the nature's treats you love in one place.
                        </p>
                    </div>
                </div>
      <div className="space-y-10">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-[40px] shadow-2xl shadow-stone-200/50 border border-stone-100 overflow-hidden group hover:shadow-stone-300 transition-all duration-500">
            <div className="bg-stone-50 px-10 py-6 md:py-8 flex flex-wrap items-center justify-between gap-6 border-b border-stone-100">
                <div className="flex gap-12">
                   <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Order ID</p>
                        <p className="text-xl font-black text-stone-900 leading-none">{order.id}</p>
                   </div>
                   <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Placed On</p>
                        <p className="text-stone-900 font-bold">{order.date}</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-6">
                   <div className="hidden sm:block text-right">
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Customer</p>
                        <p className="text-stone-900 font-bold">{order.fullName || 'Guest'}</p>
                   </div>
                   <div className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest ${
                      order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' : 
                      order.status === 'Shipped' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                   }`}>
                        {order.status}
                   </div>
                </div>
            </div>

            <div className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {order.items?.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-5 group/item cursor-default">
                             <div className="w-24 h-24 rounded-[28px] overflow-hidden bg-stone-50 border border-stone-100 flex-shrink-0 shadow-sm shadow-stone-200 transition-all group-hover/item:scale-105">
                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                             </div>
                             <div className="flex-1">
                                 <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">{item.category || 'Treat'}</p>
                                 <p className="text-base font-black text-stone-900 leading-tight mb-1">{item.name}</p>
                                 <p className="text-xs font-bold text-stone-400">Qty: <span className="text-stone-900">{item.quantity}</span> × ₹{item.price}</p>
                             </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-10 border-t border-stone-50 flex flex-wrap items-end justify-between gap-8">
                     <div className="max-w-md">
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Shipping to</p>
                        <p className="text-stone-600 font-bold text-sm leading-relaxed truncate">
                            {order.address}, {order.city} - {order.postalCode}
                        </p>
                     </div>
                     <div className="text-right">
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Total Amount Paid</p>
                        <p className="text-4xl font-black text-stone-900 tracking-tighter">₹{order.total}</p>
                     </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
