// b_componentes/Componente.tsx
import {useState} from "react";

type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
};
export default function (props: PropiedadesComponente) {
    // Decomposicion de propiedades
    const { url, iteraciones, mostrar } = props;
    // Automaticamente con esta sintaxis el 1 iria a numeroUno y el 0 con numeroDos
    // const arreglo = [1, 0];
    // const numeroUno = arreglo[0];
    // const numeroDos = arreglo[1];
    // const [numeroUno, numeroDos] = [1, 0];
    // Hooks
    const [iteration, setIteration] = useState(iteraciones);
    // const url = props.url;
    // const iteraciones = props.iteraciones;
    // const mostrar = props.mostrar;
    const contenidoCondicionado = () => {
        if (mostrar) {
            return <h1>Mostrar</h1>;
        }
        else {
            return <h1>No mostrar</h1>;
        }
    };
    return (
        <>
            <a target="_blank" href={url}>IR A GOOGLE</a>
            {/*mostrar ? <p>Hello</p> : <p>Bye</p>*/}
            {contenidoCondicionado()}
            {mostrar &&
                <p>Hello</p>
            }
            <h1>Componente</h1>
            <div>
                {iteration}
            </div>
            <button
                className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                onClick={(event)=>{
                    console.log(event);
                    setIteration(iteration + 1);
                }
            }> Aumentar </button>
        </>
    )
}
