import { Todo } from "./todo";
import { UI } from "./ui";

export class Controller {
    projects : string[];
    todos: Todo[];
    modal: any;
    modalBtn: any;
    frmBtn: any;
    window: any;
    ui: UI;

    constructor(window:any){
        this.projects = [];
        this.todos = [];
        this.window = window;
        this.todos.push(new Todo(1,'Wash Dishes','10/10/2024',false,'default'));
        this.todos.push(new Todo(2,'Clean Room','10/10/2024',false,'default'));
        this.todos.push(new Todo(3,'Tidy Up House','10/10/2024',false,'default'));
        this.todos.push(new Todo(4,'Meal Prep','10/10/2024',false,'default'));
        

        // object for all ui elements needed to update ui class
        let uiMap = {
            todoContainer : 'todo-container',
            projectContainer: 'project-container',
            modalContainer: 'modal-container',
        };
        this.ui = new UI(uiMap);
        
        this.modal = document.getElementById('modal');
        window.onclick = function(event:any){
            if(event.target === this.modal){
                this.modal.style.display = 'none';
            }
        };
        

        this.modalBtn = document.getElementById('modal-btn');
        this.modalBtn.onclick = function(){
            this.ui.openModal();
        };

        this.frmBtn = document.getElementById('frm-btn');
        this.frmBtn.onclick = function(){
            this.addTodo();
        }

        this.ui.updateDisplay(this.todos);
    }

    addTodo() : void {
        const title = document.getElementById('todo-title') as HTMLInputElement;
        const date = document.getElementById('todo-date') as HTMLInputElement;
        const isDone = false;
        const project = document.getElementById('todo-project') as HTMLInputElement;
        
        const newId = this.todos.length + 1;
        this.todos.push(new Todo(newId,title.value,date.value,isDone,project.value));
        this.ui.updateDisplay(this.todos);
        console.log('added todo');
    }




    

}