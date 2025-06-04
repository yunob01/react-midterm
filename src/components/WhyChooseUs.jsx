function WhyChooseUs() {
    return (
      <section className="why-choose-us py-16 px-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-8 text-primary">Why Choose Us?</h2>
        <div className="features flex justify-center items-center gap-8 flex-wrap">
          <div className="feature-text text-left text-lg leading-relaxed max-w-[400px]">
            <ul className="py-3">
              <li className="py-1">
                <strong className="text-primary text-lg font-bold font-serif">☕ Brewed with Stories</strong>
                <br />
                <p className="text-secondary-text text-base">Every cup traces back to coffee's rich origins.</p>
              </li>
              <li className="py-1">
                <strong className="text-primary text-lg font-bold font-serif">🎵 Music You Can Feel</strong>
                <br />
                <p className="text-secondary-text text-base">Our café plays curated vinyl records that match your coffee mood—it's the soul of the space.</p>
              </li>
              <li className="py-1">
                <strong className="text-primary text-lg font-bold font-serif">🌍 A Global Café Experience</strong>
                <br />
                <p className="text-secondary-text text-base">Step into a café that feels like a journey.</p>
              </li>
              <li className="py-1">
                <strong className="text-primary text-lg font-bold font-serif">📀 Retro Meets Modern</strong>
                <br />
                <p className="text-secondary-text text-base">Old-school charm, with new-school convenience.</p>
              </li>
            </ul>
          </div>
          <div className="feature-img">
            <img
              className="w-[350px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              src="/images/home-coffeemilk.webp"
              alt="coffee milk background"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default WhyChooseUs;
  