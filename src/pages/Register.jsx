import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import RegisterCard from '@/components/RegisterCard'
import Footer from '@/components/Footer'

function Register() {
    const title = "Register";
    return (
        <div className="main-layout">
            <Header/>
            <div className="content">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <RegisterCard />
            </div>
            <Footer />
        </div>
    )
}

export default Register
