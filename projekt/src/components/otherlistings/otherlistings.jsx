import Image from "next/image";
import { cookies } from "next/headers";
import "./otherlistings.scss";

export default async function OtherListings({ sellerId, activeListingId }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    const response = await fetch(`http://localhost:4000/api/v1/listings`, {
        headers: {
            "Authorization": `Bearer ${token || ""}`,
        },
    });

    const Listings = await response.json();


    const sellerListings = Listings.filter(
        item => item.userId === sellerId && item.id !== activeListingId
    );



    return (
        <>
            <h3 className="other_overtekst">Other items from this Swapper</h3>
            <div className="other_listings">

                {sellerListings.map(item => (
                    <div key={item.id} className="card">
                        <Image
                            unoptimized
                            src={item.asset.url}
                            width={200}
                            height={150}
                            alt={item.title}
                            className="cardbillede"
                        />
                        <p className="cardnavn">{item.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
