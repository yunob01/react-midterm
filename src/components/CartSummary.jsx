import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { selectCartItems } from "@/redux/cartSlice";
import BasketModal from "@/components/BasketModal";

function CartSummary() {
    const [isOpen, setIsOpen] = useState(false);

    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;

    const toggleModal = () => {setIsOpen(!isOpen);}

    return (
        <div>
            <div
                onClick={toggleModal}
                className="inline-block top-8 right-2 md:right-6 cursor-pointer "
            >
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="indicator">
                        {count > 0 && (
                            <span className="indicator-item badge badge-primary text-content-text">
                                {count}
                            </span>
                        )}
                        <ShoppingCart
                            strokeWidth={1.5}
                            className="w-8 h-auto sm:w-10 text-current group-hover:scale-105 transition-transform"
                        />
                    </div>
                    <p className="text-xs text-secondary-text mt-1">Shopping Cart</p>
                </div>
            </div>

            <BasketModal
                isOpen={isOpen}
                toggleDrawer={toggleModal}
            />
        </div>
    );
}

export default CartSummary;
