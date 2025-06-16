import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removecart } from './redux/cartSlice';

const Cart = () => {

    const cartitems=useSelector(state=>state.cart.items);
    const dispatch=useDispatch();

const discount = cartitems.length > 0 ? 250 : 0;
const shipping = cartitems.length > 0 ? 50 : 0;

const subtotal = cartitems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
const total = subtotal - discount + shipping;


    
  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Cart Items Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#003b4a] mb-6">🛒 Shopping Cart</h2>
          <div className="space-y-6">
            {/* Single Cart Item */}
            {cartitems.map((product,id) => (
              <div key={id} className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded shadow">
                <div className="flex items-center gap-4 w-full md:w-2/3">
                  <img
                    src={`.jpg`}
                    alt="Product"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#003b4a]">Perfume: {product.name}</h4>
                    <p className="text-sm text-gray-500">Category: Woody</p>
                    <p className="text-sm text-gray-500">50ml</p>
                  </div>
                </div>

                {/* Quantity & Price */}
                <div className="flex flex-col items-end w-full md:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <button onClick={()=>dispatch(decreaseQuantity(product.id))} className="px-2 py-1 border rounded text-sm">-</button>
                    <span className="px-3">{product.quantity}</span>
                    <button onClick={()=>dispatch(increaseQuantity(product.id))} className="px-2 py-1 border rounded text-sm">+</button>
                  </div>
                  <p className="text-[#003b4a] font-semibold text-right">₹1800</p>
                  <button onClick={()=>dispatch(removecart(product.id))} className="text-sm text-red-500 mt-1 hover:underline">Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded shadow h-fit">
          <h3 className="text-xl font-semibold text-[#003b4a] mb-4">Cart Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">-₹{discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-lg text-[#003b4a]">
              <span>Total</span>
              <span>{total}</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-[#003b4a] hover:bg-[#002f3a] text-white py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
