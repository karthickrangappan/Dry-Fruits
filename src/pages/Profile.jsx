import React from "react";
import { useShop } from "../context/ShopContext";
import PageHeader from "../components/layout/PageHeader";

const Profile = () => {
    const { user, orders, cartCount } = useShop();

    if (!user) {
        return (
            <main className="bg-stone-50 min-h-screen">
                <PageHeader 
                    title="Your Profile"
                    subtitle="Access your personal dashbaord and manage your preferences."
                    breadcrumbs={[{ name: "Profile" }]}
                />
                <div className="max-w-4xl mx-auto px-4 py-20 -mt-10 relative z-20">
                    <div className="bg-white p-12 md:p-20 rounded-[3.5rem] shadow-2xl shadow-stone-200/50 border border-stone-100 text-center">
                        <h1 className="text-3xl font-black text-stone-900 mb-4">Access Denied</h1>
                        <p className="text-stone-500 font-medium">Please login to view your profile and manage your account.</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-stone-50 min-h-screen pb-20">
            <PageHeader 
                title="Your Personal Dashboard"
                subtitle="Manage your account details, track your nutritional journey, and view your order history."
                breadcrumbs={[{ name: "Profile" }]}
            />
            
            <section className="max-w-5xl mx-auto px-4 md:px-8 -mt-10 relative z-20">
                <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-stone-200/50 border border-stone-100">
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-amber-200 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 md:border-8 border-stone-50 bg-amber-100 flex items-center justify-center text-3xl md:text-6xl text-amber-600 font-black shadow-xl relative z-10 transform transition-transform group-hover:scale-105">
                                {user.name?.[0]?.toUpperCase()}
                            </div>
                        </div>

                        <div className="flex-1 space-y-8 w-full">
                            <div className="border-b border-stone-100 pb-8 text-center md:text-left">
                                <h1 className="text-2xl md:text-4xl font-black text-stone-900 mb-2 tracking-tighter">{user.name}</h1>
                                <p className="text-stone-400 font-bold uppercase tracking-widest text-xs flex items-center justify-center md:justify-start gap-2">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    Active Member
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] px-1">Email Address</label>
                                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 font-bold text-stone-800">
                                        {user.email}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] px-1">Account Type</label>
                                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 font-bold text-amber-600">
                                        Premium Customer
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-stone-100">
                                <h2 className="text-xl font-black text-stone-900 mb-6 tracking-tight">Account Overview</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    <div className="bg-stone-50 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-stone-100 text-center hover:bg-white hover:shadow-xl transition-all group">
                                        <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2 group-hover:text-amber-600 transition-colors">Total Orders</p>
                                        <p className="text-xl md:text-3xl font-black text-stone-900">{orders?.length || 0}</p>
                                    </div>
                                    <div className="bg-stone-50 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-stone-100 text-center hover:bg-white hover:shadow-xl transition-all group">
                                        <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2 group-hover:text-emerald-600 transition-colors">cart</p>
                                        <p className="text-xl md:text-3xl font-black text-stone-900">{cartCount || 0}</p>
                                    </div>
                                    <div className="bg-stone-50 p-6 rounded-3xl border border-stone-100 text-center hover:bg-white hover:shadow-xl transition-all group col-span-2 md:col-span-1">
                                        <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-2 group-hover:text-blue-600 transition-colors">Status</p>
                                        <p className="text-xl font-black text-emerald-600 uppercase tracking-tighter">Verified</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Profile;
