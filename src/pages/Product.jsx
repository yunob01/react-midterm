import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import products from "@/json/products.json";
import ProductDetail from "@/components/ProductDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Product() {
    const title = "Product";
    const { productId } = useParams();
    const product = products.find(
        (x) => String(x.id) === productId
    );

    return (
        <div className="main-layout">
            <Header />
            <div className="content">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <ProductDetail product={product} />
            </div>
            <Footer />
        </div>
    );
}