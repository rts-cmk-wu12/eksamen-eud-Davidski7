import Image from "next/image";
import Link from "next/link";
import MoreButton from "./morebutton/morebutton";
import Search from "./search";



// Noget af koden er fra mine tidligere opgaver

export default async function FrontFetch() {

    const response = await fetch("http://localhost:4000/api/v1/listings", {
        headers: {
            "Authorization": `Bearer `
        }
    });

    const data = await response.json();

    const limitedData = data.slice(0, 6);

    return (
        <>

            <Search limitedData={limitedData} />


            <div className="aktivitet_box">
                {limitedData.map((card, index) => (
                    <Link className="link_to_next_page" href={`/listingdetails/${card.id}`} key={card.id}>
                        <div className="card" key={index}>
                            {card.asset?.url && (
                                <Image
                                    unoptimized
                                    src={card.asset.url}
                                    width={300}
                                    height={200}
                                    alt={card.title}
                                    className="cardbillede"
                                />
                            )}
                            <div className="cardindhold">
                                <h2 className="cardnavn">{card.title}</h2>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
            <MoreButton />
        </>
    )
}