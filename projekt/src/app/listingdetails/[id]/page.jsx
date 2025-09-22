import DetailsFetch from "@/components/detailsfetch";

export default function LisingDetails({ params }) {

    return (
        <>
            <DetailsFetch id={params.id} />
        </>
    )
}