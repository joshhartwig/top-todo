
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

    addTodo(title,priority,dueDate,project){
        const newId = this.todos.length + 1;
        this.todos.push(new Todo(newId,title,priority,dueDate,false,project));
    }

    seed(){
        this.addTodo('Math Homework',2,'9/22/2022','Default');
        this.addTodo('Laundry Day',1,'10/10/2022','Default');
        this.addTodo('Pay Utils',3,'10/12/2022','Home');
        this.addTodo('Rent Due',1,'9/20/22','Work');
    }

}