"use client";

import ContactAction from "@/actions/contact-action";
import { useActionState } from "react";
import { redirect } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

import { useEffect } from "react";




// Noget af koden er fra mine tidligere opgaver

export default function ContactForm() {
    const [formState, formAction, pending] = useActionState(ContactAction);

    useEffect(function () {
        pending ? toast.loading("Tilmelder...", { toastId: "loader" }) : toast.dismiss();

        if (formState?.success) {
            toast.update("loader", {
                toastId: "loader",
                render: "Du Har nu tilmeld dig!",
                type: "success",
                isLoading: false,
                closeOnClick: false,
                hideProgressBar: true,
                position: "top-right"
            });
            setTimeout(function () {
                redirect("/");
            }, 2000);
        }
    }, [formState, pending]);

    return (
        <>
            <h1 className="hovedoverskrift">Tilmeld dig nyhedbrevet </h1>
            <div className="form_container">
                <form className="form_container_item" action={formAction}>
                    <div className="form_items">

                        <label>
                            <p>Email</p>
                            <input className="input_content" placeholder="email" type="email" name="email" />
                            <p className="error">{formState?.properties?.email?.errors}</p>
                        </label>
                    </div>

                    <button className="signin_knap" type="submit">Sign In</button>
                    <p className="error">{formState?.errors}</p>
                    <ToastContainer />

                </form>
            </div>
        </>
    )


}