// pages/i_websockets.tsx
import io from 'socket.io-client'
import {useEffect, useState} from "react";
import ChatMessage, {chatMessageProps} from "../components/i_websockets/chatMessage";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";

const websocketServer = 'http://localhost:21205';
const socket = io(websocketServer);

export interface FormModel {
    roomId: string;
    name: string;
    message: string;
}

export type RoomMessage = FormModel;
export default function () {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [message, setMessage] = useState([] as chatMessageProps[]);
    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            roomId: '',
            name: '',
            message: '',
        },
        mode: 'all'
    });

    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('socket connected')
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('socket disconnected')
            });
            socket.on('listenHelloEvent', (data: { message: string }) => {
                console.log('listenHelloEvent', data);
                const newMessage: chatMessageProps = {
                    message: data.message,
                    name: 'Server',
                    position: 'L'
                }
                setMessage((prevMessages) => [...prevMessages, newMessage]);
            });
            socket.on('listenEnterRoomEvent', (data: { message: string }) => {
                console.log('listenEnterRoomEvent', data);
                const newMessage: chatMessageProps = {
                    message: data.message,
                    name: 'Server',
                    position: 'L'
                }
                setMessage((prevMessages) => [...prevMessages, newMessage]);
            });
            socket.on('listenSendMessageEvent', (data: { message: string }) => {
                console.log('listenSendMessageEvent', data);
                const newMessage: chatMessageProps = {
                    message: data.message,
                    name: 'Server',
                    position: 'L'
                }
                setMessage((prevMessages) => [...prevMessages, newMessage]);
            });
        }, []
    )

    const sendHelloEvent = () => {
        const newMessage: chatMessageProps = {
            message: 'Hello Cesar',
            name: 'Server',
            position: 'L'
        };
        socket.emit(
            'hello', // event name
            newMessage, // data
            (data) => {
                // callback
                setMessage((prevMessages) => [...prevMessages, newMessage]);
            }
        )
    }

    const unirseSalaOEnviarMensajeASala = (data: FormModel) => {
        if (data.message === '') {
            //unimos a la sala
            const dataEventoUnirseSala = {
                roomId: data.roomId,
                name: data.name,
            };
            socket.emit(
                'unirseSala', // Nombre Evento
                dataEventoUnirseSala, //  Datos evento
                () => { // Callback o respuesta del evento
                    const nuevoMensaje: chatMessageProps = {
                        message: 'Bienvenido a la sala ' + dataEventoUnirseSala.roomId,
                        name: 'Sistema',
                        position: 'L'
                    };
                    setMessage((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            );
        } else {
            //mandamos mensaje
            const dataEventoEnviarMensajeSala = {
                roomId: data.roomId,
                name: data.name,
                message: data.message,
            };

            socket.emit(
                'enviarMensaje', // Nombre Evento
                dataEventoEnviarMensajeSala, //  Datos evento
                () => { // Callback o respuesta del evento
                    const nuevoMensaje: chatMessageProps = {
                        message: data.roomId + ' - ' + data.message,
                        name: data.name,
                        position: 'R'
                    };
                    setMessage((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            )
        }
    }

    const estaConectado = () => {
        if (isConnected) {
            return <span>Conectado :)</span>
        } else {
            return <span>Desconectado :(</span>
        }
    }

    return (
        <>
            <Layout title="Formulario">
                <h1>Websockets</h1>
                <p><strong>{estaConectado()}</strong></p>
                <button className={'btn btn-success'} onClick={() => sendHelloEvent()}>Enviar evento hola</button>
                <div className="row">
                    <div className="col-sm-6">

                        <h1>FORMULARIO</h1>

                        <div className="row">
                            <div className="col-sm-6">
                                <form onSubmit={handleSubmit(unirseSalaOEnviarMensajeASala)}>
                                    <div className="mb-3">
                                        <label htmlFor="salaId" className="form-label">Sala ID</label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="EJ: 1234"
                                               id="salaId"
                                               {...register('roomId', {required: 'Ingresar salaId'})}
                                               aria-describedby="salaIdHelp"/>
                                        <div id="salaIdHelp" className="form-text">
                                            Ingresa tu idSala.
                                        </div>
                                        {errors.roomId &&
                                            <div className="alert alert-warning" role="alert">
                                                Tiene errores {errors.roomId.message}
                                            </div>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="EJ: Lizbeth"
                                               id="nombre"
                                               {...register('name', {required: 'Nombre requerido'})}
                                               aria-describedby="nombreHelp"/>
                                        <div id="nombreHelp" className="form-text">
                                            Ingresa tu nombre.
                                        </div>
                                        {errors.name &&
                                            <div className="alert alert-warning" role="alert">
                                                Tiene errores {errors.name.message}
                                            </div>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="EJ: Mensaje"
                                               id="mensaje"
                                               {...register('message')}
                                               aria-describedby="mensajeHelp"/>
                                        <div id="mensajeHelp" className="form-text">
                                            Ingresa tu mensaje.
                                        </div>
                                        {errors.message &&
                                            <div className="alert alert-warning" role="alert">
                                                Tiene errores {errors.message.message}
                                            </div>
                                        }
                                    </div>
                                    <button type="submit"
                                            disabled={!isValid}
                                            className="btn btn-warning">
                                        Unirse sala
                                    </button>
                                    <button type="reset"
                                            className="btn btn-danger">
                                        Reset
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>


                    <div className="col-sm-6">
                        {message.map((mensaje, indice) =>
                            <ChatMessage key={indice}
                                         message={mensaje.message}
                                         name={mensaje.name}
                                         position={mensaje.position}
                            />)
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}
