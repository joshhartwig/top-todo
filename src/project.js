import { Todo } from './todo';

export default class Project {
    title;
    todos = [];
    constructor(title){
        this.title = title;
        todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos.splice(id,1);
    }
}