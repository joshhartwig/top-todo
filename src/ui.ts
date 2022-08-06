import { Todo } from "./todo";

export class UI {

    // open our modal dialog
    openModal(id:string) :void {
        const modal = document.getElementById(id);
        if(modal){
            modal.style.display = 'block';
        }
    }

    // close our modal dialog
    closeModal(id:string) : void {
        const modal = document.getElementById(id);
        if(modal){
            modal.style.display = 'none';
        }
    }

    // create todos in a specific container
    createTodos(id:string, arr:Todo[]) : void {
        const container = document.getElementById(id);
        if (container) {
            arr.forEach(e => {
                const todo = document.createElement('div');
                todo.classList.add('todo');
                todo.innerHTML = `
                <div class='todo-accent'></div>
                <div class='todo-title'>
                    <p class='todo-title-para'>${e.title}</p>
                </div>
                <div class='todo-date'>
                    <p class='todo-date-para'>${e.dueDate}</p>
                </date>
                `;
                container.appendChild(todo);
            });
        }
        
    }
}