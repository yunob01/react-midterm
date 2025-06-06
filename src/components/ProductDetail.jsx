import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { motion, useInView } from 'framer-motion';

import AddToCart from "@/components/AddToCart";
import BuyNow from "@/components/BuyNow";
import NowSpinning from "@/components/NowSpinning";
import VinylModal from "@/components/VinylModal";

const ProductDetail = ({ product }) => {
  const [searchParams] = useSearchParams();
  const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);

  useEffect(() => {
    const qtyFromBasket = searchParams.get('qtyFromBasket');
    let parsedQty = qtyFromBasket ? Number(qtyFromBasket) : (product.stock > 0 ? 1 : 0);
    if (isNaN(parsedQty) || parsedQty < 0) parsedQty = 0;
    if (parsedQty > product.stock) parsedQty = product.stock;
    setQty(parsedQty);
  }, [searchParams, product.stock]);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [showVinylModal, setShowVinylModal] = useState(false);

  const handleSpinClick = () => {
    setShowVinylModal(true);
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleCloseModal = () => {
    setShowVinylModal(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  // Animation Refs
  const refVinyl = useRef(null);
  const refSpin = useRef(null);
  const isVinylInView = useInView(refVinyl, { once: false, amount: 0.3 });
  const isSpinInView = useInView(refSpin, { once: false, amount: 0.3 });

  return (
    <div className="flex justify-center px-4 sm:px-12 lg:px-24 min-h-screen font-serif text-primary">
      <div className="w-full max-w-4xl mx-auto px-4">

        {/* 商品內容 */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 lg:gap-20 py-16">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-[320px] sm:max-w-[400px] md:w-1/2 h-auto object-cover shadow-md rounded-md mx-auto md:mx-0"
          />

          <div className="flex flex-col w-full md:w-1/2 max-w-[360px] mx-auto md:mx-0">
            <p className="text-sm font-sans text-secondary-text">{product.category}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold pt-2">{product.name}</h2>
            <p className="text-sm leading-relaxed pt-2">{product.description}</p>

            <p className="text-sm font-sans text-secondary-text pt-6 pb-2">Price</p>
            <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>

            <div className="flex flex-col items-start pt-4">
              <p className="text-sm font-sans text-secondary-text pb-2">Quantity</p>
              <select
                id="quantity"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="border rounded px-3 py-1 bg-content-text text-primary"
              >
                {[...Array(product.stock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                ))}
              </select>
            </div>

            <div className="pt-4">
              <p className="text-sm font-sans text-secondary-text">Total</p>
              <span className="text-lg font-semibold">${(product.price * qty).toFixed(2)}</span>
            </div>

            <div className="flex space-x-3 mt-4 pt-2">
              <BuyNow />
              <AddToCart product={{ ...product, countInStock: product.stock }} qty={qty} />
            </div>
          </div>
        </div>

        {/* 推薦黑膠 */}
        <motion.div
          ref={refVinyl}
          initial={{ opacity: 0, y: 40 }}
          animate={isVinylInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-center mt-20">Recommended Vinyl</h2>
          <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 justify-center text-center sm:text-left">
            <img
              src={product.vinyl.image}
              alt={product.vinyl.name}
              className="w-[140px] sm:w-[160px] h-auto object-cover shadow-md rounded-md"
            />
            <div className="space-y-2 max-w-md sm:text-left text-center">
              <h4 className="text-lg sm:text-xl font-semibold">{product.vinyl.name}</h4>
              <p className="text-sm text-secondary-text leading-relaxed font-sans">{product.vinyl.description}</p>
            </div>
          </div>
        </motion.div>

        {/* NowSpinning */}
        <motion.div
          className="flex flex-col items-center justify-center pt-10 mb-40"
          ref={refSpin}
          initial={{ opacity: 0 }}
          animate={isSpinInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <NowSpinning onClick={handleSpinClick} isPlaying={isPlaying} />
          <audio ref={audioRef} src={product.vinyl.audio} />
          {showVinylModal && (
            <VinylModal
              audioRef={audioRef}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              onClose={handleCloseModal}
              vinyl={product.vinyl}
            />
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default ProductDetail;
