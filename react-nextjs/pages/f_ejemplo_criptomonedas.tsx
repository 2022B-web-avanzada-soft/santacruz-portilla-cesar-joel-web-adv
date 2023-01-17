import Link from "next/link";
import Layout from "../components/Layout";
import CryptoFormulario from "../components/f_ejemplo_criptomonedas/CryptoFormulario";
import {useEffect, useState} from "react";

export interface ConsultaMoneda {
    valorMoneda: string;
    valorCryptoMoneda: string;
}

export default function () {
    const [monedas, setMonedas] = useState(
        {} as ConsultaMoneda
    );
    const [resultado, setResultado] = useState({} as any);
    useEffect(
        () => {
            if (Object.keys(monedas).length === 2) {
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.valorCryptoMoneda}&tsyms=${monedas.valorMoneda}`;
                const consultarAPI = async () => {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    setResultado(resultado.DISPLAY[monedas.valorCryptoMoneda][monedas.valorMoneda]);
                }
                consultarAPI().then().catch((error) => {
                    console.log(error);
                });
            }
        },
        [monedas]
    )
    return (
        <>
            <Layout title="Ejemplo Criptomonedas | EPN">
                <div className="text-center">
                    <h1 className={'h1'}> Crypto Exchange Calculator</h1>
                    <br/>
                    <img
                        className={'rounded mx-auto d-block'}
                        src={'https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main.jpg'}
                        alt={'Imagen de criptomonedas'}
                        width={300}
                        height={300}
                    />
                </div>
                <h2 className={'h2'}>Seleccion</h2>
                <p>Nota: Selecciona tu moneda y cryptomoneda</p>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <CryptoFormulario setMonedas={setMonedas}>

                        </CryptoFormulario>
                    </div>
                    <div className={'col-md-6'}>
                        {
                            resultado.PRICE &&
                            <div>
                                <p><strong>PRECIO:</strong> {resultado.PRICE}</p>
                                <p><strong>PRECIO MAS ALTO DEL DIA:</strong> {resultado.HIGHDAY}</p>
                                <p><strong>PRECIO MAS BAJO DEL DIA:</strong> {resultado.LOWDAY}</p>
                                <p><strong>VARIACION ULTIMAS 24 HORAS:</strong> {resultado.CHANGEPCT24HOUR}</p>
                                <p><strong>ULTIMA ACTUALIZACION:</strong> {resultado.LASTUPDATE}</p>
                            </div>

                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}
