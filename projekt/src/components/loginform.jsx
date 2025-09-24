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


        <div className="form_container">
            <form className="form_container_item" action={formAction}>
                <div className="form_items">

                    <label>
                        <p>Email</p>
                        <input className="input_content" placeholder="email" type="email" name="email" />
                        <p className="error">{formState?.properties?.email?.errors}</p>
                    </label>
                </div>
                <div className="form_items">
                    <label>
                        <p>Password</p>
                        <input className="input_content" placeholder="Adgangskode" type="password" name="password" />
                        <p className="error">{formState?.properties?.password?.errors}</p>
                    </label>
                </div>

                <button className="signin_knap" type="submit">Sign In</button>
                <p className="error">{formState?.errors}</p>

                <p>forgot password?</p>

            </form>
        </div>

    )
}