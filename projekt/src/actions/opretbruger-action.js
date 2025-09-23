"use server";
import z from "zod";

export default async function OpretBrugerAction(currentstate, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");

    const schema = z.object({
        email: z.string().min(1, { message: "email skal være udfyldt" }),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt" }),
        firstname: z.string().min(1, { message: "Fornavn skal være udfyldt" }),
        lastname: z.string().min(1, { message: "Efternavn skal være udfyldt" }),
    });

    const validated = schema.safeParse({ email, password, firstname, lastname });

    if (!validated.success) {
        return {
            ...validated,
            ...(z.treeifyError(validated.error))
        };
    }


    const response = await fetch("http://localhost:4000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstname, lastname })
    });



    return { success: true, data: validated.data };
}
