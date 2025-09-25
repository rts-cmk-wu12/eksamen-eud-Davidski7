"use client";

import OpretBrugerAction from "@/actions/opretbruger-action";
import { useActionState } from "react";
import { redirect } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

import { useEffect } from "react";



// Noget af koden er fra mine tidligere opgaver

export default function OpretBrugerForm() {
    const [formState, formAction, pending] = useActionState(OpretBrugerAction);

    useEffect(function () {
        pending ? toast.loading("Opretter bruger...", { toastId: "loader" }) : toast.dismiss();

        if (formState?.success) {
            toast.update("loader", {
                toastId: "loader",
                render: "Du har nu oprettet en ny bruger!",
                type: "success",
                isLoading: false,
                closeOnClick: false,
                hideProgressBar: true,
                position: "top-right"
            });
            setTimeout(function () {
                redirect("/login");
            }, 2000);
        }
    }, [formState, pending]);

    return (
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
                <div className="form_items">
                    <label>
                        <p>Firstname</p>
                        <input className="input_content" placeholder="firstname" type="text" name="firstname" />
                        <p className="error">  {formState?.properties?.firstname?.errors}</p>
                    </label>
                </div>
                <div className="form_items">
                    <label>
                        <p>Lastname</p>
                        <input className="input_content" placeholder="lastname" type="text" name="lastname" />
                        <p className="error">{formState?.properties?.lastname?.errors}</p>
                    </label>
                </div>
                <button className="signin_knap" type="submit">Sign In</button>
                <p className="error">{formState?.errors}</p>
                <ToastContainer />

            </form>
        </div>

    )
}