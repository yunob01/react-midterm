import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "@/redux/cartSlice";

export default function AddToCart({ product, qty }) {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const addToCart = () => {
        setShowToast(true);
        dispatch(addCartItems({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            qty,
        }))

        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    };

    return (
        <>
            <button onClick={addToCart} className="bg-primary btn btn-primary text-content-text  text-sm px-6 py-2 rounded-[16px] border border-primary transition hover:bg-transparent hover:text-primary">
                Add To Cart
            </button>
            {showToast && (
                <div className="toast toast-end">
                    <div className="alert bg-primary text-content-text ">
                        <span>
                            {qty} {qty > 1 ? "pieces" : "piece"} of {product.name} {qty > 1 ? "have" : "has"} been added to your cart.
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}