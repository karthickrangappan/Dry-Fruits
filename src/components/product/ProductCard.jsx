import React from "react";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { useShop } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

export const products = [
    {
        id: 1,
        name: "Classic Almonds",
        description: "Handpicked premium California almonds, perfectly roasted.",
        price: 50.00,
        oldPrice: 100.00,
        image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=800",
        category: "Nuts",
        rating: "4.9",
        reviews: "245",
        isNew: true
    },
    {
        id: 2,
        name: "Premium Cashews",
        description: "Whole jumbo cashews, naturally sweet and crunchy.",
        price: 45.00,
        oldPrice: 60.00,
        image: "https://images.unsplash.com/photo-1600189083288-89e1c8b9b0cc?auto=format&fit=crop&q=80&w=800",
        category: "Nuts",
        rating: "4.8",
        reviews: "189"
    },
    {
        id: 3,
        name: "Turkish Apricots",
        description: "Sun-dried golden apricots from the heart of Turkey.",
        price: 40.00,
        oldPrice: 60.00,
        image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=800",
        category: "Dried Fruits",
        rating: "4.7",
        reviews: "156"
    },
    {
        id: 4,
        name: "Anjeer/Figs (100g)",
        description: "Vibrant Dry Anjeer, shelled and ready to eat.",
        price: 45.00,
        oldPrice: 65.00,
        image: "https://kavisdryfruits.com/uploads/f_691ee5c2630855.28901325.png",
        category: "Dried Fruits",
        rating: "4.9",
        reviews: "312",
        isNew: true
    },
    {
        id: 5,
        name: "Black Dates (100g)",
        description: "King of dates - soft, sweet, and caramel-like.",
        price: 35.00,
        oldPrice: 50.00,
        image: "https://kavisdryfruits.com/uploads/f_691eea6661f970.70506074.png",
        category: "Dates",
        rating: "5.0",
        reviews: "420"
    },
    {
        id: 6,
        name: "Kiwi Green (100g)",
        description: "Premium brain-boosting walnuts, carefully cracked.",
        price: 25.00,
        oldPrice: 30.00,
        image: "https://kavisdryfruits.com/uploads/f_691eea92408db5.11522081.png",
        category: "Dried Fruits",
        rating: "4.6",
        reviews: "98"
    },
    {
        id: 7,
        name: "Flax Seeds (100g)",
        description: "Premium brain-boosting walnuts, carefully cracked.",
        price: 50.00,
        oldPrice: 60.00,
        image: "https://kavisdryfruits.com/uploads/f_691ee7641b6094.37281592.png",
        category: "Seeds",
        rating: "4.6",
        reviews: "98"
    },
    {
        id: 8,
        name: "Pumpkin Seeds – 100g",
        description: "Premium brain-boosting walnuts, carefully cracked.",
        price: 70.00,
        oldPrice: 80.00,
        image: "https://kavisdryfruits.com/uploads/f_691ee7d1dd5fc8.06560346.png",
        category: "Seeds",
        rating: "4.6",
        reviews: "98"
    },
    {
        id: 9,
        name: "Pistachios (100g)",
        description: "Premium pistachios, carefully selected for quality and freshness.",
        price: 45.00,
        oldPrice: 65.00,
        image: "https://kavisdryfruits.com/uploads/f_691ee971baa4a1.93488146.png",
        category: "Nuts",
        rating: "4.9",
        reviews: "312",
        isNew: true
    },
    {
        id: 10,
        name: "Walnuts 4ps (100 G)",
        description: "Premium almonds, carefully selected for quality and freshness.",
        price: 45.00,
        oldPrice: 65.00,
        image: "https://kavisdryfruits.com/uploads/f_691ec108c5aaf3.47190729.png",
        category: "Nuts",
        rating: "4.9",
        reviews: "312",
        isNew: true
    },
    {
        id: 11,
        name: "Sun Flower Seeds (100g)",
        description: "Premium sunflower seeds, carefully selected for quality and freshness.",
        price: 45.00,
        oldPrice: 65.00,
        image: "https://kavisdryfruits.com/uploads/f_691ee8e0c5ced4.40703986.png",
        category: "Seeds",
        rating: "4.9",
        reviews: "312",
        isNew: true
    },
    {
        id: 12,
        name: "Kimia Dates (400)",
        description: "Premium dates, carefully selected for quality and freshness.",
        price: 45.00,
        oldPrice: 65.00,
        image: "https://kavisdryfruits.com/uploads/f_691eec514ad541.69440037.png",
        category: "Dates",
        rating: "4.9",
        reviews: "312",
        isNew: true
    }
];

export const ProductCard = ({ product }) => {
    const { toggleWishlist, addToCart, user, clearCart } = useShop();
    const navigate = useNavigate();

    if (!product) {
        return (
            <div className="p-4 text-center text-gray-500 font-bold h-full flex items-center justify-center">
                No product data provided.
            </div>
        );
    }

    const handleAddToCart = (e) => {
        e.stopPropagation();
        if (!user) return navigate('/login');
        addToCart(product);
    };

    const handleAddToWishlist = (e) => {
        e.stopPropagation();
        if (!user) return navigate('/login');
        toggleWishlist(product);
    };

    const handleBuyNow = (e) => {
        e.stopPropagation();
        if (!user) return navigate('/login');
        clearCart();
        addToCart(product);
        navigate('/checkout');
    };

    const handleNavigate = () => {
        navigate(`/product/${product.id}`);
    };
    return (
        <div className="group relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/50 to-white/50 shadow-md hover:shadow-2xl shadow-amber-100 transition-all duration-500 hover:-translate-y-3 border border-stone-100 flex flex-col h-full mx-auto w-full max-w-[280px] sm:max-w-none">

            {product.isNew && (
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-amber-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest shadow-lg uppercase">
                        New
                    </span>
                </div>
            )}

            <button
                onClick={handleAddToWishlist}
                className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-rose-50 hover:scale-110 active:scale-95"
            >
                <HiOutlineHeart className="text-rose-500 text-xl" />
            </button>

            <button
                onClick={handleAddToCart}
                className="absolute top-16 right-4 z-30 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-emerald-50 hover:scale-110 active:scale-95"
            >
                <HiOutlineShoppingBag className="text-emerald-600 text-xl" />
            </button>

            <div
                onClick={handleNavigate}
                className="relative h-48 md:h-64 overflow-hidden cursor-pointer  "
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <span className="absolute bottom-4 left-4 z-20 bg-stone-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black text-amber-400 uppercase tracking-[0.2em]">
                    {product.category}
                </span>
            </div>

            <div
                onClick={handleNavigate}
                className="p-6 flex flex-col gap-4 cursor-pointer flex-grow"
            >
                <div className="flex justify-between items-start gap-2">
                    <h3 className="text-sm md:text-md font-black text-stone-800 transition-colors duration-300 min-h-[50px] line-clamp-2 leading-tight">
                        {product.name}
                    </h3>

                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100 shrink-0">
                        <span className="text-amber-500 text-xs text-[10px]">⭐</span>
                        <span className="text-amber-900 text-[10px] font-black uppercase">
                            {product.rating}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-stone-400 line-through font-bold tracking-widest uppercase">
                            ₹{product.oldPrice}
                        </span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-xl md:text-2xl font-black text-stone-900 tracking-tighter transition-colors group-hover:text-amber-600">
                                ₹{product.price}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={handleBuyNow}
                        className="px-4 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl bg-amber-600 text-white text-[10px] md:text-xs font-black uppercase tracking-widest shadow-xl hover:bg-amber-700 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;