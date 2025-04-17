import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CultureContent from "@/components/CultureContent";
import ContinueReading from "@/components/ContinueReading";

const Culture = () => {
  return (
    <div>
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