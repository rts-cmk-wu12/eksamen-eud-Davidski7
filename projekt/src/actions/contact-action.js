"use server";


// Noget af koden er fra mine tidligere opgaver


import z from "zod";

export default async function ContactAction(prevState, formData) {
    const email = formData.get("email");

    const schema = z.object({
        email: z.string().min(1, { message: "Email skal være udfyldt" }),
    });

    const validated = schema.safeParse({ email });

    if (!validated.success) {
        return {
            ...validated,
            ...(z.treeifyError(validated.error))
        };
    }

    const response = await fetch("http://localhost:4000/api/v1/newsletter", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })

    })


    return { success: true };
}
