import { Link } from 'react-router';

function ProductItem({ product }) {
    return (
        <section className="pt-6 px-2 sm:px-4">
            <div className="relative overflow-hidden flex flex-col items-center group">
                <Link to={`/product/${product.id}`} className="flex flex-col items-center">
                    <div className="relative">
                        <img
                            className="w-full max-w-[280px] md:max-w-[240px] sm:max-w-[200px] object-cover rounded-lg"
                            src={product.image}
                            alt={product.name}
                        />
                        <div className="absolute inset-0 bg-primary/30 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 pointer-events-none" />
                    </div>
                    <div className="p-4 text-center">
                        <h5 className="text-primary font-serif font-semibold mt-4 mb-4 text-base sm:text-lg">
                            {product.name}
                        </h5>
                        <div className="flex justify-center">
                            <span className="text-primary font-serif font-semibold text-xs sm:text-sm leading-none py-1">
                                ${product.price.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default ProductItem;
