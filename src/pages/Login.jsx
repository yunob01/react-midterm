import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header'
import LoginCard from '@/components/LoginCard'
import Footer from '@/components/Footer'
import { useSearchParams } from 'react-router';

function Login() {
    const title = "Login";
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get("redirect");
    const redirectPath = redirect ? redirect : "/home";

    return (
        <div className="main-layout">
            <Header />
            <div className="content">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <LoginCard redirect={redirectPath} />
            </div>
            <Footer />
        </div>
    )
}

export default Login