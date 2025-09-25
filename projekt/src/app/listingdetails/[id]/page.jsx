import DetailsFetch from "@/components/detailsfetch";
import "../listingdetails.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata = {
    title: "ListingDetails"
};

export default async function ListingDetails({ params }) {

    const newParams = await params;



    return (
        <>
            <Header />
            <DetailsFetch id={newParams.id} />
            <Footer />
        </>
    )
}