import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";

export default function Menu() {
  const title = "Menu";
  return (
    <div className="main-layout">
      <Header />
      <div className="content">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}