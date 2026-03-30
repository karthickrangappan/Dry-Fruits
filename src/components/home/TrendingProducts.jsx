import React from 'react';
import ProductCard, { products } from '../product/ProductCard';

const TrendingProducts = () => {
    const categories = [...new Set(products.map(p => p.category))];
    
    const trendingProducts = categories.flatMap(cat => {
        return products
            .filter(p => p.category === cat)
            .slice(0, 2);
    });

    return (
        <section className="py-32 bg-stone-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                            Curated Selection
                        </span>
                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tighter leading-none">
                            Trending <br />
                            <span className="text-amber-600 italic font-serif text-3xl md:text-6xl lg:text-7xl">Essentials</span>
                        </h2>
                    </div>
                    <p className="text-stone-500 font-medium max-w-sm text-sm md:text-lg leading-relaxed border-l-2 border-amber-100 pl-8">
                        The most sought-after treasures from our orchards, hand-selected for their superior quality and taste.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {trendingProducts.map((product) => (
                        <div key={product.id} className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;
