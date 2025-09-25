import Header from "@/components/header/header";
import LoginForm from "@/components/loginform";
import Footer from "@/components/footer/footer";
import "./login.scss";

export const metadata = {
    title: "Login"
};

export default function Login() {
    return (
        <>
            <Header />
            <LoginForm />
            <Footer />

        </>
    );
}
