// pages/a_hola_mundo.tsx
/*
const a_componente = function () {
    return <h1>Hola Mundo</h1>;
}
export default a_componente;
const b_componente = () => <h1>Hola Mundo</h1>;
export default b_componente;
*/

import EstilosEjemplo from "../components/a_estilos/EstilosEjemplo";
import Componente from "../components/b_componentes/Componente";
import Layout from "../components/Layout";

export default function a_hola_mundo() {
    return (
        <>
            <Layout title="Hola Mundo | EPN">
                <h1>a) Hola Mundo</h1>
                <EstilosEjemplo/>
                <Componente iteraciones={3}
                            mostrar={true}
                            url={"https://www.google.com"}/>
                <Componente iteraciones={3}
                            url={"https://www.google.com"}/>
            </Layout>
        </>
    );
}
