import React from 'react';
import Feature from './Feature';
import Testimonials from './Testimonials';
import NewProducts from './NewProducts';
import CategoryList from './CategoryList';
import Heroo from './Heroo';
import Banner from './Banner';
import TrendingProducts from './TrendingProducts';

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50 overflow-hidden">
      <Heroo />
      <CategoryList />
      <NewProducts />
      <Banner />
      <TrendingProducts />
      <Feature />
      <Testimonials />
    </div>
  );
};

export default Home;
