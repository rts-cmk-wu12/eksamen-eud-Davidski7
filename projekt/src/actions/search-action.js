"use server";

// Noget af koden er fra mine tidligere opgaver

export default async function SearchAction(prevState, formData) {
    const { keyword } = Object.fromEntries(formData);

    const response = await fetch(`http://localhost:4000/api/v1/listings`);
    if (!response.ok) {
        return {
            status: "NÆH!"
        };
    }

    const json = await response.json();

    const filteredData = json.filter(listings => (listings.title.toLowerCase().includes(keyword.toLowerCase())
        || listings.description.toLowerCase().includes(keyword.toLowerCase())
        || (listings.minAge <= keyword && listings.maxAge >= keyword)));

    return filteredData;
}