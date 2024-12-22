
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-end px-4"
      style={{
        backgroundImage: "url('/images/scandinavian-interior-mockup-wall-decal-background 1.png')" // Correct image path
      }}
    >
      {/* White Div with Text */}
      <div className="bg-orange-100 p-8 rounded-md shadow-lg max-w-lg w-full text-center lg:text-left">
        <span className="text-pink-500 uppercase text-sm font-semibold">New Arrival</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
          Discover Our New Collection
        </h1>
        <p className="text-gray-600 mt-4">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.`}
        </p>

        <button className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
