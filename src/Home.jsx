import React, { useRef, useState } from 'react';
import { FaShippingFast, FaLock, FaHeadset } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import frag from './images/108984 1.png'
import caro1 from './images/bab3135c7f2ed8a335cb9a00ac3c00ef33704e89.png'
import caro2 from './images/bab3135c7f2ed8a335cb9a00ac3c00ef33704e89.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import bottle from './images/008b0741afb5a356ca961785c67012d75bc3802b.png'
import bottle2 from './images/eca718a09edd838874403cb7193d84d2765e110f.png'
import offerBg from './images/pexels-valeriya-965989.jpg'
import offerbg2 from './images/jess-bailey-NaTza96eJm0-unsplash.jpg'
import offerbg3 from './images/camille-paralisan-LgoehzzFAMA-unsplash.jpg'
import supimg from './images/9a95452ac3a33a3c661ab148aa613e68717d0300.jpg'
import supimg2 from './images/deanna-alys-xQwRvghauaU-unsplash.jpg'
import supimg3 from './images/laurissi-CVz2Ove_NuI-unsplash.jpg'
import cat1 from './images/8b221d36b69717e337d9b79f24354c56b4d5085b.jpg'
import cat2 from './images/db814c4ab5fa981813151d5f7feb813108479799.png'
import featuredCollections from './featuredCollections';
import offerzone from './offerzone';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ex from './images/7bbfcc07ec3feb88aa39baff652085e82d06fe85.png'
import ex2 from './images/4b98715dae7c344c65a0842e7a031d6561f369f7.png'
import ex3 from './images/7e34e519fe555365cfd7fce4cf264fcd42f18236.png'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from './redux/cartSlice';
import nw from './images/c89818398a15db0798bc360f86f19e117b080035.jpg'
import { HiMenu, HiX } from "react-icons/hi";


