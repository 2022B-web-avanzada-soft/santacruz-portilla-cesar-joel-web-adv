// components/e_use_context/EComponenteB.tsx
import {useContext, useEffect} from "react";
import {ContenedorContext} from "./ContenedorContext";
import EComponenteC from "./EComponenteC";

export default function () {
    const contenedorContext = useContext(ContenedorContext)
    useEffect(
        () => {
            console.log("Cambia en algún lado el nombre", contenedorContext.userName)
        },
        [contenedorContext.userName]
    )
    return (
        <>
            <h1>Componente B</h1>
            <p>{contenedorContext.userName}</p>
            <button
                className={"bg-blue-500 m-2"}
                onClick={
                    e => {
                        e.preventDefault()
                        contenedorContext.setUserName("CompB")
                    }
                }>
                Cambiar nombre
            </button>
            <EComponenteC></EComponenteC>
        </>
    )
}