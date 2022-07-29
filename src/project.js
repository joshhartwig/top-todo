import { Todo } from './todo';

export class Project {
    title;
    todos = [];
    constructor(title){
        this.title = title;
        this.todos = [];
    }

    // adds todo item to array
    addTodo(todo) {
        this.todos.push(todo);
        return true;
        // refactor to check if todo.id exists when adding
    }

    // removes todo by id
    removeTodo(id) {
        // fix me
    }
}