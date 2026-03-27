import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiArrowRight } from 'react-icons/hi';

const Contact = () => {
    return (
        <main className="bg-white min-h-screen">
            <PageHeader title="Get In Touch" />
            
            <section className="bg-white py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Info Column */}
                        <div className="lg:w-1/3">
                            <p className="text-amber-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Contact Us</p>
                            <h2 className="text-4xl lg:text-5xl font-black text-stone-900 tracking-tighter mb-12">
                                We'd Love To <br />
                                <span className="text-amber-600 italic font-serif text-6xl">Hear From You</span>
                            </h2>
                            <p className="text-stone-500 font-medium mb-16 leading-relaxed">
                                Whether you're curious about our sourcing, need nutritional advice, or have a question about your order, our nature-conscious team is here to help.
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-500">
                                    <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-xl text-stone-900 shadow-sm border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <HiOutlineMail />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Send Email</p>
                                        <p className="font-black text-stone-900 text-lg">hello@kkdryfruits.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-500">
                                    <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-xl text-stone-900 shadow-sm border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <HiOutlinePhone />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Quick Call</p>
                                        <p className="font-black text-stone-900 text-lg">+91 94567 23410</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-500">
                                    <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-xl text-stone-900 shadow-sm border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <HiOutlineLocationMarker />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Our Studio</p>
                                        <p className="font-black text-stone-900 text-lg">7th Floor, Orchard Tower, Bangalore 560001</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:w-2/3 bg-stone-50 rounded-[4rem] p-12 md:p-20 border border-stone-100 shadow-sm shadow-stone-200">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-3 px-2">Your Full Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter your name"
                                        className="bg-white border border-stone-100 p-5 rounded-2xl text-stone-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-stone-300 shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-3 px-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email"
                                        className="bg-white border border-stone-100 p-5 rounded-2xl text-stone-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-stone-300 shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-3 px-2">Your Subject</label>
                                    <input 
                                        type="text" 
                                        placeholder="What's this about?"
                                        className="bg-white border border-stone-100 p-5 rounded-2xl text-stone-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-stone-300 shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-3 px-2">Message Details</label>
                                    <textarea 
                                        rows="6" 
                                        placeholder="Write your heart out..."
                                        className="bg-white border border-stone-100 p-5 rounded-3xl text-stone-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-stone-300 shadow-sm resize-none"
                                    />
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <button 
                                        type="submit" 
                                        className="w-full bg-stone-900 text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-stone-900/10 hover:bg-amber-600 transition-all transform active:scale-[0.98]"
                                    >
                                        Send Message <HiArrowRight className="inline-block ml-2 text-lg align-text-bottom" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
