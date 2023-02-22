// components/i_websockets/chatMessage.tsx

export interface chatMessageProps {
    name: string;
    message: string;
    position: 'R' | 'L';
}
export default function ChatMessage(props: chatMessageProps) {
    const {name, message, position } = props;
    return (
        <>
            {
                position === 'R' ?
                    <p className={"text-right"}>
                        {message}<strong>{name}</strong>
                    </p> :
                    <p className={"text-left"}>
                        <strong>{name}</strong>{message}
                    </p>
            }
        </>
    )
}
