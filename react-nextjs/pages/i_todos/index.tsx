// pages/i_todos/index.tsx
import Layout from "../../components/Layout";
import {useEffect, useState} from "react";
import {Todo, TodoHttp} from "../../services/http/todo.http";

export default function () {
    const [arregloTodos, setArregloTodos] = useState([] as Todo[])
    useEffect(
        () => {
            consultarTodos();
        },
        []
    )
    const consultarTodos = async () => {
        const result = await TodoHttp();
        setArregloTodos([...arregloTodos, ...result]);
    }
    return (
        <>
            <Layout title="Todo's">
                <h1>To do's</h1>
                {arregloTodos.map(
                    (todo) => {
                        return (
                            <li key={todo.id}>
                                {todo.id} - {todo.completed} -
                                <a href={`/i_todos/${todo.id}`}>
                                    {todo.title}
                                </a>
                            </li>
                        )
                    }
                )}
            </Layout>
        </>
    )
}
