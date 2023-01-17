// componentes/c_use_state/EjemploUseState.tsx
import {useEffect, useState} from "react";
interface User {
    name: string,
    edad: number,
    casado: boolean,
    hijos?: number[];
    }
export default function () {
    const [number, setNumber] = useState(0 as number);
    const [name, setName] = useState("");
    const [numbersArray, setNumbersArray] = useState([1, 2, 3, 4, 5]);
    const [user, setUser] = useState({
        name: "Cesar",
        edad: 22,
        casado: false,
    } as User);

    // nos ayuda a escuchar cambios de nuestras variables
    useEffect(
        () => {
            console.log("Inicio del componente", number, user);
        },
        [] // arreglo de variables
            // Si el arreglo esta vacio se ejecuta al principio nuevamente
    );
    useEffect(
        () => {
            console.log("Cambio del numero", number);
        },
        [number] // arreglo de variables

    );
    useEffect(
        () => {
            console.log("Cambio del arreglo de numeros", numbersArray);
        },
        [numbersArray] // arreglo de variables
    );
    useEffect(
        () => {
            console.log("Cambio del usuario", user);
        },
        [user] // arreglo de variables
    );

    useEffect(
        () => {
            console.log("Cambio todo", number, numbersArray, user);
        },
        [number, numbersArray, user] // Todoo cambia
    );

    return (
        <>
            <button
                className={"bg-blue-500 m-2"}
                onClick={(event)=>{
                    event.preventDefault();
                    setNumber(number + 1);
                }}
            >
                Numero
            </button>
            <button className={"bg-blue-500 m-2"}
                onClick={(event)=>{
                    event.preventDefault();
                    setNumbersArray([...numbersArray, 6]);
                }}
            >
                Arreglo
            </button>
            <button className={"bg-blue-500 m-2"}
                onClick={(event)=>{
                    event.preventDefault();
                    let newUser = {
                        ...user,
                        name: new Date().toString(),
                    }
                    setUser(newUser);
                }}
            >
                Usuario
            </button>
        </>
    )
}