const Home = () => {
  const dispatch=useDispatch();

  const handleadd=(product)=>{
    dispatch(addtocart(product))
  }





const scrollRef = useRef(null);

const scroll = (direction) => {
  if (scrollRef.current) {
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
};

const [isOpen, setIsOpen] = useState(false);


  const categories = [
  {
    name: "Eau De Parfum",
    img: cat1
  },
  {
    name: "Eau De Toilette",
    img: cat2
  },
  {
    name: "Floral Scents",
    img: ex
  },
  {
    name: "Woody Scents",
    img: ex2
  },
  {
    name: "Citrus Scents",
    img: ex3
  },
  {
    name: "Unisex",
    img: nw
  }
];

  return (
    <div className="font-sans">

      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-4 shadow bg-white">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#003b4a]">Fragranzia</div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 ms-40">
          <a href="/" className="hover:text-[#003b4a]">Home</a>
          <a href="product" className="hover:text-[#003b4a]">Products</a>
          <a href="gifting" className="hover:text-[#003b4a]">Gifting</a>
          <a href="about" className="hover:text-[#003b4a]">About</a>
        </div>

         {/* Mobile menu toggle button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>



      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden z-50">
          <a href="/" className="hover:text-[#003b4a]">Home</a>
          <a href="/product" className="hover:text-[#003b4a]">Products</a>
          <a href="/gifting" className="hover:text-[#003b4a]">Gifting</a>
          <a href="/about" className="hover:text-[#003b4a]">About</a>
        </div>
      )}
  

        {/* Search + Icons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Here"
            className="hidden md:block border rounded px-3 py-1 text-sm"
          />
          <Link to={'/cart'}> <button>
            <MdOutlineShoppingCart />
          </button></Link>
          <button>
            <IoIosNotifications />
          </button>
          <button>
            <FaCircleUser />
          </button>
        </div>
      </div>

      {/* Top Banner */}
      <div className="bg-[#003b4a] text-white text-center py-2 text-sm font-medium">
        ENJOY FESTIVE DISCOUNTS! FREE SHIPPING ABOVE ₹999 !
      </div>

      {/* Hero Section */}
      {/* Hero Section Carousel */}
      <div className="m-4">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          interval={5000}
          className="rounded-lg overflow-hidden"
        >
          {/* Slide 1 */}
          <div className="bg-[#002f3a] text-white px-6 py-12 flex flex-col md:flex-row items-center justify-between" style={{
            backgroundImage: `url(${caro1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          >
            <div className="max-w-xl ">
              <h1 className="text-3xl font-bold mb-4">Discover perfumes that celebrate individuality</h1>
              <p className="mb-6">Every moment with an unforgettable essence.</p>
              <button className="bg-white text-[#002f3a] font-semibold px-4 py-2 rounded">Shop Now</button>
            </div>

            <div className='flex relative'>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end  z-50">
                <img
                  src={bottle2}
                  alt="Perfume"
                  className=" h-60 w-40 object-contain absolute"
                  style={{ transform: 'rotate(-20deg)' }}
                />
              </div>

              <div className="w-full md:w-1/2 flex justify-center md:justify-end ">
                <img
                
                  src={bottle2}
                  alt="Perfume"
                  className=" h-60 w-40 object-contain mr-60 "
                  style={{ transform: 'rotate(20deg)' }}
                />
              </div>
            </div>


          </div>

          {/* Slide 2 */}
          <div className="bg-[#003b4a] text-white px-6 py-12 flex flex-col md:flex-row items-center justify-between" style={{
            backgroundImage: `url(${caro2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',


          }}>
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold mb-4">Luxury scents for every mood</h1>
              <p className="mb-6">Crafted for unforgettable impressions.</p>
              <button className="bg-white text-[#003b4a] font-semibold px-4 py-2 rounded">Explore</button>
            </div>
            <div className='flex relative'>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end  z-50">
                <img
                  src={bottle}
                  alt="Perfume"
                  className=" h-60 w-40 object-contain absolute"
                  style={{ transform: 'rotate(-20deg)' }}
                />
              </div>

              <div className="w-full md:w-1/2 flex justify-center md:justify-end ">
                <img
                  src={bottle}
                  alt="Perfume"
                  className=" h-60 w-40 object-contain mr-60"
                  style={{ transform: 'rotate(30deg)' }}
                />
              </div>
            </div>
          </div>

          {/* Add more slides as needed */}
        </Carousel>
      </div>


      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 mt-8">
        <div
        
          className="p-4 rounded shadow text-center text-white bg-cover bg-center h-40"
          style={{
            backgroundImage: `url(${offerBg})`,
          }}
        >
          <h3 className="font-semibold mb-2 text-white ">Unlock Exclusive Offers</h3>
          <p>Discover special deals tailored just for you!</p>
        </div>

        <div
          className="p-4 rounded shadow text-center text-white bg-cover bg-center h-40"
          style={{
            backgroundImage: `url(${offerbg2})`,
          }}
        >
          
          <h3 className="relative z-10 font-semibold mb-2 text-white">Gift a Scent to your loved one</h3>
          <p>Make your love more beautiful</p>
        </div>
        <div
          className="p-4 rounded shadow text-center text-white bg-cover bg-center h-40"
          style={{
            backgroundImage: `url(${offerbg3})`,
          }}
        >
          <h3 className="font-semibold mb-2 text-white">Luxury Scents Starting at ₹4,000</h3>
          <p>Shop Now</p>
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-col md:flex-row justify-around items-center text-center px-6 mt-12 space-y-6 md:space-y-0 rounded ">
        <div>
          <FaShippingFast className="text-2xl mx-auto mb-2" />
          <p className="font-medium">Fast & Reliable Delivery</p>
          <p>Get your orders delivered on time, every time.</p>
        </div>
        <div>
          <FaLock className="text-2xl mx-auto mb-2" />
          <p className="font-medium">Secure Payments</p>
          <p>Shop with confidence using our encrypted payment gateways.</p>
        </div>
        <div>
          <FaHeadset className="text-2xl mx-auto mb-2" />
          <p className="font-medium">24/7 Customer Support</p>
          <p>We’re here to assist you anytime, anywhere</p>
        </div>
      </div>

      {/* Featured Collections */}
<section className="px-6 mt-12">
  <h2 className="text-xl font-semibold mb-4">
    Featured <span className="text-[#004b6b]">Collections</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {featuredCollections.map((item, index) => (
      <div key={index} className="bg-white p-4 rounded shadow text-center">
        <img src={item.img} alt={item.name} className="mx-auto mb-2 h-64" />
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm">{item.gender}</p>
        <p className="text-[#004b6b] font-semibold">
          ₹{item.price}{' '}
          <span className="line-through text-gray-400">₹{item.originalPrice}</span>
        </p>
        <button onClick={()=>handleadd(featuredCollections)} className="mt-2 px-4 py-1 bg-[#003b4a] text-white rounded">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>


      {/* Quote */}
      <div className="flex text-center justify-center px-6 mt-16 italic text-gray-700 ">
        <p className='w-96'>"It's an art. A craft. A science. At Fragranzia, we're in the business of creating memories that last forever through our fragrances."</p>
      </div>

<div className='flex gap-6 justify-center mt-14 group'>
  <div className='transition-all duration-500 hover:w-80 hover:h-80'>
    <img
      className='w-96 h-96 rounded object-cover transition-all duration-500 '
      src={supimg}
      alt=""
    />
  </div>

  <div className='transition-all duration-500 hover:w-80 hover:h-80'>
    <img
      className='w-96 h-96 rounded object-cover transition-all duration-500 '
      src={supimg2}
      alt=""
    />
  </div>

  <div className='transition-all duration-500 hover:w-80 hover:h-80'>
    <img
      className='w-96 h-96 rounded object-cover transition-all duration-500  '
      src={supimg3}
      alt=""
    />
  </div>
</div>


      {/* Explore Categories */}
<section className="px-6 mt-16 ">
  <h2 className="text-xl font-semibold mb-4">
    Explore <span className="text-[#004b6b]">Categories</span>
  </h2>

  <div className="flex flex-wrap gap-16 justify-center md:justify-start mt-6">
    {categories.map((category, index) => (
      <div key={index} className="text-center">
        <img
          src={category.img}
          alt={category.name}
          className="w-40 h-32 mx-auto mb-1 object-contain"
        />
        <p className="text-sm">{category.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* Offer zone */}

 <section className="px-6 py-12 bg-gradient-to-b ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-[#004b6b]">Offer Zone</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-[#004b6b] text-white rounded-full hover:bg-[#003548]"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-[#004b6b] text-white rounded-full hover:bg-[#003548]"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-2"
      >
        {offerzone.map((item) => (
          <div
            key={item.id}
            className="min-w-[280px] flex-shrink-0 bg-white rounded-2xl shadow-lg p-4 hover:shadow-blue-400 transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
            <p className="mt-1 text-gray-600">
              <span className="line-through mr-2">₹{item.originalPrice}</span>
              <span className="text-[#d00000] font-bold">₹{item.offerPrice}</span>
            </p>
            <p className="text-sm text-green-600 font-semibold mt-1">
              {item.discount}
            </p>
            <button className="mt-4 bg-[#004b6b] text-white px-4 py-2 rounded hover:bg-[#003548]">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>





      {/* Offer Banner */}
<div className="bg-[#d5f1f8] px-6 py-8 mt-16 rounded-lg flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-6">
  {/* Text Section */}
  <div className="text-center md:text-left">
    <h3 className="text-2xl md:text-3xl font-semibold mb-2">Elegance in Every Bottle</h3>
    <p className="mb-4 text-sm md:text-base">
      Discover timeless fragrances crafted for every moment
    </p>
    <button className="bg-[#003b4a] text-white px-4 py-2 rounded">
      Shop Now
    </button>
  </div>

  {/* Image */}
  <img src={frag} alt="Bottle" className="w-40 sm:w-48 md:w-60" />
</div>

      {/* Footer */}
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

export default Home;