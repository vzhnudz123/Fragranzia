import React from "react";

const product = {
  name: "Autograph eau de parfum 100ml",
  brand: "Autograph",
  rating: 4.5,
  reviews: 1000,
  price: 899,
  mrp: 999,
  discount: "10%",
  images: [
    "/images/prod-main.png",
    "/images/prod-1.png",
    "/images/prod-2.png",
  ],
  offers: [
    "Buy 1, get 1 free",
    "Extra 10% off using XYZ card",
    "Flat ₹100 off on your first order",
  ],
  description:
    "This fragrance embodies a confident and sophisticated personality. With bold top notes and a lingering base, it's perfect for evening wear.",
};

export default function ProductDetails() {
  return (
    <div className="px-6 md:px-16 py-10 bg-white">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left - Images */}
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-96 object-contain"
          />
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                className="w-20 h-20 object-contain border p-1"
              />
            ))}
          </div>
        </div>

        {/* Right - Details */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{product.brand}</p>

          <div className="mt-2 text-yellow-500">
            ⭐ {product.rating} | {product.reviews} ratings
          </div>

          <div className="mt-4 text-2xl font-bold text-gray-900">
            ₹{product.price}
            <span className="text-sm text-gray-400 line-through ml-2">
              ₹{product.mrp}
            </span>
            <span className="text-green-500 ml-2">{product.discount} off</span>
          </div>

          <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 w-full">
            Purchase Now
          </button>

          <button className="mt-4 border border-gray-300 px-6 py-3 rounded w-full hover:bg-gray-100">
            Add to Cart
          </button>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Available Offers</h4>
            <ul className="list-disc pl-5 text-sm text-green-700">
              {product.offers.map((offer, i) => (
                <li key={i}>{offer}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
