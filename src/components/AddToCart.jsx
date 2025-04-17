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
            <button onClick={addToCart} className="bg-[#6A4E42] btn btn-primary text-[#FFF8F0] text-sm px-6 py-2 rounded-[16px] border border-[#6A4E42] transition hover:bg-transparent hover:text-[#6A4E42]">
                Add To Cart
            </button>
            {showToast && (
                <div className="toast toast-end">
                    <div className="alert bg-[#6A4E42] text-[#FFF8F0]">
                        <span>
                            {qty} {qty > 1 ? "pieces" : "piece"} of {product.name} {qty > 1 ? "have" : "has"} been added to your cart.
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}