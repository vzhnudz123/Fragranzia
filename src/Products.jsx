import React, { useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import products from './productsData';
import { useDispatch } from 'react-redux';
import { addtocart } from './redux/cartSlice';
import { Link } from 'react-router-dom';

const Products = () => {

    const dispatch=useDispatch();

    const [search,setsearch]=useState('');

    const searchfilter=products.filter((product)=>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const handlechange=(e)=>{
        setsearch(e.target.value)

    }

    const handleadd=(product)=>{
        dispatch(addtocart(product))
    }




  const [visibleCount, setVisibleCount] = useState(6);
  const [filter, setFilter] = useState('All');

  const handleLoadMore = () => setVisibleCount(prev => prev + 3);

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(prod => prod.category === filter);

  return (
    <div>
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-4 shadow bg-white">
        <div className="text-2xl font-bold text-[#003b4a]">Fragranzia</div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 ms-40">
          <a href="/" className="hover:text-[#003b4a]">Home</a>
          <a href="/products" className="hover:text-[#003b4a]">Products</a>
          <a href="/gifting" className="hover:text-[#003b4a]">Gifting</a>
          <a href="/about" className="hover:text-[#003b4a]">About</a>
        </div>
        <div className="flex items-center space-x-4">
          <input onChange={handlechange} type="text" placeholder="Search Here" className="hidden md:block border rounded px-3 py-1 text-sm" />
         <Link to={'/cart'}><button><MdOutlineShoppingCart /></button></Link> 
          <button><IoIosNotifications /></button>
          <button><FaCircleUser /></button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 my-6">
        {['All', 'Fresh', 'Floral', 'Woody'].map(category => (
          <button
            key={category}
            className={`px-4 py-1 border rounded-full ${filter === category ? 'bg-[#003b4a] text-white' : 'text-[#003b4a] border-[#003b4a]'}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {searchfilter.slice(0, visibleCount).map(product => (
          <div key={product.id} className="border p-4 rounded shadow text-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-3 rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-[#003b4a] font-bold mt-2">₹{product.price}</p>
            <button
      onClick={() => handleadd(product)}
      className="mt-3 px-4 py-2 bg-[#003b4a] text-white rounded hover:bg-[#002f3a]"
    >
      Add to Cart
    </button>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredProducts.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#003b4a] text-white rounded-full hover:bg-[#002f3a]"
          >
            Load More
          </button>
        </div>
      )}
       <footer className="bg-[#003b4a] text-white mt-16 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-2">Fragranzia</h4>
            <p>fragrantluxes@gmail.com</p>
            <p>+91 9997642810</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Pages</h4>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Gifting</li>
              <li>About</li>
              <li>Profile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li>Privacy policy</li>
              <li>Terms and conditions</li>
              <li>FAQs</li>
              <li>Customer service</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs mt-6 border-t border-gray-400 pt-4">
          © 2024 Fragranzia Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Products;
