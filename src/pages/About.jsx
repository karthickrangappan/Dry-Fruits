import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineGlobeAlt } from 'react-icons/hi';

const About = () => {
    return (
        <main className="bg-white min-h-screen">
            <PageHeader title="Our Story Culture" />
            
            <section className="bg-white py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <p className="text-amber-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Established 2024</p>
                            <h2 className="text-4xl lg:text-6xl font-black text-stone-900 tracking-tighter mb-8 leading-none">
                                Pure Nature <br />
                                <span className="text-amber-600 italic font-serif">In Every Bite</span>
                            </h2>
                            <div className="space-y-6 text-stone-500 font-medium leading-relaxed max-w-xl">
                                <p>
                                    At KK Dry Fruits, we believe that the best food doesn't need to be engineered—it just needs to be sourced with care. Our journey began with a simple mission: to bring the world's most premium, sun-dried treasures directly to your table.
                                </p>
                                <p>
                                    We work closely with local farmers and sustainable orchards across the globe to ensure every walnut, almond, and fig meets our rigorous standards for quality, texture, and nutritional value.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-10 mt-12">
                                <div>
                                    <p className="text-4xl font-black text-stone-900 tracking-tighter mb-2">12k+</p>
                                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest leading-tight">Health-Conscious<br/>Customers</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-stone-900 tracking-tighter mb-2">50+</p>
                                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest leading-tight">Premium Varieties<br/>Curated</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <div className="absolute inset-0 bg-stone-100/50 rounded-[4rem] transform rotate-3 -z-10 group-hover:rotate-1 transition-transform duration-700" />
                            <div className="bg-stone-50 rounded-[4rem] overflow-hidden border border-stone-100 p-4">
                                <img 
                                    src="/hero-main.png" 
                                    alt="About Us" 
                                    className="w-full h-[600px] object-cover rounded-[3rem] transform group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-stone-50 py-32 border-t border-stone-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-24">
                    <p className="text-amber-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 text-center">Our Core Pillars</p>
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter text-center">The Values That <span className="text-amber-600 italic font-serif">Guide Us</span></h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            icon: <HiOutlineLightBulb />,
                            title: "Sourcing Excellence",
                            desc: "We prioritize direct relationships with growers who share our commitment to organic and sustainable farming."
                        },
                        {
                            icon: <HiOutlineUserGroup />,
                            title: "Human Wellness",
                            desc: "Our products are selected not just for taste, but for their ability to fuel a vibrant and energetic lifestyle."
                        },
                        {
                            icon: <HiOutlineGlobeAlt />,
                            title: "Ethical Harvest",
                            desc: "From tree to table, we ensure every step respects our planet and the hands that harvest its bounty."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-12 rounded-[3.5rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-2xl text-stone-900 mb-8 border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black text-stone-900 mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-stone-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default About;
