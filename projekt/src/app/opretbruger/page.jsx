import OpretBrugerForm from "@/components/opretbrugerform";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./opretbruger.scss";

export const metadata = {
    title: "OpretBruger"
};

export default function OpretBruger() {

    return (
        <>
            <Header />
            <OpretBrugerForm />
            <Footer />
        </>
    )
}