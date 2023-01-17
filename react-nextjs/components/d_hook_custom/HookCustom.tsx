// components/d_hook_custom/HookCustom.tsx
import UseSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect, useState} from "react";

export default function () {
    const [moneda, UseSelectMonedas] = UseSelectMoneda(
        'Moneda',
        [
            {id: 'USD', nombre: 'Dolar de Estados Unidos'},
            {id: 'MXN', nombre: 'Peso Mexicano'},
            {id: 'EUR', nombre: 'Euro'},
            {id: 'GBP', nombre: 'Libra Esterlina'},
        ]);
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
