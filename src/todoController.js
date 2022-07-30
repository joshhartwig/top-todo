
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
        this.addTodo('Clean Dishes','Stuff after dinner',1,'10/10/2020','default');
        this.addTodo('Laundry','Clean Dirty Clothese',1,'10/10/2028','home');
        this.addTodo('Pack Suitcases','Travel!',1,'10/20/2001','home');
    }

}