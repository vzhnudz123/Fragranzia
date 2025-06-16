import React from 'react';
import gift1 from './images/deanna-alys-xQwRvghauaU-unsplash.jpg';
import gift2 from './images/laurissi-CVz2Ove_NuI-unsplash.jpg';
import gift3 from './images/8b221d36b69717e337d9b79f24354c56b4d5085b.jpg';
import { Link } from 'react-router-dom';

const giftItems = [
  {
    id: 1,
    name: 'Luxury Gift Box for Her',
    description: 'A floral and elegant blend perfect for every woman.',
    img: gift1,
  },
  {
    id: 2,
    name: 'Bold Essence for Him',
    description: 'Woody and musky notes to define confidence.',
    img: gift2,
  },
  {
    id: 3,
    name: 'Romantic Couple Duo',
    description: 'Matching scents for unforgettable moments together.',
    img: gift3,
  },
];

const Gift = () => {
  return (
    <div className="text-gray-700">
      {/* Header */}
      <section className="bg-[#003b4a] text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-2">Fragrance Gifting</h1>
        <p className="text-lg">The perfect gift, wrapped in elegance and scent.</p>
      </section>

      {/* Gift Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {giftItems.map((item) => (
          <div key={item.id} className="bg-white shadow rounded overflow-hidden">
            <img src={item.img} alt={item.name} className="h-64 w-full object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
             <Link to={'/product'}><button className="bg-[#003b4a] text-white px-4 py-2 rounded hover:bg-[#005264] transition">
                Explore
              </button></Link> 
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gift;
