import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard, { products } from '../components/product/ProductCard';
import { useShop } from '../context/ShopContext';
import { HiOutlineShoppingBag, HiOutlineHeart, HiChevronLeft, HiPlus, HiMinus } from 'react-icons/hi';
import PageHeader from '../components/layout/PageHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, toggleWishlist, user, clearCart } = useShop();
    const [localQuantity, setLocalQuantity] = React.useState(1);

    const product = products.find(p => p.id === Number(id));

    const relatedProducts = useMemo(() => {
        if (!product) return [];
        return products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
    }, [product]);

    if (!product) return (
        <main className="bg-stone-50 min-h-screen">
            <PageHeader title="Product Not Found" breadcrumbs={[{ name: "Shop", path: "/shop" }, { name: "Not Found" }]} />
            <div className="max-w-4xl mx-auto px-4 py-20 -mt-10 relative z-20">
                <div className="bg-white p-12 md:p-20 rounded-[3.5rem] shadow-2xl text-center border border-stone-100">
                    <h1 className="text-4xl font-black text-stone-900 mb-6">Discovery Failed</h1>
                    <p className="text-stone-500 mb-10 font-medium">The nature's treasure you're looking for seems to have moved or doesn't exist.</p>
                    <button
                        onClick={() => navigate('/shop')}
                        className="px-10 py-5 bg-amber-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-stone-900 transition-all"
                    >
                        Back to Shop
                    </button>
                </div>
            </div>
        </main>
    );

    const handleAddToCart = () => {
        if (!user) return navigate('/login');
        addToCart(product, localQuantity);
    };

    const handleAddToWishlist = () => {
        if (!user) return navigate('/login');
        toggleWishlist(product);
    };

    const handleBuyNow = () => {
        if (!user) return navigate('/login');
        clearCart();
        addToCart(product, localQuantity);
        navigate('/checkout');
    };

    return (
        <main className="min-h-screen bg-stone-50 pb-20">
            <PageHeader
                title={product.name}
                subtitle={`Discover the premium quality and nutritional benefits of our hand-picked ${product.category}.`}
                breadcrumbs={[{ name: "Shop", path: "/shop" }, { name: product.category, path: `/category/${product.category}` }, { name: product.name }]}
            />

            <section className="bg-white py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-stone-400 font-black uppercase tracking-widest text-[10px] hover:text-amber-600 transition-colors mb-12 group"
                    >
                        <HiChevronLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
                        Back to Collection
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-amber-100/50 rounded-[3rem] transform rotate-3 -z-10 transition-transform group-hover:rotate-1" />
                            <div className="bg-stone-50 p-6 rounded-[3rem] shadow-inner overflow-hidden relative border border-stone-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[350px] md:h-[500px] object-cover rounded-[2rem] transform transition-transform duration-1000 group-hover:scale-105"
                                />
                                {product.isNew && (
                                    <span className="absolute top-12 left-12 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] text-emerald-700 shadow-xl border border-emerald-100 uppercase">
                                        Fresh Arrival
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-10 h-[2px] bg-emerald-600" />
                                    <span className="text-emerald-600 font-black uppercase tracking-[0.2em] text-[10px]">
                                        {product.category}
                                    </span>
                                </div>
                                <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-stone-900 leading-tight mb-4 tracking-tighter">
                                    {product.name}
                                </h1>
                                <div className="flex items-center gap-6 pt-2">
                                    <div className="flex items-center gap-1.5 bg-amber-50 px-4 py-2 rounded-2xl border border-amber-100 shadow-sm">
                                        <span className="text-amber-500 text-sm">⭐</span>
                                        <span className="text-stone-900 text-sm font-black">{product.rating}</span>
                                    </div>
                                    <span className="text-stone-400 font-black uppercase tracking-widest text-[10px]">{product.reviews} Verification Reviews</span>
                                </div>
                            </div>

                            <p className="text-stone-500 text-sm md:text-lg leading-relaxed font-medium">
                                {product.description}
                            </p>

                            <div className="flex items-end gap-6 py-4">
                                <div className="flex flex-col">
                                    <span className="text-stone-300 line-through font-black text-xl mb-1 italic">₹{product.oldPrice}</span>
                                    <span className="text-3xl md:text-6xl font-black text-amber-600 tracking-tighter">
                                        ₹{product.price}
                                    </span>
                                </div>
                                <div className="bg-emerald-50 text-emerald-700 px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1.5 md:mb-2 border border-emerald-100">
                                    Save ₹{product.oldPrice - product.price} Now
                                </div>
                                <div className="bg-amber-50 text-amber-700 px-6 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1.5 md:mb-2 border border-amber-100">
                                    {localQuantity} x {product.price} = ₹{product.price * localQuantity}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-4">

                                {/* Buy Button */}
                                <button
                                    onClick={handleBuyNow}
                                    className="col-span-2 sm:col-span-2 lg:col-span-2 flex items-center justify-center gap-2 
        bg-stone-900 text-white py-3 sm:py-4 lg:py-5 
        rounded-xl sm:rounded-2xl lg:rounded-3xl 
        font-bold uppercase tracking-wider text-[10px] sm:text-xs lg:text-sm
        hover:bg-amber-600 transition-all transform hover:-translate-y-1 active:scale-95 
        shadow-lg"
                                >
                                    Proceed to Buy
                                </button>

                                <div className="col-span-2 sm:col-span-2 lg:col-span-2 flex items-center justify-between 
                                                bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl 
                                                px-2 sm:px-3 py-1.5 sm:py-2 
                                                shadow-sm border border-stone-200">

                                    <button
                                        onClick={() => setLocalQuantity(prev => Math.max(1, prev - 1))}
                                        className="p-2 text-stone-500 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition"
                                    >
                                        <HiMinus className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>

                                    <span className="w-8 sm:w-10 text-center text-sm sm:text-base font-bold text-stone-900">
                                        {localQuantity}
                                    </span>

                                    <button
                                        onClick={() => setLocalQuantity(prev => prev + 1)}
                                        className="p-2 text-stone-500 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition"
                                    >
                                        <HiPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className="flex items-center justify-center 
                                    bg-stone-50 text-stone-900 border border-stone-200 
    
                                    p-3 sm:p-2 lg:p-3   
    
                                    rounded-xl sm:rounded-2xl lg:rounded-3xl 
                                    hover:border-amber-500 hover:text-amber-600 
                                    transition-all transform hover:-translate-y-1 active:scale-95 
                                    shadow-md"
                                >
                                    <HiOutlineShoppingBag className="text-xl sm:text-2xl" />
                                </button>

                                <button
                                    onClick={handleAddToWishlist}
                                    className="flex items-center justify-center 
                                    bg-stone-50 text-stone-900 border border-stone-200 
    
                                    p-3 sm:p-2 lg:p-3   
    
                                    rounded-xl sm:rounded-2xl lg:rounded-3xl 
                                    hover:border-rose-500 hover:text-rose-500 
                                    transition-all transform hover:-translate-y-1 active:scale-95 
                                    shadow-md"
                                >
                                    <HiOutlineHeart className="text-xl sm:text-2xl" />
                                </button>

                            </div>

                            <div className="pt-10 mt-4 border-t border-stone-100 grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-emerald-100">
                                        <span className="text-emerald-700 text-xl">🌿</span>
                                    </div>
                                    <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest leading-tight">100% Organic<br /><span className="text-stone-900">Certified Nature</span></span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-amber-100">
                                        <span className="text-amber-700 text-xl">🛡️</span>
                                    </div>
                                    <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest leading-tight">Secure Pack<br /><span className="text-stone-900">Travel Ready</span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 pt-24 border-t border-stone-100">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tighter mb-4">
                                    Customer <span className="text-amber-600 italic font-serif">Kindness</span>
                                </h2>
                                <p className="text-stone-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em]">What our nature-conscious community thinks</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-8 bg-stone-50 px-6 sm:px-10 py-6 sm:py-8 rounded-[2rem] sm:rounded-[2.5rem] border border-stone-100 shadow-inner">
                                <div className="text-center">
                                    <p className="text-4xl font-black text-stone-900 leading-none mb-1">{product.rating}</p>
                                    <div className="flex justify-center gap-0.5 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-amber-500' : 'text-stone-300'}`}>⭐</span>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">{product.reviews} Reviews</p>
                                </div>
                                <div className="w-px h-12 bg-stone-200" />
                                <div className="space-y-2 min-w-[150px]">
                                    {[5, 4, 3, 2, 1].map((star) => (
                                        <div key={star} className="flex items-center gap-3">
                                            <span className="text-[10px] font-black text-stone-900 w-2">{star}</span>
                                            <div className="flex-1 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                                                    style={{ width: `${star === 5 ? '85%' : star === 4 ? '12%' : '1%'}` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                            className="reviews-swiper !pb-6"
                        >
                            {[
                                {
                                    name: "Ananya Sharma",
                                    date: "March 15, 2026",
                                    rating: 5,
                                    comment: "Absolutely premium quality! You can taste the freshness in every bite. The packaging was also very sturdy and high-end. ",
                                    avatar: "AS"
                                },
                                {
                                    name: "Vikram Mehta",
                                    date: "March 12, 2026",
                                    rating: 4,
                                    comment: "Very impressive sourcing. These are much better than what I usually find in the local market. A bit expensive but worth the quality.",
                                    avatar: "VM"
                                },
                                {
                                    name: "Priya Iyer",
                                    date: "March 08, 2026",
                                    rating: 5,
                                    comment: "The organic certification really matters to me, and KK Dry Fruits delivers on that promise. Beautifully curated and delicious.",
                                    avatar: "PI"
                                },
                                {
                                    name: "Rahul Khanna",
                                    date: "March 02, 2026",
                                    rating: 5,
                                    comment: "Fast delivery and the product exceeded my expectations. These walnuts are whole and crunchy, not a single broken piece!",
                                    avatar: "RK"
                                }
                            ].map((review, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-amber-200 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-xl h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-xl group-hover:bg-amber-600 transition-colors">
                                                    {review.avatar}
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-stone-900 text-lg">{review.name}</h4>
                                                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">{review.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={`text-xs ${i < review.rating ? 'text-amber-500' : 'text-stone-300'}`}>⭐</span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-stone-500 font-medium leading-relaxed group-hover:text-stone-700 transition-colors">
                                            "{review.comment}"
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {relatedProducts.length > 0 && (
                        <div className="mt-10 pt-10 border-t border-stone-100">
                            <div className="flex items-end justify-between mb-12">
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-black text-stone-900 tracking-tighter">
                                        Related <span className="text-amber-600 italic font-serif">Treasures</span>
                                    </h2>
                                    <p className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">You might also like these premium selections</p>
                                </div>
                                <button
                                    onClick={() => navigate('/shop')}
                                    className="hidden md:block px-10 py-4 bg-stone-50 text-stone-900 border border-stone-100 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-stone-100 transition-all shadow-sm"
                                >
                                    View Full Shop
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                                {relatedProducts.map(item => (
                                    <div key={item.id} className="animate-in fade-in slide-in-from-bottom duration-1000">
                                        <ProductCard product={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;