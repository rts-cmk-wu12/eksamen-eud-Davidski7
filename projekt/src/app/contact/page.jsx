import ContactForm from "@/components/contactform";
import "./contact.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata = {
    title: "Contact"
};

export default function Contact() {


    return (
        <>
            <Header />
            <ContactForm />
            <Footer />
        </>
    )
}