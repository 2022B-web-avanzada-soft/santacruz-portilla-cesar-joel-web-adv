//Hooks/useSelectMoneda.tsx

import {MonedasInterface} from "../../interfaces/moneda";
import {useState} from "react";

export default function (label: string, opciones: MonedasInterface[]) {
    // Select del arreglo de monedas (html - jsx element)
    // valor de esa moneda
    const [moneda, setMoneda] = useState('');
    const generarJSXElementMonedas: ()=> JSX.Element[] = () => {
        return opciones.map(
            (moneda: MonedasInterface) =>
                ( // Iteracion (KEY ES REQUERIDO)
                    <option key={moneda.id} id={moneda.id} value={moneda.id}>
                        {moneda.nombre}
                    </option>
                )
        )
    }
    /*
    No es nada más que un select, ponemos el valor de la moneda, al comienzo no es nada y abajo generamos las opciones
    que obtenemos arriba, usamos el label que nos llega como parametro y el onChange que setea el valor de la moneda con
    el value que pusimos arriba.
     */
    const UseSelectMonedas = (
        <>
            <label className={"form-label"} htmlFor={label}>{label}</label>
            <select className={"form-select"}
                    name={label}
                    id={label}
                    value={moneda}
                    onChange={(e) => {
                        e.preventDefault();
                        setMoneda(e.target.value)
                    }}>
                <option value={""}>Seleccione una moneda</option>
                {generarJSXElementMonedas()}
            </select>
        </>
    )
    return [moneda, UseSelectMonedas];
}
