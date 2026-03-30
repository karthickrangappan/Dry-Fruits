import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import { useNavigate } from 'react-router-dom';
import { HiOutlineTruck, HiOutlineShieldCheck, HiOutlineShoppingBag, HiOutlineSparkles, HiOutlineRefresh, HiOutlineChatAlt2 } from 'react-icons/hi';

const Services = () => {
    const navigate=useNavigate();
    return (
        <main className="bg-white min-h-screen">
            <PageHeader title="Nature Services" subtitle="We're committed to delivering nature's finest treasures with unparalleled service quality." />
            
            <section className="bg-white py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <p className="text-amber-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 text-center">Beyond Products</p>
                        <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter mb-8 text-center leading-tight">
                            Elevating Your <br />
                            <span className="text-amber-600 italic font-serif">Wellness Experience</span>
                        </h2>
                        <p className="text-stone-500 font-medium leading-relaxed text-center">
                            Our relationship with you doesn't end at the checkout. We provide a suite of services designed to ensure the freshness, authenticity, and enjoyment of your premium dry fruits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <HiOutlineTruck />,
                                title: "Climate-Controlled Shipping",
                                desc: "Every order is packed and shipped in temperature-stable environments to preserve the delicate natural oils and crunch of our treasures."
                            },
                            {
                                icon: <HiOutlineShieldCheck />,
                                title: "Purity Certification",
                                desc: "We provide lab-certified purity reports for our high-end batches, ensuring 100% organic and pesticide-free products."
                            },
                            {
                                icon: <HiOutlineShoppingBag />,
                                title: "Bespoke Gifting",
                                desc: "Create your own luxury gift hampers for corporate events or personal celebrations, handcrafted with artisanal packaging."
                            },
                            {
                                icon: <HiOutlineSparkles />,
                                title: "Nutritional Consulting",
                                desc: "Connect with our wellness experts for personalized dry fruit consumption guides tailored to your specific health goals."
                            },
                            {
                                icon: <HiOutlineRefresh />,
                                title: "Auto-Restock Subscriptions",
                                desc: "Never run out of your favorites. Set up flexible recurring orders with an exclusive 10% discount on every delivery."
                            },
                            {
                                icon: <HiOutlineChatAlt2 />,
                                title: "24/7 Wellness Support",
                                desc: "Have a question about storage or recipe ideas? Our dedicated nature-conscious team is always a message away."
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="p-12 bg-stone-50 rounded-[3.5rem] border border-stone-100 hover:border-amber-200 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-xl">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl text-stone-900 mb-8 border border-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-colors shadow-sm">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-black text-stone-900 mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-stone-500 font-medium leading-relaxed italic">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
                <div className="bg-stone-900 rounded-[5rem] p-16 md:p-24 text-center overflow-hidden relative group">
                    <div className="absolute inset-0 opacity-10 blur-3xl bg-amber-600 -z-10 group-hover:scale-150 transition-transform duration-1000" />
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter text-center"> Ready to <span className="text-amber-500 italic font-serif">Experience</span> Nature?</h2>
                    <p className="text-stone-400 font-medium mb-12 max-w-2xl mx-auto text-center">
                        Join our community of over 12,000 health-conscious individuals who trust KK Dry Fruits for their daily nutritional treasures.
                    </p>
                    <button 
                    onClick={()=>navigate("/shop")} 
                    className="px-12 py-5 bg-amber-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-stone-900 transition-all transform hover:-translate-y-1 shadow-2xl shadow-amber-600/20">
                        Start Shopping Now
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Services;
