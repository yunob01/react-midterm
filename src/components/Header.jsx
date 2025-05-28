import NavBar from "@/components/NavBar";
import CartSummary from "@/components/CartSummary";
import SetColorMode from "@/components/SetColorMode";

export default function Header() {
    return (
        <div>
            <NavBar />
            <div className="absolute right-8 top-8 grid grid-cols-2 gap-0 w-[4rem] md:w-[7rem]">
                <SetColorMode />
                <CartSummary />
            </div>
        </div>
    );
}
