import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        staggerChildren: 0.4, // 每個 child 間隔出現
      },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeInOut" } },
    exit: { opacity: 0, y: 35, transition: { duration: 1 } },
  };

  return (
    <section className="why-choose-us py-16 px-8 text-center" ref={ref}>
      <h2 className="text-2xl font-serif font-bold mb-8 text-primary">Why Choose Us?</h2>

      <AnimatePresence>
        {isInView && (
          <motion.div
            className="features flex justify-center items-center gap-8 flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Animated Text Section */}
            <motion.div className="feature-text text-left text-lg leading-relaxed max-w-[400px]">
              <ul className="py-3">
                {[
                  {
                    icon: "☕",
                    title: "Brewed with Stories",
                    desc: "Every cup traces back to coffee's rich origins.",
                  },
                  {
                    icon: "🎵",
                    title: "Music You Can Feel",
                    desc: "Our café plays curated vinyl records that match your coffee mood—it's the soul of the space.",
                  },
                  {
                    icon: "🌍",
                    title: "A Global Café Experience",
                    desc: "Step into a café that feels like a journey.",
                  },
                  {
                    icon: "📀",
                    title: "Retro Meets Modern",
                    desc: "Old-school charm, with new-school convenience.",
                  },
                ].map(({ icon, title, desc }, index) => (
                  <motion.li key={index} className="py-3" variants={itemVariants}>
                    <strong className="text-primary text-lg font-bold font-serif">{icon} {title}</strong>
                    <p className="text-secondary-text text-base mt-1">{desc}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Animated Image Section */}
            <motion.div
              className="feature-img"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img
                className="w-[350px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                src="/images/home-coffeemilk.webp"
                alt="coffee milk background"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default WhyChooseUs;
