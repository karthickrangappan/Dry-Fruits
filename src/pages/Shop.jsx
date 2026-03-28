import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard, { products } from '../components/product/ProductCard';
import { HiFilter, HiStar, HiOutlineRefresh, HiX } from 'react-icons/hi';
import PageHeader from '../components/layout/PageHeader';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [minRating, setMinRating] = useState(0);
    const [priceRange, setPriceRange] = useState(100);
    const [showFilters, setShowFilters] = useState(false);

    const categories = ["All", ...new Set(products.map(p => p.category))];
    const maxProductPrice = Math.max(...products.map(p => p.price));

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [searchParams]);

    useEffect(() => {
        setPriceRange(maxProductPrice);
    }, [maxProductPrice]);

    useEffect(() => {
        if (showFilters && window.innerWidth < 1024) {
            document.body.style.overflow = 'hidden';
            const pane = document.getElementById('filter-pane');
            if (pane) pane.scrollTop = 0;
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showFilters]);

    const filteredProducts = useMemo(() => {
        return products.filter(item => {
            const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
            const matchesRating = Number(item.rating) >= minRating;
            const matchesPrice = item.price <= priceRange;
            return matchesCategory && matchesRating && matchesPrice;
        });
    }, [selectedCategory, minRating, priceRange]);

    const clearFilters = () => {
        setSelectedCategory("All");
        setMinRating(0);
        setPriceRange(maxProductPrice);
        setSearchParams({});
        if (window.innerWidth < 1024) setShowFilters(false);
    };

    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat);
        if (window.innerWidth < 1024) setShowFilters(false);
    };

    const handleRatingSelect = (rating) => {
        setMinRating(rating);
        if (window.innerWidth < 1024) setShowFilters(false);
    };

    return (
        <main className="bg-white min-h-screen">
            <PageHeader
                title="Premium Quality Collection"
                subtitle="Discover our handcrafted selection of ethically sourced nuts, sun-dried fruits, and signature energy mixes."
                breadcrumbs={[{ name: "Shop", path: "/shop" }, { name: selectedCategory }]}
            />

            <section className='bg-white py-8 md:py-16 relative z-10'>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 relative">
                        {showFilters && (
                            <div
                                className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[60] lg:hidden"
                                onClick={() => setShowFilters(false)}
                            />
                        )}

                        <aside
                            id="filter-pane"
                            className={`
                            ${showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:hidden'}
                            fixed inset-y-0 left-0 z-[70] w-full max-w-xs bg-white p-6 shadow-2xl transition-transform duration-500 ease-in-out
                            overflow-y-auto lg:overflow-y-visible
                            lg:sticky lg:top-24 lg:h-fit lg:z-30 lg:w-72 lg:bg-stone-50 lg:rounded-[3rem] lg:border lg:border-stone-100 lg:shadow-none lg:p-8 lg:translate-x-0
                        `}>



                            <div className="flex items-center justify-between mb-8 sticky top-16 bg-white lg:bg-stone-50 z-10 pb-4">
                                <div>
                                    <h3 className="text-lg font-black text-stone-900 flex items-center gap-2 mb-1">
                                        <HiFilter className="text-amber-600" /> {selectedCategory === "All" ? "Collection" : selectedCategory}
                                    </h3>
                                    <p className="text-stone-400 font-bold text-[8px] uppercase tracking-[0.2em]">
                                        Explore {filteredProducts.length} Treasures
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={clearFilters}
                                        className="p-2 rounded-full bg-amber-50 hover:bg-amber-100 transition-all"
                                    >
                                        <HiOutlineRefresh className="text-amber-600 text-lg" />
                                    </button>
                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 transition-all"
                                    >
                                        <HiX className="text-stone-700 text-lg" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                                    <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Price Range</h4>
                                    <div className="px-2">
                                        <input
                                            type="range"
                                            min="0"
                                            max={maxProductPrice}
                                            value={priceRange}
                                            onChange={(e) => setPriceRange(Number(e.target.value))}
                                            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600 mb-4"
                                        />
                                        <div className="flex justify-between items-center text-[10px] font-black text-stone-900 uppercase">
                                            <span>₹0</span>
                                            <span className="bg-amber-100/50 px-2 py-0.5 rounded text-amber-600">Max ₹{priceRange}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                                    <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Categories</h4>
                                    <div className="space-y-1.5">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => handleCategorySelect(cat)}
                                                className={`block w-full text-left px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${selectedCategory === cat
                                                    ? 'bg-amber-600 text-white shadow-xl shadow-amber-600/20'
                                                    : 'text-stone-500 hover:bg-white hover:border hover:border-stone-100'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                                    <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Minimum Rating</h4>
                                    <div className="grid grid-cols-1 gap-1.5">
                                        {[4, 3, 2].map((rating) => (
                                            <button
                                                key={rating}
                                                onClick={() => handleRatingSelect(rating)}
                                                className={`flex items-center gap-3 w-full px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${minRating === rating
                                                    ? 'bg-stone-900 text-white shadow-xl shadow-stone-900/10'
                                                    : 'text-stone-500 hover:bg-white hover:border hover:border-stone-100'
                                                    }`}
                                            >
                                                <HiStar className={minRating === rating ? 'text-amber-400' : 'text-amber-500'} />
                                                <span>{rating}.0+ Stars</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        <div className="flex-1">
                            <div className="mb-8 md:mb-12 flex items-center justify-between border-b border-stone-100 pb-4 md:pb-8 lg:pb-12 gap-8 sticky top-16 bg-white z-40 pt-2 -mt-2">
                                {!showFilters && (
                                    <button
                                        onClick={() => setShowFilters(true)}
                                        className="px-6 md:px-8 py-2 md:py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 border shadow-sm bg-white text-stone-900 border-stone-200 hover:bg-stone-50"
                                    >
                                        <HiFilter />
                                        Filters
                                    </button>
                                )}
                            </div>

                            {filteredProducts.length > 0 ? (
                                <div className={`grid grid-cols-1 sm:grid-cols-2 ${showFilters ? 'xl:grid-cols-3' : 'xl:grid-cols-4'} gap-10 transition-all duration-500`}>
                                    {filteredProducts.map((product) => (
                                        <div key={product.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-stone-50 rounded-[4rem] p-20 text-center border-2 border-dashed border-stone-200">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border border-stone-100">
                                        <span className="text-4xl">🏜️</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-stone-900 mb-4 tracking-tighter">No Treasures Found</h3>
                                    <p className="text-stone-500 font-medium mb-10 max-w-sm mx-auto leading-relaxed">
                                        Try adjusting your filters to discover more premium delights.
                                    </p>
                                    <button
                                        onClick={clearFilters}
                                        className="px-12 py-5 bg-amber-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-amber-600/20 hover:bg-stone-900 transition-all transform hover:-translate-y-1"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Shop;