// services/http/todo.http.tsx

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export async function TodoHttp(id?: string): Promise<Todo[]> {
    const url = `https://jsonplaceholder.typicode.com/todos${id ? '/' + id : ''}`;
    const answer = await fetch(url)
    return (await answer.json()) as Todo[];
}
