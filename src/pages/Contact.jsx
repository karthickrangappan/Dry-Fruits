import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
    HiArrowRight
} from 'react-icons/hi';

const Contact = () => {
    return (
        <main className="bg-white min-h-screen overflow-hidden">
            <PageHeader title="Get In Touch" />

            <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 relative z-10">
                <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                    <div className="flex flex-col lg:flex-row gap-12 sm:gap-14 md:gap-16 lg:gap-12 xl:gap-16 2xl:gap-24">

                        {/* Info Column */}
                        <div className="w-full lg:w-1/3">

                            <p className="text-amber-600 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4">
                                Contact Us
                            </p>

                            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl font-black text-stone-900 tracking-tighter mb-7 sm:mb-8 md:mb-10 lg:mb-12">
                                We'd Love To <br />
                                <span className="text-amber-600 italic font-serif text-5xl sm:text-6xl md:text-6xl lg:text-[3.8rem] xl:text-6xl 2xl:text-7xl">
                                    Hear From You
                                </span>
                            </h2>

                            <p className="text-stone-500 text-sm sm:text-base md:text-base lg:text-sm xl:text-base font-medium mb-10 sm:mb-12 md:mb-14 lg:mb-16 leading-relaxed max-w-2xl">
                                Whether you're curious about our sourcing, need nutritional advice, or have a question about your order, our nature-conscious team is here to help.
                            </p>

                            <div className="space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-10">

                                {/* Email */}
                                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 group hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-500">
                                    <div className="shrink-0 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-stone-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl text-stone-900 shadow-sm border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <HiOutlineMail />
                                    </div>

                                    <div className="min-w-0 pt-1">
                                        <p className="text-[9px] sm:text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">
                                            Send Email
                                        </p>

                                        <p className="font-black text-stone-900 text-sm sm:text-base md:text-lg break-all">
                                            karthickrangappan@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 group hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-500">
                                    <div className="shrink-0 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-stone-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl text-stone-900 shadow-sm border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <HiOutlinePhone />
                                    </div>

                                    <div className="min-w-0 pt-1">
                                        <p className="text-[9px] sm:text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">
                                            Quick Call
                                        </p>

                                        <p className="font-black text-stone-900 text-sm sm:text-base md:text-lg break-words">
                                            +91 8825415354
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 group hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-500">
                                    <div className="shrink-0 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-stone-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl text-stone-900 shadow-sm border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <HiOutlineLocationMarker />
                                    </div>

                                    <div className="min-w-0 pt-1">
                                        <p className="text-[9px] sm:text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">
                                            Our location
                                        </p>

                                        <p className="font-black text-stone-900 text-sm sm:text-base md:text-lg leading-relaxed break-words">
                                            Madipakkam,<br />
                                            Kanchipuram district,<br />
                                            Chennai - 600091,<br />
                                            Tamil Nadu, India
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="w-full lg:w-2/3 bg-stone-50 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] xl:rounded-[4rem] p-6 sm:p-8 md:p-10 lg:p-10 xl:p-14 2xl:p-20 border border-stone-100 shadow-sm shadow-stone-200">

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">

                                {/* Full Name */}
                                <div className="flex flex-col">
                                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-stone-400 mb-2 sm:mb-3 px-1 sm:px-2">
                                        Your Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full bg-white border border-stone-100 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-sm sm:text-base text-stone-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-stone-300 shadow-sm"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col">
                                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-stone-400 mb-2 sm:mb-3 px-1 sm:px-2">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-white border border-stone-100 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-sm sm:text-base text-stone-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-stone-300 shadow-sm"
                                    />
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-stone-400 mb-2 sm:mb-3 px-1 sm:px-2">
                                        Your Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="What's this about?"
                                        className="w-full bg-white border border-stone-100 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-sm sm:text-base text-stone-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-stone-300 shadow-sm"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col md:col-span-2">
                                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-stone-400 mb-2 sm:mb-3 px-1 sm:px-2">
                                        Message Details
                                    </label>

                                    <textarea
                                        rows="6"
                                        placeholder="Write your heart out..."
                                        className="w-full bg-white border border-stone-100 p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-sm sm:text-base text-stone-900 font-bold focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-stone-300 shadow-sm resize-none"
                                    />
                                </div>

                                {/* Button */}
                                <div className="md:col-span-2 pt-1 sm:pt-2 md:pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-amber-600 text-white py-4 sm:py-5 md:py-6 rounded-2xl sm:rounded-3xl font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-[10px] shadow-2xl shadow-stone-900/10 hover:bg-amber-700 transition-all transform active:scale-[0.98]"
                                    >
                                        Send Message
                                        <HiArrowRight className="inline-block ml-2 text-base sm:text-lg align-text-bottom" />
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