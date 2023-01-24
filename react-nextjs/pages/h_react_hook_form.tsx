// pages/react-hook-form.tsx
import {Button} from "@mui/material";
import {useState} from "react";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";

type FormularioEjemplo = {
    nombre: string;
}
export default function () {
    const [nombre, setNombre] = useState('Cesar');
    const {handleSubmit, register} = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Cesar',
            },
            mode: 'all'
        }
    );
    const controladorSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <Layout title="React Hook Form">
                <h1>Formulario con react Hook Form</h1>
                <form onSubmit={handleSubmit(controladorSubmit)}>
                    <div className={"mb-3"}>
                        <label htmlFor={"nombre"} className={"form-label"}>Nombre</label>
                        <input
                            type={"text"}
                            className={"form-control"}
                            placeholder={"Ej: Cesar"}
                            id={"nombre"}
                            {...register('nombre')}
                            aria-describedby={"nombreHelp"}
                        />
                        <div id={"nombreHelp"} className={"form-text"}>
                            Escribe tu nombre
                        </div>
                    </div>
                    <Button variant={"outlined"} type={"submit"}>
                        Enviar
                    </Button>
                </form>
            </Layout>
        </>
    )
}