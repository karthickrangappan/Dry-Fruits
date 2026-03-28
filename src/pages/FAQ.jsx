import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { HiChevronDown } from 'react-icons/hi';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is the source of your dry fruits?",
            answer: "We source our products directly from selected farms and growers across the globe, prioritizing quality and sustainability in every harvest."
        },
        {
            question: "How do you ensure the freshness of your products?",
            answer: "We use airtight, light-protected packaging for every order and maintain strict climate control in our distribution centers to ensure every product arrives as fresh as the day it was harvested."
        },
        {
            question: "What is your shipping policy?",
            answer: "We offer free shipping on orders over ₹500. Standard shipping takes about 3-5 business days, and you'll receive a tracking number as soon as your order has been processed."
        },
        {
            question: "Do you offer international shipping?",
            answer: "At the moment, we only ship within India. However, we're working on expanding our reach to international health-conscious customers soon."
        },
        {
            question: "What is your return policy?",
            answer: "Due to the perishable nature of our products, we typically do not accept returns. However, if you receive a damaged or incorrect order, please contact us within 24 hours for a full refund or replacement."
        },
        {
            question: "How should I store my dry fruits?",
            answer: "To maintain maximum freshness, store your dry fruits in an airtight container in a cool, dark place. For long-term storage, keeping them in the refrigerator or freezer is recommended."
        }
    ];

    return (
        <main className="bg-white min-h-screen">
            <PageHeader 
                title="Frequently Asked Questions" 
                subtitle="Everything you need to know about our products, shipping, and more."
            />
            
            <section className="py-24 max-w-4xl mx-auto px-4 md:px-8">
                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-stone-50 rounded-[2.5rem] border border-stone-100 overflow-hidden group hover:border-amber-200 transition-all">
                            <button 
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between gap-6 group-hover:bg-amber-50/50 transition-colors"
                            >
                                <span className={`text-lg font-black text-stone-900 leading-tight transition-colors ${openIndex === idx ? 'text-amber-600' : ''}`}>{faq.question}</span>
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center bg-white text-stone-400 border border-stone-100 transition-all ${openIndex === idx ? 'rotate-180 bg-stone-900 text-white shadow-lg' : ''}`}>
                                    <HiChevronDown className="w-6 h-6" />
                                </div>
                            </button>
                            <div className={`transition-all duration-500 overflow-hidden ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="px-8 pb-8 pt-2 text-stone-500 font-medium leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center bg-stone-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                        <p className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Still need help?</p>
                        <h4 className="text-3xl font-black mb-6 tracking-tighter">Can't find what you're looking for?</h4>
                        <p className="text-stone-400 mb-10 max-w-md mx-auto">Our dedicated customer support team is always ready to assist you with any specific queries you may have.</p>
                        <a href="/contact" className="inline-block px-12 py-5 bg-amber-600 text-white font-black rounded-3xl hover:bg-white hover:text-stone-900 transition-all transform hover:-translate-y-1 shadow-xl">
                            Chat With Us Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FAQ;
