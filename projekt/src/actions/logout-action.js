"use server";

import { cookies } from "next/headers";

export default async function LogoutAction() {
    const cookieStore = await cookies();


    cookieStore.set("auth_token", "", {
        maxAge: 0,
        path: "/",
    });

    return { success: true };
}
