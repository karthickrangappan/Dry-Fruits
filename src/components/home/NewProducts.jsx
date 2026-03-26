import React from 'react';
import { SingleProductCard, products } from '../product/ProductCard';

const NewProducts = () => {

    const newProducts = products.filter(product => product.isNew);

    return (
        <section className='max-w-7xl mx-auto bg-white pt-10 pb-10'>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 tracking-tighter">
                    New <span className="text-amber-600">Products</span>
                </h2>
                <p className="text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed">
                    Discover our latest collection of premium dry fruits, carefully selected for quality and freshness.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-4 p-5 md:p-10 gap-6 md:gap-10'>
                {newProducts.map((product) => (
                    <SingleProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default NewProducts;