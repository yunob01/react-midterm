import React, { useState, useRef } from 'react';

import AddToCart from "@/components/AddToCart";
import BuyNow from "@/components/BuyNow";
import NowSpinning from "@/components/NowSpinning";

const ProductDetail = ({ product }) => {
  const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleSpinClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="flex justify-center px-4 sm:px-12 lg:px-24 min-h-screen font-serif text-[#6A4E42]">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center lg:items-start justify-center gap-10 lg:gap-20 py-16">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-xs sm:max-w-sm lg:w-[360px] h-auto object-cover shadow-md"
          />

          <div className="flex flex-col items-start w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-full">
            <p className="text-sm font-sans text-[#A26E57]">{product.category}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold pt-2">{product.name}</h2>

            <p className="text-sm font-sans text-[#A26E57] pt-6 pb-2">Price</p>
            <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>

            <div className="flex flex-col items-start pt-4">
              <p className="text-sm font-sans text-[#A26E57] pb-2">Quantity</p>
              <select
                id="quantity"
                defaultValue={product.stock > 0 ? 1 : 0}
                onChange={(e) => setQty(Number(e.target.value))}
                className="border rounded px-3 py-1 bg-white"
              >
                {[...Array(product.stock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4">
              <p className="text-sm font-sans text-[#A26E57]">Total</p>
              <span className="text-lg font-semibold">${(product.price * qty).toFixed(2)}</span>
            </div>

            <div className="flex space-x-3 mt-4 pt-2">
              <BuyNow />
              <AddToCart product={{ ...product, countInStock: product.stock }} qty={qty} />
            </div>
          </div>
        </div>

        {/* Product Description */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mt-10">Product Description</h2>
        <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row-reverse items-center sm:items-start justify-center gap-6 text-center sm:text-left">
          <img
            src={product.image}
            alt={product.vinyl.name}
            className="w-[120px] sm:w-[160px] h-auto object-cover shadow-md"
          />
          <div className="space-y-2 max-w-xl">
            <h4 className="text-lg sm:text-xl font-semibold">{product.name}</h4>
            <p className="text-sm text-[#A26E57] leading-relaxed font-sans">{product.description}</p>
          </div>
        </div>

        {/* Recommended Vinyl */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mt-20">Recommended Vinyl</h2>
        <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 justify-center text-center sm:text-left">
          <img
            src={product.vinyl.image}
            alt={product.vinyl.name}
            className="w-[120px] sm:w-[160px] h-auto object-cover shadow-md"
          />
          <div className="space-y-2 max-w-xl">
            <h4 className="text-lg sm:text-xl font-semibold">{product.vinyl.name}</h4>
            <p className="text-sm text-[#A26E57] leading-relaxed font-sans">{product.vinyl.description}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-10 mb-40">
          <NowSpinning onClick={handleSpinClick} isPlaying={isPlaying} />
          <audio ref={audioRef} src={product.vinyl.audio} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
