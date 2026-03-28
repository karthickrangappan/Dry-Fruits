import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight, HiOutlineHome } from 'react-icons/hi';

const PageHeader = ({ title, subtitle, breadcrumbs = [] }) => {
    const [firstWord, ...restWords] = title.split(' ');

    return (
        <section className="relative w-full py-10 md:py-15">
            <div className="absolute inset-0 z-0">
                <img
                    src="/header-img.png"            
                    alt=""
                    className="w-full h-full object-center object-cover"
                />
                <div className="absolute inset-0 " />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-8 pt-6 md:pt-10">
                    <div className="max-w-2xl">
                        <h1 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-6 leading-tight tracking-tighter text-center">
                            {firstWord}{' '}
                            <span className="text-amber-500 italic font-serif">
                                {restWords.join(' ')}
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;