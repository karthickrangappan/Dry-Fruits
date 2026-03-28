import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const categories = [
    {
        id: 1,
        name: "Premium Nuts",
        count: "25+ Varieties",
        image: "https://kavisdryfruits.com/uploads/f_691ee9fb1328e8.71101389.png",
        color: "bg-amber-100",
        textColor: "text-amber-900"
    },
    {
        id: 2,
        name: "Raisins",
        count: "10+ Varieties",
        image: "https://kavisdryfruits.com/uploads/f_691eeb2e022154.89898460.png",
        color: "bg-purple-100",
        textColor: "text-purple-900"    
    },
    
    {
        id: 3,
        name: "Exotic Dates",
        count: "10+ Varieties",
        image: "https://kavisdryfruits.com/uploads/f_691eea6661f970.70506074.png",
        color: "bg-blue-100",
        textColor: "text-blue-900"
    },
    {
        id: 4,
        name: "Organic Seeds",
        count: "12+ Varieties",
        image: "https://kavisdryfruits.com/uploads/f_691ee7641b6094.37281592.png",
        color: "bg-rose-100",
        textColor: "text-rose-900"
    },
    {
        id: 5,
        name: "Dried Fruits",
        count: "15+ Varieties",
        image: "https://kavisdryfruits.com/uploads/f_691ee5c2630855.28901325.png",
        color: "bg-emerald-100",
        textColor: "text-emerald-900"
    },
];

const CategoryList = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (name) => {
        let categoryName = name;
        if (name === "Premium Nuts") categoryName = "Nuts";
        if (name === "Exotic Dates") categoryName = "Dates";
        if (name === "Organic Seeds") categoryName = "Seeds";
        if (name === "Dried Fruits") categoryName = "Dried Fruits";
        if (name === "Raisins") categoryName = "Raisins";
        navigate(`/category/${categoryName}`);
    };

    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h4 className="text-amber-600 font-black uppercase tracking-[0.3em] text-sm mb-4">
                            Explore Collections
                        </h4>
                        <h2 className="text-2xl md:text-5xl font-black text-stone-900 leading-tight">
                            Shop by <span className="text-amber-600">Categories</span>
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/categories')}
                        className="px-6 md:px-8 py-2.5 md:py-4 bg-stone-900 text-white font-bold rounded-xl md:rounded-2xl hover:bg-stone-800 transition-all duration-300 transform hover:-translate-y-1 text-xs md:text-base"
                    >
                        View All Categories
                    </button>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <div
                                onClick={() => handleCategoryClick(category.name)}
                                className="group cursor-pointer"
                            >
                                <div className={`relative h-60 rounded-4xl ${category.color} overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-stone-200 group-hover:-translate-y-2`}>
                                    <div className="absolute inset-0 p-5 flex flex-col items-center justify-start text-center z-10">
                                        <h3 className={`text-2xl font-black ${category.textColor} mb-2 tracking-tight`}>
                                            {category.name}
                                        </h3>
                                        <p className="px-6 py-2 bg-white/40 backdrop-blur-md rounded-full text-stone-600 font-black text-[10px] uppercase tracking-[0.2em]">
                                            {category.count}
                                        </p>
                                    </div>
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[80%] h-[80%] object-contain transform group-hover:scale-110 transition-all duration-700 opacity-90 translate-y-4 group-hover:translate-y-0"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CategoryList;