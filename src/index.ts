import { Todo } from "./todo";
import { UI } from "./ui";

let projects : string[] = [];
let todos: Todo[] = [];

const modal = document.getElementById('modal-container');
const modalBtn = document.getElementById('modal-btn');
const frmBtn = document.getElementById('frm-btn');
const title = document.getElementById('todo-title') as HTMLInputElement;
const date = document.getElementById('todo-date') as HTMLInputElement;
const project = document.getElementById('todo-project') as HTMLInputElement;

registerEventHandlers();

let ui : UI = new UI({
    todoContainer : 'todo-container',
    projectContainer: 'project-container',
    modalContainer: 'modal-container',
});

retrieveFromLocalStorage();



ui.updateDisplay(todos);


function registerEventHandlers(){
    window.onclick = function(e:any){
        if(e.target === modal){
            if(modal){
                modal.style.display = 'none';
            }
        }
    }

    if(modalBtn){
        modalBtn.onclick = () => {
            ui.openModal();
        }
    }

    if(frmBtn){
        frmBtn.onclick = () => {
            newTodo();
        }
    }
}

function newTodo() : void {
    const id = todos.length + 1;
    todos.push(new Todo(
        id,
        title.value,
        date.value,
        false,
        project.value
        ));
    localStorage.setItem('todos',JSON.stringify(todos));
    ui.updateDisplay(todos);
    ui.closeModal();
}

function retrieveFromLocalStorage(): void {
    if(localStorage.getItem('todos') === null){
        seedTodos();
    } else {
        let tmp: any = localStorage.getItem('todos');
        todos = JSON.parse(tmp);
    }

}

function seedTodos() {
    if(todos.length === 0){
        todos.push(new Todo(1,'Wash Dishes','10/10/2024',false,'default'));
        todos.push(new Todo(2,'Clean Room','10/10/2024',false,'default'));
        todos.push(new Todo(3,'Tidy Up House','10/10/2024',false,'default'));
        todos.push(new Todo(4,'Meal Prep','10/10/2024',false,'default'));
    }
}
