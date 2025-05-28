import NavBar from "@/components/NavBar";
import CartSummary from "@/components/CartSummary";
import SetColorMode from "@/components/SetColorMode";

export default function Header() {
    return (
        <div className="flex justify-between items-center px-4 py-2 relative">
            <NavBar />
            <div className="flex items-start space-x-4">
                <SetColorMode />
                <CartSummary />
            </div>
        </div>
    );
}
