import NavBar from "@/components/NavBar";
import CartSummary from "@/components/CartSummary";
import UserInfo from "@/components/UserInfo";
import SetColorMode from "@/components/SetColorMode";

export default function Header() {
    return (
        <div>
            <NavBar />

            <div className="absolute right-4 top-8 sm:right-8 grid grid-cols-3 w-[6rem] sm:w-[8rem]">
                <SetColorMode />
                <UserInfo />
                <CartSummary />
            </div>
        </div>
    );

}


