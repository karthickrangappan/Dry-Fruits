import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import PrivateAuth from './private/PrivateAuth'
import Shop from './pages/Shop'
import Categories from './pages/Categories'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'
import Orders from "./pages/Orders"
import ProductCard from './components/product/ProductCard'
import ProductDetails from './pages/ProductDetails'
import CategoryView from './pages/CategoryView'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import { ShopProvider } from './context/ShopContext'

import ScrollToTop from './components/common/ScrollToTop';

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productcard" element={<ProductCard />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:categoryName" element={<CategoryView />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route element={<PrivateAuth />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ShopProvider>

  )
}
