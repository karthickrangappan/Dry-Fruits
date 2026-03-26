import React from 'react';
import Hero from './Hero';
import Feature from './Feature';
import Testimonials from './Testimonials';
import  NewProducts from './NewProducts';

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50 overflow-hidden">
      <Hero />
      <Feature />
      <NewProducts />
      <Testimonials />
    </div>
  );
};

export default Home;
