import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function MainVisual({ title, slogan1, slogan2Line1, slogan2Line2 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative h-screen" ref={ref}>
      <img
        src="/images/home-coffeebeans.jpg"
        alt="coffee beans background"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>

      <motion.div
        className="px-6 lg:px-12 pt-24 z-20 relative"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-2xl text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-serif">
              {title}
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 font-serif">
              {slogan1}
            </p>
            <p className="mt-2 text-base sm:text-lg md:text-xl text-white/80 font-serif">
              {slogan2Line1}
            </p>
            <p className="mt-2 text-base sm:text-lg md:text-xl text-white/80 font-serif">
              {slogan2Line2}
            </p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MainVisual;
