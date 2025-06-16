import React from 'react';
import aboutImg from './images/nolan-kent-aZM1ng82J40-unsplash.jpg'; // Make sure this image exists in src/images/

const About = () => {
  return (
    <div className="text-gray-700">
      {/* Hero Section */}
      <section className="relative bg-[#003b4a] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Fragranzia</h1>
          <p className="text-lg">
            A fragrance isn't just a scent – it's a memory, a feeling, a statement.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full h-80 bg-cover bg-center" style={{ backgroundImage: `url(${aboutImg})` }} />

      {/* Mission + Story */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-[#003b4a] mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At Fragranzia, we believe in the power of scent to transform moments. We curate premium perfumes that
            celebrate individuality, confidence, and emotion — made for all genders and occasions.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#003b4a] mb-4">Our Journey</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2024, Fragranzia was born out of a passion for timeless elegance. We collaborate with
            top perfumers and use ethically sourced ingredients to craft each bottle, ensuring every spray
            tells a story.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#003b4a] mb-6">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-sm text-gray-600">We never compromise on premium ingredients and lasting performance.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Inclusivity</h3>
              <p className="text-sm text-gray-600">Fragranzia is for everyone — no matter gender, age, or style.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-sm text-gray-600">We prioritize eco-friendly packaging and cruelty-free formulations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
