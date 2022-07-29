
import { Todo } from './todo';
import { UI } from './ui';

export class TodoController {
    todos

    constructor(){
        this.todos = [];
        this.projects = [];
        this.currentProjectIndex = 0;
        this.seed();    
        UI.createTodos('todo-container',this.todos);  
        UI.createProjects('project-container', this.todos);
    }

    addTodo(title,description,priority,dueDate,project){
        const newId = this.todos.length + 1;
        this.todos.push(new Todo(newId,title,description,priority,dueDate,false,project));
    }

    

    seed(){
        const todo1 = new Todo(1,'Clean Dishes','Clean Dishes',1,'10/10/2025',false,'default');
        const todo2 = new Todo(2,'Laundry','Clean clothes',1,'10/10/2025',false,'home');
        const todo3 = new Todo(3,'Pack Suitcases','Business Travel',1,'10/10/2025',false,'default');
        this.todos.push(todo1);
        this.todos.push(todo2);
        this.todos.push(todo3);
    }

}