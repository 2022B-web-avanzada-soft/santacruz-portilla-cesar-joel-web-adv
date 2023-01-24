// components/e_use_context/EComponenteA.tsx
import {useContext, useEffect} from "react";
import {ContenedorContext} from "./ContenedorContext";
import EComponenteB from "./EComponenteB";

export default function () {
    const contenedorContext = useContext(ContenedorContext)
    useEffect(
        () => {
            console.log("Cambia en algún lado el name", contenedorContext.userName)
        },
        [contenedorContext.userName]
    )
    return (
        <>
            <h1>Componente A</h1>
            <p>{contenedorContext.userName}</p>
            <button
                className={"bg-blue-500 m-2"}
                onClick={
                    e => {
                        e.preventDefault()
                        contenedorContext.setUserName("CompA")
                    }
                }>
                Cambiar nombre
            </button>
            <EComponenteB></EComponenteB>
        </>
    )
}
