import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CultureContent from "@/components/CultureContent";
import ContinueReading from "@/components/ContinueReading";

const Culture = () => {
  const title = "Culture";
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        <CultureContent />
      </main>
      <ContinueReading />
      <Footer />
    </div>
  );
};

export default Culture;