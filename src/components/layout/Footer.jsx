import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'Nuts', path: '/shop?category=Nuts' },
      { name: 'Dried Fruits', path: '/shop?category=Dried%20Fruits' },
      { name: 'Seeds', path: '/shop?category=Seeds' },
    ],
    support: [
      { name: 'Order Status', path: '/orders' },
      { name: 'Shipping Policy', path: '/' },
      { name: 'Return Policy', path: '/' },
      { name: 'FAQ', path: '/' },
      { name: 'Contact Us', path: '/contact' }
    ],
    company: [
      { name: 'About DryFruits', path: '/about' },
      { name: 'Our Nutrition', path: '/services' },
      { name: 'Privacy Policy', path: '/' },
      { name: 'Terms of Service', path: '/' },
      { name: 'Wholesale', path: '/contact' }
    ]
  };

  return (
    <footer className="bg-stone-900 pt-20 pb-10 text-stone-300 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group pb-10">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img
                  src="/logo.png"
                  alt="KK Dry Fruits Logo"
                  className="w-full h-full rounded-full object-contain filter drop-shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-amber-400 leading-none">
                  Dry<span className="text-amber-600">Fruits</span>
                </span>

              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-8 max-w-xs">
              Discover nature's finest treasures. We bring you premium quality dry fruits, nuts, and seeds sourced from the best orchards around the globe.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Shop Categories</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-amber-500 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Customer Care</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-amber-500 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1 xl:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide">Stay Healthy</h4>
            <p className="text-stone-400 text-sm mb-6 max-w-sm">
              Subscribe to receive wellness tips, nutritional guides, and exclusive offers.
            </p>
            <form className="relative group max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-stone-800 border border-stone-700 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-amber-600 transition-all font-medium pr-32"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-amber-600 text-white px-6 rounded-xl font-bold hover:bg-amber-500 transition-all active:scale-95 shadow-lg shadow-amber-600/20"
              >
                Join
              </button>
            </form>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 text-sm group">
                <div className="p-2.5 rounded-lg bg-stone-800 text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <HiOutlineLocationMarker className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Headquarters</p>
                  <p className="text-stone-500">123 Orchards Ave, Harvest Valley, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm group">
                <div className="p-2.5 rounded-lg bg-stone-800 text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <HiOutlinePhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <p className="text-stone-500">+1 (888) DRY-FRUIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-stone-500 text-sm">
            <span>© {currentYear} DryFruits. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.company.slice(2, 4).map((link) => (
              <Link key={link.name} to={link.path} className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;

