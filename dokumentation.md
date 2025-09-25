# Dokumentation for SwapHub
David Alexander Simonsen
WU HF 12


## Sådan kommer du i gang
Du skal kører 2 terminaler på samme tid en til siden og en til API´et

`npm install`

`npm run dev`

http://localhost:3000

## Sådan starter du det brugte API
`npm install`

`npm start`

http://localhost:4000


Jeg har lavet valgfriopgave c som betyder at man skal kunne oprette bruger selv 
...


## Tech-stack
* **Next.js**  
Et front-end framework baseret på React.js som også giver adgang til server-side komponenter og -actions, samt mappebaseret routing. Server-side komponenter og funktioner giver en større sikkerhed, da al koden afvikles på serveren fremfor i klienten.
* **React**  
Et bibliotek der giver mig mulighed for at lave komponenter og håndtere states på en god og let måde. React har et stort community med stort modul-bibliotedk, som er aktivt, vel-dokumenteret og  vel-understøttet. Det er også det mest brugte front-end bibliotek i verden, så efterspørgslen på React-udviklere er stor. 
* **Git**  
Et versionsstyringsværktøj, som lader mig lave branches og versioner af min kode, så jeg let kan gå tilbage til tidligere versioner, hvis jeg for eksmapel har lavet en fejl. Jeg bruger Git sammen med GitHub.
* **React-icons**  
Et ikon-bibliotek hvor du kan finde alle de iconer du skal bruge, som er beregnet på React. 
* **SASS**  
En udvidelse eller tilføjelse til CSS, som lader mig lave funktioner, variabler, mixins og nesting. Jeg kan opdele min CSS i moduler og dermed genbruge kode flere steder.
* **Web-API fra SwapHub**  
Et interface til at få adgang til Swap Hub's data, så jeg kan bruge det på min egen side.
* **Zod**  
Et valideringsbibliotek til objekter og strings. Jeg bruger Zod til blandt andet at validere bruger-input fra formularer.
* **react-spinners**
Et Loader-bibliotek, som er beregnet til React. Hvor du kan finde forskellige funktionelle Loaders 


## kode-eksempel
(src/components/search.jsx)
```jsx
"use client";

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
                    <div className="search-wrapper">
                        <label>
                            <input type="search" name="keyword" placeholder="Search" className="search-input" />
                        </label>
                    </div>
                </form>



                <div className="filter-wrapper">

                    <button className="filter-button active">New</button>
                    <button className="filter-button">Price ascending</button>
                    <button className="filter-button">Price descending</button>
                </div>

            </div>
            {(Array.isArray(formState) && !formState?.length) && <div>Der er ingen resultater</div>}
            {formState?.map(listings =>
                <div className="search_names" key={listings.id}>{listings.title}</div>)}
        </>
    );
}


```
## kode-Forklaring
Jeg vælger at gøre det her komponent til client-side, og det betyder, at komponenten kører på client-siden i browseren. Det er vigtigt her, fordi jeg bruger React hooks som useActionState og useEffect. Hooks fungerer kun i client components, når du kører Next.js.

Først importerer jeg de ting, jeg skal bruge - useActionState og useEffect fra React, samt min SearchAction, som jeg har liggende i min actions-mappe.

Jeg starter med at kalde useActionState(SearchAction). Den giver mig tre ting:

formState, som er det state, jeg får tilbage, når jeg har sendt en søgning.

formAction, som er den funktion, jeg kan sætte som action på mit <form>, så den kører min SearchAction.

pending, som kan bruges, hvis jeg vil vise en loader, mens søgningen kører.

Jeg har en useEffect, der kører hver gang formState ændrer sig.

I min return har jeg mit søgefelt pakket ind i et <form>. Når jeg trykker enter eller submitter, kalder den automatisk formAction, og så kører SearchAction på serveren.

Så har jeg mine 3 filter knapper men som ikke rigtig gøre noget.

Lige under viser jeg resultaterne:

Hvis formState er et array men uden indhold, skriver jeg en besked: "Der er ingen resultater".

Hvis der er noget i formState, mapper jeg over det og viser hver enkelt listing som en <div> med titel.


## Ændringer/Valg jeg har taget
1. Jeg har valgt at søgeresultatet kommer frem under inputfeltet 



