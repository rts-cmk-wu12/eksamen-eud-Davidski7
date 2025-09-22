"use client";

import LoginAction from "@/actions/login-action";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BeatLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
};


// Noget af koden er fra mine tidligere opgaver

export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(LoginAction);

    const router = useRouter();

    useEffect(() => {
        if (formState?.success) {
            router.push("/");
        }
    }, [formState, router]);

    return isPending ? (
        <BeatLoader color="yellow" loading={true} cssOverride={override} size={50} />
    ) : (


        <div>
            <form className="form_items" action={formAction}>
                <div>

                    <label>
                        <p>Email</p>
                        <input className="input_content" placeholder="email" type="email" name="email" />
                        <p>{formState?.properties?.email?.errors}</p>
                    </label>
                </div>
                <div>
                    <label>
                        <p>Password</p>
                        <input className="input_content" placeholder="Adgangskode" type="password" name="password" />
                        <p>{formState?.properties?.password?.errors}</p>
                    </label>
                </div>
                <button className="singin_knap" type="submit">sign in</button>
                <p>{formState?.errors}</p>

                <p>forgot password?</p>

            </form>
        </div>

    )
}