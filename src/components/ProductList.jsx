import { useState } from "react";
import products from "@/json/products.json";
import ProductItem from "@/components/ProductItem";

const categoryImages = {
    Drinks: {
        defaultImg: "images/ICON_Drinks.png",
        hoverImg: "/images/ICON_Drinks_2.png",
    },
    Desserts: {
        defaultImg: "/images/ICON_Dessert.png",
        hoverImg: "/images/ICON_Dessert_2.png",
    },
    "Vinyl Picks": {
        defaultImg: "/images/ICON_Vinyl.png",
        hoverImg: "/images/ICON_Vinyl_2.png",
    },
};

function ProductList() {
    const categories = Object.keys(categoryImages);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 mb-40 ">
            <div className="flex justify-center gap-14 mb-10 flex-wrap">
                {categories.map((category) => {
                    const isHovered = hoveredCategory === category || activeCategory === category;
                    const imgSrc = isHovered
                        ? categoryImages[category].hoverImg
                        : categoryImages[category].defaultImg;

                    return (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setHoveredCategory(category); 
                            }}
                            onMouseEnter={() => setHoveredCategory(category)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className={`flex flex-col items-center transition duration-300 ${
                                activeCategory === category
                                    ? "opacity-100"
                                    : "opacity-70 hover:opacity-100"
                            }`}
                        >
                            <img
                                src={imgSrc}
                                alt={`${category} icon`}
                                className="w-auto h-12 sm:h-16 mb-2"
                            />
                            <span className="text-primary font-serif text-sm sm:text-base font-semibold">
                                {category}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 md:gap-10 lg:gap-14">
                {filteredProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
