import { cookies } from "next/headers";

export default async function SwapButton() {

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;


    if (!token) {
        return null;
    }

    return (
        <button className="swapbutton">
            Propose a swap
        </button>
    );
}
