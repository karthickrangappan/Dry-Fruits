import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard, { products } from '../product/ProductCard';

const NewProducts = () => {

    const newProducts = products.filter(product => product.isNew);

    return (
        <section className='w-full bg-stone-50 py-24 border-y border-stone-100/50'>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16 px-4">
                    <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Nature's Latest</span>
                    <h2 className="text-2xl md:text-5xl font-black text-stone-900 mb-6 tracking-tighter">
                        New <span className="text-amber-600 italic font-serif">Harvest</span>
                    </h2>
                    <p className="text-stone-500 font-medium max-w-xl mx-auto text-sm leading-relaxed">
                        Straight from the farms to your table. Experience the crunch and flavor of our latest premium collection.
                    </p>
                </div>

                <div className='px-4 md:px-8'>
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                    
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 }
                        }}
                        className="pb-16"
                    >
                        {newProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default NewProducts;

