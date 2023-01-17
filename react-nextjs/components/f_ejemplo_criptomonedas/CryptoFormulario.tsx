// components/f_ejemplo_criptomonedas/CryptoFormulario.tsx
import {useEffect, useState} from "react";
import {MONEDAS} from "../d_hook_custom/monedas";
import {MonedasInterface} from "../../interfaces/moneda";
import useSelectMoneda from "../hooks/useSelectMoneda";
import {ConsultaMoneda} from "../../pages/f_ejemplo_criptomonedas";

export default function (params) {
    const {setMonedas} = params;
    const [monedasArreglo] = useState(MONEDAS);
    const [cryptoMonedasArreglo, setCryptoMonedasArreglo] = useState([] as MonedasInterface[]);
    const [valorMoneda, SelectMonedaComponent] = useSelectMoneda(
        'Seleccionar Moneda',
        monedasArreglo
    );
    const [valorCryptoMoneda, SelectCryptoMonedaComponent] = useSelectMoneda(
        'Seleccionar Crypto Moneda',
        cryptoMonedasArreglo,
    );
    useEffect(
        () => {
            const consultarAPICrypto = async () => {
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const respuesta = await fetch(url);
                const dataPlana = await respuesta.json();
                const arregloCryptos: MonedasInterface[] = dataPlana.Data.map(
                    (cryptoMoneda) => {
                        const cryptoMonedaLocal: MonedasInterface = {
                            id: cryptoMoneda.CoinInfo.Name,
                            nombre: cryptoMoneda.CoinInfo.FullName,
                        }
                        return cryptoMonedaLocal;
                    }
                );
                setCryptoMonedasArreglo(arregloCryptos);
            }
            consultarAPICrypto().then().catch((error)=>{
                console.log(error)
            });
        },
        []
    )
    const manejarSubmitFormulario = (e) => {
        e.preventDefault();
        const monedasConsulta: ConsultaMoneda = {
            valorCryptoMoneda: valorCryptoMoneda as string,
            valorMoneda: valorMoneda as string,
        }
        setMonedas(monedasConsulta);
    }
    // useEffect(
    //     () => {
    //         if(valorMoneda===){
    //             setCryptoMonedasArreglo({
    //
    //             })
    //         }
    //         setCryptoMonedasArreglo(cryptoMonedasArreglo.filter((cryptoMoneda)=>{
    //             return cryptoMoneda.id===valorMoneda;
    //         }
    //     },
    //     [valorMoneda]
    // )

    return (
        <>
            <form onSubmit={manejarSubmitFormulario}>
                {SelectMonedaComponent}
                {SelectCryptoMonedaComponent}
                <br/>
                <button className={'btn btn-primary w-100'} type={'submit'}>
                    Calcular
                </button>
            </form>
        </>
    )
}