import React from "react";
import { useShop } from "../context/ShopContext";

const Profile = () => {
    const { user } = useShop();

    if (!user) {
        return (
            <div className="max-w-4xl mx-auto p-12 text-center">
                <h1 className="text-3xl font-bold">Please login to view profile</h1>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-18 px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-center gap-8 mb-16">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-black text-center text-stone-900 mb-4 tracking-tighter">
                        Your <span className="text-amber-700">Profile</span>
                    </h1>
                    <p className="text-stone-500 font-medium text-lg">
                        Keep track of all the nature's treats you love in one place.
                    </p>
                </div>
            </div>
            <div className="bg-white w-full p-10 rounded-3xl shadow-2xl overflow-hidden border border-stone-100">

                <div className="p-10 -mt-10 overflow-visible">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-32 h-32 rounded-full border-4 border-white bg-amber-100 flex items-center justify-center text-5xl text-amber-600 font-bold shadow-lg">
                            {user.name?.[0]?.toUpperCase()}
                        </div>

                        <div className="flex-1 space-y-6">
                            <div>
                                <label className="text-sm font-bold text-stone-500 uppercase tracking-widest">Name</label>
                                <p className="text-2xl font-black text-stone-900">{user.name}</p>
                            </div>

                            <div>
                                <label className="text-sm font-bold text-stone-500 uppercase tracking-widest">Email</label>
                                <p className="text-xl font-bold text-stone-800">{user.email}</p>
                            </div>

                            <div className="pt-6 border-t border-stone-100">
                                <h2 className="text-xl font-bold mb-4">Account Stats</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                                        <p className="text-stone-500 text-xs font-bold uppercase">Orders</p>
                                        <p className="text-2xl font-black text-amber-600">0</p>
                                    </div>
                                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                                        <p className="text-stone-500 text-xs font-bold uppercase">Membership</p>
                                        <p className="text-2xl font-black text-green-600">Free</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
