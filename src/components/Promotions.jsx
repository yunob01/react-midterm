function Promotions() {
    return (
      <section className="pt-10 pb-40 px-8 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Promotions</h2>
        <p className="text-[1.1rem] mb-8 text-secondary-text font-serif font-base font-normal mb-2 mt-10">
          “☕20% OFF All Espresso Drinks – Limited Time!”
        </p>
        <div className="flex justify-center flex-wrap gap-10">
          <div className="w-[220px] bg-content-bg  rounded-xl shadow-lg overflow-hidden text-[0.95rem] transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
            <img
              src="/images/home-muffins.jpg"
              alt="Muffins"
              className="w-full h-[200px] object-cover"
            />
            <p className="p-4 text-content-text">Buy 1 Get 1 Free on Muffins – Today Only!</p>
          </div>
          <div className="w-[220px] bg-content-bg  rounded-xl shadow-lg overflow-hidden text-[0.95rem] transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
            <img
              src="/images/home-own cup.jpg"
              alt="Own cup"
              className="w-full h-[200px] object-cover"
            />
            <p className="p-4 text-content-text">
              Bring Your Own Cup
              <br />
              Get a Discount $1 Off
            </p>
          </div>
          <div className="w-[220px] bg-content-bg  rounded-xl shadow-lg overflow-hidden text-[0.95rem] transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
            <img
              src="/images/home-student discount.jpg"
              alt="Student discount"
              className="w-full h-[200px] object-cover"
            />
            <p className="p-4 text-content-text">
              Student Discount –
              <br />
              Show ID for 10% Off
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Promotions;
  