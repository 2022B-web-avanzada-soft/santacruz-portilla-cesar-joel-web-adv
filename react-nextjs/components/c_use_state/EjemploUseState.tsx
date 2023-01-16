// componentes/c_use_state/EjemploUseState.tsx
import {useState} from "react";
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
    setUser({
        ...user,
        name: "Cesar",
        edad: 22,
        casado: false,
    })

    return (
        <>
            <button
                className={"bg-blue-500"}
                onClick={(event)=>{
                    event.preventDefault();
                    setNumber(number + 1);
                }}
            >
                Numero
            </button>
            <button className={"bg-blue-500"}
                onClick={(event)=>{
                    event.preventDefault();
                    setNumbersArray([...numbersArray, 6]);
                }}
            >
                Arreglo
            </button>
            <button className={"bg-blue-500"}
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
