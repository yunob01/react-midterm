const ContinueReading = () => {
    const items = [
      {
        title: '18th Century: Coffee Replaces Tea in the New World',
        img: '/images/about-coffee-18th.jpg',
      },
      {
        title: '19th Century: One of the Most Sought-After Commodities in the World',
        img: '/images/about-coffee-19th.jpg',
      },
      {
        title: '20th-21th Centuries: Growing the Coffee Community in the U.S.',
        img: '/images/about-coffee-20th.jpg',
      },
    ];
  
    return (
      <section className="bg-[#5c3d2e] text-[#4B3F36] px-16 py-20 font-serif">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-[#F2F2F2] italic">Continue Reading</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#f3ebe1] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mb-2">
                  <span className="text-base font-bold">
                    {item.title.split(':')[0]}:
                  </span>
                  <br />
                  {item.title.split(':')[1]}
                </h3>
                <a href="#" className="text-[#5c3d2e] font-bold text-sm">→</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ContinueReading;
  