import { Helmet } from 'react-helmet-async';
import MainVisual from "@/components/MainVisual";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Promotions from "@/components/Promotions";

function Home() {
  const title = "Vinyl Roasts";
  return (
    <div className="main-layout">
      <Header />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainVisual
        title="Vinyl Roasts"
        slogan1="Every sip tells a story, every song rewinds time."
        slogan2Line1="Every cup of coffee pairs with a melody 🎶 "
        slogan2Line2="From the roots of culture to the rhythm of today. ☕"
      />
      <div className="container mx-auto">
        <WhyChooseUs />
        <Promotions />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
