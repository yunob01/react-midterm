import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";

export default function Menu() {
  return (
    <div className="main-layout">
      <Header />
      <div className="content">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}