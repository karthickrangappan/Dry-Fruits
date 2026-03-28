import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../components/product/ProductCard';
import PageHeader from '../components/layout/PageHeader';

const categories = [
    {
        name: "Nuts",
        description: "Premium selection of almonds, cashews, and more.",
        image: "https://kavisdryfruits.com/uploads/f_691ee9fb1328e8.71101389.png",
        count: products.filter(p => p.category === "Nuts").length
    },
    {
        name: "Dried Fruits",
        description: "Naturally sweet and sun-dried organic fruits.",
        image: "https://kavisdryfruits.com/uploads/f_691ee5c2630855.28901325.png",
        count: products.filter(p => p.category === "Dried Fruits").length
    },
    {
        name: "Dates",
        description: "Exotic and rich dates imported from the Middle East.",
        image: "https://kavisdryfruits.com/uploads/f_691eea6661f970.70506074.png",
        count: products.filter(p => p.category === "Dates").length
    },
    {
        name: "Seeds",
        description: "Nutritious and crunchy seeds for a healthy lifestyle.",
        image: "https://kavisdryfruits.com/uploads/f_691ee7641b6094.37281592.png",
        count: products.filter(p => p.category === "Seeds").length
    },
    {
        name: "Raisins",
        description: "Golden raisins are small, sweet, and chewy dried grapes. They have a bright yellow to golden color and a delightful tangy-sweet flavor.",
        image: "https://kavisdryfruits.com/uploads/f_691eeb2e022154.89898460.png",
        count: products.filter(p => p.category === "Raisins").length
    }
];

const Categories = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        navigate(`/category/${categoryName}`);
    };

    return (
        <main className="bg-stone-50 min-h-screen pb-20">
            <PageHeader
                title="Our Finest Categories"
                subtitle="Explore our curated collections of premium dry fruits, nuts, and seeds sourced from the best nature has to offer."
                breadcrumbs={[{ name: "Categories", path: "/categories" }]}
            />

            <section className="bg-white py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl font-black text-stone-900 tracking-tighter">Browse <span className="text-amber-600 italic font-serif">Collections</span></h2>
                        <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mt-1">Sourced from nature's finest orchards</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {categories.map((cat) => (
                            <div
                                key={cat.name}
                                onClick={() => handleCategoryClick(cat.name)}
                                className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                            >
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="w-6 h-[1.5px] bg-amber-600" />
                                                <span className="text-amber-600 font-black uppercase tracking-widest text-[10px]">{cat.count} Items</span>
                                            </div>
                                            <h2 className="text-2xl font-black text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                                                {cat.name}
                                            </h2>
                                            <p className="text-stone-500 text-sm font-medium mb-6 leading-relaxed line-clamp-2">
                                                {cat.description}
                                            </p>
                                        </div>
                                        <button className="flex items-center gap-2 font-black text-stone-900 text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                            <span>Explore</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="w-full md:w-1/2 relative h-48 md:h-auto overflow-hidden">
                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1500ms]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-l from-stone-50/20 via-transparent to-transparent" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Categories;
