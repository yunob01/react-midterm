import NavBar from "@/components/NavBar";
import CartSummary from "@/components/CartSummary";
import UserInfo from "@/components/UserInfo";
import SetColorMode from "@/components/SetColorMode";

export default function Header() {
    return (
        <div>
            <NavBar />

            <div className="absolute right-8 top-8 grid grid-cols-3 w-[4rem] md:w-[7rem]">
                <SetColorMode />
                <UserInfo />
                <CartSummary />
            </div>
        </div>
    );

}


