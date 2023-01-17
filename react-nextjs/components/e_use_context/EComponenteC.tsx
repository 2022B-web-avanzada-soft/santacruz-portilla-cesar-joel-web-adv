// components/e_use_context/EComponenteC.tsx
import {useContext, useEffect} from "react";
import {ContenedorContext} from "./ContenedorContext";

export default function () {
    const contenedorContext = useContext(ContenedorContext)
    useEffect(
        () => {
            console.log("Cambia en algun lado el nombre", contenedorContext.userName)
        },
        [contenedorContext.userName]
    )
    return (
        <>
            <h1>Componente C</h1>
            <p>{contenedorContext.userName}</p>
            <button
                className={"bg-blue-500 m-2"}
                onClick={
                    e => {
                        e.preventDefault()
                        contenedorContext.setUserName("CompC")
                    }
                }>
                Cambiar nombre
            </button>
        </>
    )
}