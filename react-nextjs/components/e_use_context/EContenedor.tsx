import {ContenedorContext, ContenedorContextObject} from "./ContenedorContext";
import {useEffect, useState} from "react";
import EComponenteA from "./EComponenteA";

export default function () {
    const [userName, setUserName] = useState("Cesar")
    const objetoContenedorContext: ContenedorContextObject = { userName, setUserName }

    useEffect(
        () => {
            console.log("Cambia en algún lado el nombre")
        },
        [objetoContenedorContext.userName]
    )

    return (
        <>
            <ContenedorContext.Provider value={objetoContenedorContext}>
                <EComponenteA></EComponenteA>
            </ContenedorContext.Provider>
        </>
    )
}
