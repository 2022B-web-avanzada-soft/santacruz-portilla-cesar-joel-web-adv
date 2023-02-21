// pages/react-hook-form.tsx
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import Layout from "../components/Layout";

type FormularioEjemplo = {
    nombre: string;
    estadoCivil: string;
}
export default function () {
    const [nombre, setNombre] = useState('Cesar');
    const {handleSubmit, register, formState: {errors, isValid}, control} = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Cesar',
                estadoCivil: ''
            },
            mode: 'all'
        }
    );
    const controladorSubmit = (data: FormularioEjemplo) => {
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
                            {...register('nombre', {
                                required: {
                                    value: true,
                                    message: 'El nombre es requerido'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'El nombre no puede tener mas de 20 caracteres'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'El nombre no puede tener menos de 3 caracteres'
                                },
                                validate: {
                                    onlyLetters: (value) => {
                                        const regex = /^[a-zA-Z]+$/;
                                        return regex.test(value) || 'El nombre solo puede tener letras';
                                    }
                                }
                            })}
                            aria-describedby={"nombreHelp"}
                        />
                        <div id={"nombreHelp"} className={"form-text"}>
                            Escribe tu nombre
                        </div>
                        {errors.nombre &&
                            <div className={"alert alert-warning"} role={"alert"}>
                                Tiene errores: {errors.nombre.message}
                            </div>
                        }
                    </div>
                    <div className={"mb-3"}>
                        <FormControl fullWidth={true}>
                            <InputLabel id={"estadoCivilId"}>Estado civil</InputLabel>
                            <Controller
                                control={control}
                                rules={{ required: {value: true, message: "Estado C. requerido"}}}
                                name={"estadoCivil"}
                                render={({field: {onChange, value, onBlur}}) => {
                                    return <Select
                                        id={"estadoCivilId"}
                                        onBlur={onBlur}
                                        value={value}
                                        label={"Estado civil"}
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"soltero"}>Soltero</MenuItem>
                                        <MenuItem value={"casado"}>Casado</MenuItem>
                                    </Select>
                                }}
                            />
                            {/*Termina controller*/}
                            {errors.estadoCivil &&
                                <div className={"alert alert-warning"} role={"alert"}>
                                    Tiene errores: {errors.estadoCivil.message}
                                </div>
                            }
                        </FormControl>
                    </div>
                    <Button variant={"outlined"}
                            type={"submit"}
                            disabled={!isValid}>
                        Enviar
                    </Button>
                </form>
            </Layout>
        </>
    )
}
