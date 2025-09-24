"use client";
// Noget af koden er fra mine tidligere opgaver

import { useActionState, useEffect } from "react";
import SearchAction from "@/actions/search-action";

export default function Search() {
    const [formState, formAction, pending] = useActionState(SearchAction);

    useEffect(function () {
        console.log(formState);
    }, [formState]);

    return (
        <>
            <form action={formAction}>
                <div className="search-wrapper">
                    <label>
                        <input type="search" name="keyword" placeholder="Search" className="search-input" />
                    </label>
                </div>
            </form>
            <br />
            {(Array.isArray(formState) && !formState?.length) && <div>Der er ingen resultater</div>}
            {formState?.map(listings =>
                <div key={listings.id}>{listings.title}</div>)}
        </>
    );
}