const CultureContent = () => {
    return (
      <div className=" max-w-4xl mx-auto px-6 py-12 font-serif">
        <section className="mb-12">
          <p className="uppercase text-sm tracking-widest mb-2 text-primary">Coffee Origins</p>
          <h1 className="text-3xl italic font-bold mb-4 text-primary">The rich history of coffee</h1>
          <p className="mb-6 text-primary">
            Coffee is an essential in our fast-paced lives, a source of inspiration and upliftment that awakens our body and minds to the possibilities of every day. But it’s so much more than that too; its a global cultural force and it’s as well loved as ever. But where did coffee originally come from exactly, and how did it become so popular?
          </p>
          <p className="text-sm italic text-primary">
            ☕ Read the history of coffee for more details.
          </p>
          <img
            src="/images/about-header-richhistory.webp"
            alt="small coffee"
            className="w-1/3 md:w-1/6 rounded-md shadow-sm mt-4 md:mt-12 ml-0 md:ml-6"
          />
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl italic font-bold mb-4 text-primary">The legend of coffee origin begins in Ethiopia</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="mb-4 text-primary">
                Ethiopia is widely considered to be the epicentre of where coffee came from. If you’ve ever googled “coffee history”, you will have come across the famous story of how coffee was discovered in Ethiopia by Kaldi, an Ethiopian goat herder, around 800 AD.
              </p>
              <br />
              <p className="mb-4 text-primary">
                Kaldi saw his goats energized after eating berries, tried them, and felt alert. Monks rejected the berries as evil, but after smelling the aroma from roasting them, brewed a drink that helped them stay awake. Likely a legend—the true origin of coffee points to the Oromo people of Ethiopia and Kenya.
              </p>
            </div>
            <img
              src="/images/about-rich history of coffe.webp"
              alt="Ethiopian goats"
              className="w-3/4 md:w-1/3 rounded-md shadow-sm"
            />
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl italic font-bold mb-4 text-primary">
            15th–16th Centuries: Coffee Culture Develops on the Arabian Peninsula
          </h2>
          <p className="mb-4 text-primary">
            The business edition of coffee history began on the Arabian Peninsula, where people cultivated and traded coffee for the first time. By the 15th century, coffee was being grown in what is now Yemen, and by the 16th century it gained popularity in what we now know as Iran, Egypt, Syria, and Turkey.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold italic mb-2 text-primary">Wisdom in a cup</h3>
          <p className="mb-4 text-primary">
            In the Middle East, public coffee houses called qahveh khaneh became lively social hubs where people drank coffee, socialized, enjoyed music and performances, played chess, and shared news—earning them the nickname “Schools of the Wise.”
          </p>
          <p className="mb-4 text-primary">
            The Arabian Peninsula attracted thousands of travelers each year, including those making the pilgrimage to the holy city of Mecca. As these pilgrims traveled home, they spread the knowledge of these coffee houses and the “wine of Araby” served there.
          </p>
          <img
            src="/images/about-coffeehouse.jpg"
            alt="London coffeehouse painting"
            className="w-full rounded-lg shadow mt-4"
          />
          <p className="text-md text-center italic mt-6 text-primary">
            Interior of a London Coffeehouse, 17th century
          </p>
        </section>
      </div>
    );
};

export default CultureContent;
