import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard, { products } from '../components/product/ProductCard';
import { HiFilter, HiStar, HiX } from 'react-icons/hi';
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
    };

    return (
        <main className="bg-white min-h-screen">
            <PageHeader
                title="Premium Quality Collection"
                subtitle="Discover our handcrafted selection of ethically sourced nuts, sun-dried fruits, and signature energy mixes."
                breadcrumbs={[{ name: "Shop", path: "/shop" }, { name: selectedCategory }]}
            />

            <section className='bg-white py-16 relative z-10'>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 relative overflow-hidden">
                        {showFilters && (
                            <div
                                className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[60] lg:hidden"
                                onClick={() => setShowFilters(false)}
                            />
                        )}
                        <aside className={`
                            ${showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:hidden'}
                            fixed inset-y-0 left-0 z-[70] w-full max-w-xs bg-white p-8 shadow-2xl transition-transform duration-500 ease-in-out
                            lg:relative lg:z-10 lg:w-72 lg:bg-stone-50 lg:rounded-[3rem] lg:border lg:border-stone-100 lg:shadow-none lg:p-8 lg:translate-x-0
                        `}>
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-xl font-black text-stone-900 flex items-center gap-2">
                                    <HiFilter className="text-amber-600" /> Filters
                                </h3>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={clearFilters}
                                        className="text-[10px] font-black text-amber-600 hover:text-amber-700 transition-colors uppercase tracking-widest"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="lg:hidden p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
                                    >
                                        <HiX className="text-stone-900" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div>
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

                                <div>
                                    <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Categories</h4>
                                    <div className="space-y-1.5">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
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

                                <div>
                                    <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Minimum Rating</h4>
                                    <div className="grid grid-cols-1 gap-1.5">
                                        {[4, 3, 2].map((rating) => (
                                            <button
                                                key={rating}
                                                onClick={() => setMinRating(rating)}
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

                            <button
                                onClick={() => setShowFilters(false)}
                                className="w-full mt-12 py-5 bg-stone-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs lg:hidden shadow-xl"
                            >
                                Apply Filters
                            </button>
                        </aside>

                        <div className="flex-1">
                            <div className="mb-12 flex items-center justify-between border-b border-stone-100 pb-12 gap-8">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={`px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 border shadow-sm ${showFilters
                                            ? 'bg-amber-600 text-white border-amber-500'
                                            : 'bg-white text-stone-900 border-stone-200 hover:bg-stone-50'
                                        }`}
                                >
                                    <HiFilter className={showFilters ? 'animate-bounce' : ''} />
                                    {showFilters ? 'Hide' : 'Show'} Filters
                                </button>

                                <div className="text-right">
                                    <h1 className="text-4xl lg:text-6xl font-black text-stone-900 tracking-tighter mb-2">
                                        {selectedCategory === "All" ? "Collection" : selectedCategory}
                                    </h1>
                                    <p className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                                        Explore {filteredProducts.length} Handpicked Treasures
                                    </p>
                                </div>
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
