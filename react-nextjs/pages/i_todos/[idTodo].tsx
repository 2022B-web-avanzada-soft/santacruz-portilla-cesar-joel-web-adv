// pages/i_todos/[idTodo].tsx
import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {Todo, TodoHttp} from "../../services/http/todo.http";
import {useRouter} from "next/router";

// http://localhost:3000/i_todos/1?nombre=cesar // idTodo = 1; nombre = cesar;
export default function (params: ParametersTodo) {
    const router = useRouter();
    const {idTodo, nombre} = router.query;
    console.log('idTodo', idTodo);
    console.log('nombre', nombre);
    return (
        <Layout title="To do's">
            <h1>To do's hijo {params?.todo.title}</h1>
        </Layout>
    )
}

interface ParametersTodo {
        error?: string;
        todo?: Todo;
}

//Check the valid ids
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {params: {idTodo: '1'}},
        {params: {idTodo: '2'}},
        {params: {idTodo: '4'}},
    ]
    return {paths, fallback: false}
}

// Code to load information on the server side and send it to the client side
export const getStaticProps: GetStaticProps = async (
    {params}
) => {
    try {
        const id = params?.idTodo as string;
        const result = await TodoHttp(id);
        return {props: {todo: result}}
    } catch (err: any) {
        return {
            props: {error: err.message}
        }
    }
}

// Servidor (next js front-end)

// Servidor Back-end (Content Management System - CMS)
