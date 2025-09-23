import ProfileItem from "@/components/profileitem";
import { cookies } from "next/headers";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default async function Profil() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token");
    const userId = cookieStore.get("user_id");


    const response = await fetch(`http://localhost:4000/api/v1/users/${userId.value}`, {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },

    });

    const profileData = await response.json();

    console.log(profileData)

    return (
        <>
            <Header />
            <ProfileItem profileData={profileData} />
            <Footer />
        </>
    );
}
