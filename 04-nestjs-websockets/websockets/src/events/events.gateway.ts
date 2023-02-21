// src/events/events.gateway.ts
import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";

@WebSocketGateway(
    8080, // Port where the server will be listening
    {
        cors: {
            origin: '*', // Origin allowed to connect
        }
    }
)
export class GatewayEvents {
    @SubscribeMessage('hello')
    returnHello(
        @MessageBody()
        message: { message: string},
        @ConnectedSocket()
        socket: Socket // import {Server, Socket} from "socket.io";
    ) {
        console.log('message', message);
        socket.broadcast // Make every client connected listening to this event get the message
            .emit(
                'listenHelloEvent', // Event name
                { // Object to send
                    message: 'Hello from the server ' + message.message
                }
            );
        return {message: 'ok'}; // Callback from the method.
    }

    @SubscribeMessage('enterRoom') // Event name
    enterRoom(
        @MessageBody()
        message: { roomId: string, name: string}, // Event data
        @ConnectedSocket()
        socket: Socket
    ) {
        // socket.join group the clients by an id.
        // When joining a room, the client will listen to the events of that room.
        socket.join(message.roomId);
        const welcomeRoomMessage = {message: `Welcome to the room ${message.roomId}`};
        socket.broadcast
            .to(message.roomId) // Send the message to the clients in the room
            // the listeners of the event, receive the message
            .emit('listenEnterRoomEvent', welcomeRoomMessage);
        return {message: 'ok'}; // Callback from the method.
    }

    @SubscribeMessage('sendMessage') // Event name
    sendMessage(
        @MessageBody()
        message: { roomId: string, name: string, message: string}, // Event data
        @ConnectedSocket()
        socket: Socket
    ) {
        const roomMessage = {
            name: message.name,
            message: message.message,
            roomId: message.roomId
        }
        console.log('roomMessage', roomMessage);
        socket.broadcast
            .to(message.roomId) // Send the message to the clients in the room
            .emit('listenSendMessageEvent', roomMessage);
        return {message: 'ok'}; // Callback from the method.s
    }
}
