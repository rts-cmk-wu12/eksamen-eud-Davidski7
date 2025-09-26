"use client";
// Noget af koden er fra mine tidligere opgaver

import { useActionState, useEffect } from "react";
import SearchAction from "@/actions/search-action";

export default function Search() {
    const [formState, formAction, pending] = useActionState(SearchAction);

    useEffect(function () {
    }, [formState]);

    return (
        <>
            <div className="top_indhold">
                <form action={formAction}>
                    <div className="search-indhold">
                        <label>
                            <input type="search" name="keyword" placeholder="Search" className="search-input" />
                        </label>
                    </div>
                </form>



                <div className="filter-indhold">

                    <button className="filter-button active">New</button>
                    <button className="filter-button">Price ascending</button>
                    <button className="filter-button">Price descending</button>
                </div>

            </div>
            {(Array.isArray(formState) && !formState?.length) && <div className="search_names">Der er ingen resultater</div>}
            {formState?.map(listings =>
                <div className="search_names" key={listings.id}>{listings.title}</div>)}
        </>
    );
}