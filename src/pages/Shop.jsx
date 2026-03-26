import React, { useState, useMemo, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { SingleProductCard, products } from '../components/product/ProductCard';

const categoryLabels = ["All", "Nuts", "Seeds", "Dried Fruits", "Dates"];

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All") return products;
        return products.filter(item => item.category === selectedCategory);
    }, [selectedCategory]);

    const categories = ["All", ...new Set(products.map(p => p.category))];

    return (
        <section className='max-w-7xl mx-auto bg-white pt-20 pb-20'>
            <div className="flex flex-col md:flex-row md:items-end justify-center gap-8 mb-16 mt-5">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-black text-center text-stone-900 mb-4 tracking-tighter">
                        Shop Quality <span className="text-amber-600">Dry Fruits</span>
                    </h1>
                    <p className="text-stone-500 font-medium text-lg text-justify">
                        Premium selection of nuts and dried fruits for your healthy lifestyle.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${selectedCategory === cat ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 md:p-10 gap-6 md:gap-10'>
                {filteredProducts.map((product) => (
                    <SingleProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Shop;
