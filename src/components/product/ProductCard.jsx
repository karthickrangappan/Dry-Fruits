import React from 'react';
import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi';
import { useShop } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

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

export const SingleProductCard = ({ product }) => {
    const { toggleWishlist, addToCart, user } = useShop();
    const navigate = useNavigate();

    const handleWishlistClick = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        toggleWishlist(product);
    }

    const handleAddToCart = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        addToCart(product);
    }

    return (
        <div className='relative group shadow-xl rounded-2xl flex flex-col justify-between items-center p-10 bg-purple-100/30 hover:bg-purple-100/95 transition-all duration-500 h-full'>
            <div className='w-full rounded-2xl h-50 overflow-hidden'>
                <img src={product.image} alt={product.name}
                    className='w-full h-full rounded-2xl object-cover hover:scale-110 transition-all duration-700 cursor-pointer'
                />
            </div>
            <h3 className='text-xl font-bold text-amber-600 pt-4'>{product.name}</h3>
            <p className='text-md font-bold text-amber-900'>{product.category}</p>

            <div className='flex items-center gap-1 pt-5 pb-5'>
                <p className='text-sm text-gray-600 font-bold'><span>MRP: </span> <span className='line-through text-gray-500'>₹{product.oldPrice}</span></p>
                <p className='text-sm text-gray-700 font-bold'>₹{product.price}</p>
            </div>

            <div className='flex items-center gap-10'>
                <p className='text-yellow-500 font-bold'><span className='text-gray-600'>Rating: </span>{product.rating}</p>
                <button
                    onClick={() => handleAddToCart(product)}
                    className="px-5 py-2 bg-stone-100 text-stone-900 font-bold rounded-xl shadow-2xl shadow-amber-600/30 hover:bg-stone-300 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                    <HiOutlineShoppingBag className='text-2xl' />
                </button>
            </div>

            <button
                onClick={handleWishlistClick}
                className='absolute right-6 top-6 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10'
            >
                <div className='p-2 rounded-full border bg-white border-red-200 text-red-600 hover:bg-red-50 transition-colors'>
                    <HiOutlineHeart className='text-2xl' />
                </div>
            </button>
        </div>
    );
};

const ProductCard = () => {
    return (
        <section className='max-w-7xl mx-auto bg-white pt-60 pb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 md:p-10 gap-6 md:gap-10'>
                {products.map((product) => (
                    <SingleProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductCard;
