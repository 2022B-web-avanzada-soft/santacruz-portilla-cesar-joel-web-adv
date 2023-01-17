// components/d_hook_custom/HookCustom.tsx
import useSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect} from "react";
import {MONEDAS} from "./monedas";

export default function () {
    const [moneda, UseSelectMonedas] = useSelectMoneda(
        'Moneda',
        MONEDAS);
    useEffect(
        () => {
            console.log('Cambio de moneda', moneda);
        }
    );
    return (
        <>
            {UseSelectMonedas}
        </>
    )
}
