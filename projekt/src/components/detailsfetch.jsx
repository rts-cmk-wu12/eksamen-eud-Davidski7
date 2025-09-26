import Image from "next/image";
import { cookies } from "next/headers";
import SwapButton from "./swapbutton";
import OtherListings from "./otherlistings/otherlistings";



// Noget af koden er fra mine tidligere opgaver

export default async function DetailsFetch({ id }) {

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    const response = await fetch(`http://localhost:4000/api/v1/listings/${id}`, {
        headers: {
            "Authorization": `Bearer ${token || ""}`
        },
    });

    const data = await response.json();

    return (
        <>
            <div className="details_content">
                <Image
                    unoptimized
                    src={data.asset.url}
                    width={300}
                    height={200}
                    alt={data.title}
                    className="cardbillede_details"
                />


                <div className="cardindhold">
                    <h2 className="cardnavn">{data.title}</h2>
                    <p>{data.description}</p>
                    <p>{data.createdAt}</p>
                    <SwapButton />
                </div>

            </div>

            <OtherListings sellerId={data.userId} activeListingId={data.id} />

        </>

    )
}