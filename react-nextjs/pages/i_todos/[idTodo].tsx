// pages/i_todos/[idTodo].tsx
import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {TodoHttp} from "../../services/http/todo.http";

export default function () {
    return (
        <Layout title="To do's">
            <h1>To do's hijo</h1>
        </Layout>
    )
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

// Servidor (nextjs front-end)

// Servidor Back-end (Content Management System - CMS)
