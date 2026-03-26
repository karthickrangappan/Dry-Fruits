import React from 'react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { SingleProductCard } from '../components/product/ProductCard';
import { HiOutlineHeart, HiChevronRight, HiOutlineShoppingBag } from 'react-icons/hi';

const Wishlist = () => {
    const { wishlistItems } = useShop();

    if (wishlistItems.length === 0) {
        return (
            <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                        <HiOutlineHeart className="w-10 h-10 text-rose-300" />
                    </div>
                    <h2 className="text-3xl font-black text-stone-900 mb-4">Your wishlist is empty</h2>
                    <p className="text-stone-500 mb-10 max-w-sm mx-auto font-medium leading-relaxed">
                        Start hearting your favorites and they'll appear here for you to find easily later!
                    </p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-stone-900 text-white rounded-2xl font-bold shadow-2xl shadow-stone-900/10 hover:bg-amber-600 transition-all transform hover:-translate-y-1 group"
                    >
                        <span>Back to Shopping</span>
                        <HiOutlineShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-15 pb-20 bg-stone-50 min-h-screen ">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-center gap-8 mb-16">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-black text-center text-stone-900 mb-4 tracking-tighter">
                            Your <span className="text-rose-500">Wishlist</span>
                        </h1>
                        <p className="text-stone-500 font-medium text-lg">
                            Keep track of all the nature's treats you love in one place.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {wishlistItems.map((product) => (
                        <div key={product.id} className="animate-fade-in transition-all">
                            <SingleProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
