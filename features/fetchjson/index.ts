import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response) => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    // let { id, title, completed }: Todo = response.data;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean): void => {
    console.log(`
        The Todo with Id: ${id}
        Has title of: ${title}
        Is it finished: ${completed}
    `);
};
