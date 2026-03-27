import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard, { products } from '../components/product/ProductCard';
import PageHeader from '../components/layout/PageHeader';

const CategoryView = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();

    const categoryProducts = useMemo(() => {
        return products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
    }, [categoryName]);

    const actualCategoryName = categoryProducts.length > 0 ? categoryProducts[0].category : categoryName;

    return (
        <main className="bg-white min-h-screen pb-20">
            <PageHeader
                title={`${actualCategoryName} Collection`}
                subtitle={`Explore our hand-picked selection of premium ${actualCategoryName.toLowerCase()} sourced for quality and freshness.`}
                breadcrumbs={[{ name: "Categories", path: "/categories" }, { name: actualCategoryName }]}
            />

            <section className='bg-white py-16 relative z-10'>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <h1 className="text-4xl lg:text-5xl font-black text-stone-900 tracking-tighter">
                                    {actualCategoryName}
                                </h1>
                            </div>
                            <p className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                                Discovery: {categoryProducts.length} Premium Treasures found
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('/shop')}
                            className="px-8 py-3 bg-stone-50 text-stone-900 border border-stone-200 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-stone-100 transition-all shadow-sm"
                        >
                            View All Collections
                        </button>
                    </div>

                    {categoryProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                            {categoryProducts.map((product) => (
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
                            <h3 className="text-3xl font-black text-stone-900 mb-4 tracking-tighter">Category Empty</h3>
                            <p className="text-stone-500 font-medium mb-10 max-w-sm mx-auto leading-relaxed">
                                We're currently restocking our premium treasures for this category.
                            </p>
                            <button
                                onClick={() => navigate('/categories')}
                                className="px-12 py-5 bg-amber-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-amber-600/20 hover:bg-stone-900 transition-all transform hover:-translate-y-1"
                            >
                                Back to Categories
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default CategoryView;
