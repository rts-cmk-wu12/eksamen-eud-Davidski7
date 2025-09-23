"use server";


// Noget af koden er fra mine tidligere opgaver

import { cookies } from "next/headers";
import z from "zod";

export default async function LoginAction(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const schema = z.object({
        email: z.string().min(1, { message: "Email skal være udfyldt" }),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt" })
    });

    const validated = schema.safeParse({ email, password });

    if (!validated.success) {
        return {
            ...validated,
            ...(z.treeifyError(validated.error))
        };
    }

    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: validated.data.email,
            password: validated.data.password
        })
    });

    if (!response.ok) {
        return {
            success: false,
            errors: ["Brugernavn eller adgangskode er forkert"]
        };
    }

    const data = await response.json();


    const cookieStore = await cookies();

    cookieStore.set("auth_token", data.token, {
        maxAge: 60 * 30,
        path: "/"
    });

    cookieStore.set("user_id", data.userId.toString(), {
        maxAge: 60 * 30,
        path: "/"
    });



    return { success: true };
}
