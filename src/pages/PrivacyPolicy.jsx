import React from 'react';
import PageHeader from '../components/layout/PageHeader';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Shipping Policy",
            content: "We offer free standard shipping on all orders over ₹500 within India. Orders are typically processed within 24-48 hours, and delivery usually takes between 3 to 5 business days depending on your location. You will receive a tracking ID via email once your order has been dispatched."
        },
        {
            title: "Return & Refund Policy",
            content: "Due to the perishable nature of our products, we do not accept returns. However, we are committed to your satisfaction. If you receive a damaged, expired, or incorrect product, please reach out to us within 24 hours of delivery with photos, and we will process a full refund or replacement immediately."
        },
        {
            title: "Information Collection",
            content: "We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This may include your name, email address, shipping address, and payment information."
        },
        {
            title: "Use of Information",
            content: "We use the information we collect to process your orders, communicate with you about your account and our products, and improve our services. We do not sell or share your personal information with third parties for their own marketing purposes."
        },
        {
            title: "Data Security",
            content: "We implement a variety of security measures to maintain the safety of your personal information when you place an order. We use encrypted SSL technology to protect sensitive data during transmission."
        },
        {
            title: "Cookies",
            content: "We use cookies to help us remember and process the items in your shopping cart and understand your preferences for future visits."
        },
        {
            title: "Your Rights",
            content: "You have the right to access, correct, or delete your personal information at any time. You can do this by logging into your account or by contacting us directly."
        }
    ];

    return (
        <main className="bg-white min-h-screen">
            <PageHeader 
                title="Policies & Privacy" 
                subtitle="Detailed information about our shipping, returns, and how we protect your data."
            />
            
            <section className="py-24 max-w-4xl mx-auto px-4 md:px-8">
                <div className="space-y-16">
                    {sections.map((section, idx) => (
                        <div key={idx} className="group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-amber-600 font-serif italic text-4xl">0{idx + 1}</span>
                                <h3 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight">{section.title}</h3>
                            </div>
                            <p className="text-stone-500 font-medium leading-relaxed text-lg border-l-2 border-stone-100 pl-8 group-hover:border-amber-600 transition-colors duration-500">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 p-10 bg-stone-50 rounded-[3rem] border border-stone-100 text-center">
                    <p className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-4">Need more clarity?</p>
                    <h4 className="text-2xl font-black text-stone-900 mb-6 tracking-tight">Got questions about your data?</h4>
                    <p className="text-stone-500 mb-8 max-w-md mx-auto">Feel free to reach out to our privacy team for any detailed inquiries regarding your personal information.</p>
                    <a href="/contact" className="inline-block px-10 py-4 bg-stone-900 text-white font-bold rounded-2xl hover:bg-amber-600 transition-all hover:shadow-xl">
                        Contact Privacy Team
                    </a>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
