import React from 'react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi';
import PageHeader from '../components/layout/PageHeader';

const Wishlist = () => {
    const { wishlistItems } = useShop();

    if (wishlistItems.length === 0) {
        return (
            <main className="bg-stone-50 min-h-screen">
                <PageHeader 
                    title="Your Favorites Collection"
                    subtitle="Track all the nature's treasures you love in one curated list. Start hearting your favorites to see them here."
                    breadcrumbs={[{ name: "Wishlist" }]}
                />
                <div className="max-w-7xl mx-auto px-4 text-center py-20">
                    <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse shadow-xl shadow-rose-100/50">
                        <HiOutlineHeart className="w-10 h-10 text-rose-300" />
                    </div>
                    <h2 className="text-xl md:text-3xl font-black text-stone-900 mb-4 tracking-tighter">Your wishlist is empty</h2>
                    <p className="text-stone-500 mb-10 max-w-sm mx-auto font-medium leading-relaxed">
                        Start hearting your favorites and they'll appear here for you to find easily later!
                    </p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-3 px-8 md:px-12 py-3 md:py-5 bg-stone-900 text-white rounded-2xl md:rounded-3xl font-black shadow-2xl shadow-stone-900/10 hover:bg-amber-600 transition-all transform hover:-translate-y-1 group"
                    >
                        <span className="uppercase tracking-widest text-[10px] md:text-xs">Back to Shopping</span>
                        <HiOutlineShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-stone-50 min-h-screen pb-20">
            <PageHeader 
                title="Your Personal Wishlist"
                subtitle="A curated selection of premium dry fruits and nuts you've marked as your absolute favorites."
                breadcrumbs={[{ name: "Wishlist" }]}
            />
            
            <section className="bg-white py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tighter">Saved <span className="text-amber-600 italic font-serif">Items</span></h2>
                        <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mt-1">{wishlistItems.length} Products in your collection</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {wishlistItems.map((product) => (
                            <div key={product.id} className="animate-in fade-in slide-in-from-bottom duration-700">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Wishlist;
