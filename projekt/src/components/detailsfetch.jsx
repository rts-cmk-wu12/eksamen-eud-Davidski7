import Image from "next/image";
import { cookies } from "next/headers";

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

            <Image
                unoptimized
                src={data.asset.url}
                width={300}
                height={200}
                alt={data.name}
                className="cardbillede"
            />

            <div className="cardindhold">
                <h2 className="cardnavn">{data.title}</h2>
            </div>

        </>

    )
}