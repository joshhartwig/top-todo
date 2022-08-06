import { Todo } from "./todo";
import { UI } from "./ui";

export class Controller {
    projects : string[];
    todos: Todo[];


    constructor(){
        this.projects = [];
        this.todos = [];
        this.todos.push(new Todo(1,'Wash Dishes','10/10/2024',false,'default'));
        this.todos.push(new Todo(2,'Clean Room','10/10/2024',false,'default'));
        this.todos.push(new Todo(3,'Tidy Up House','10/10/2024',false,'default'));
        this.todos.push(new Todo(4,'Meal Prep','10/10/2024',false,'default'));
    }

    addTodo() : void {
        const title = document.getElementById('frm-title') as HTMLInputElement;
        const date = document.getElementById('frm-date') as HTMLInputElement;
        const isDone = false;
        const project = document.getElementById('frm-project') as HTMLInputElement;
        
        const newId = this.todos.length + 1;
        this.todos.push(new Todo(newId,title.value,date.value,isDone,project.value));
        UI.updateDisplay('todo-container','project-container',this.todos);
    }



    

}