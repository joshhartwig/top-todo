import { Todo } from "./todo";

export class UI {
    todoContainer: string;
    projectContainer: string;
    modalContainer: string;
    
    constructor(obj:any){
        this.todoContainer = obj.todoContainer;
        this.projectContainer = obj.projectContainer;
        this.modalContainer = obj.modalContainer;
    }
          
    // open our modal dialog
    openModal() :void {
        const modal = document.getElementById(this.modalContainer);
        if(modal){
            modal.style.display = 'block';
        }
    }

    // close our modal dialog
    closeModal() : void {
        const modal = document.getElementById(this.modalContainer);
        if(modal){
            modal.style.display = 'none';
        }
    }

    // clears content dynamically generated
    clearContent(){
        const projContainer = document.getElementById(this.projectContainer);
        const todoContainer = document.getElementById(this.todoContainer);

        if(projContainer && todoContainer){
            projContainer.innerHTML = '';
            todoContainer.innerHTML = '';
        }
    }

    // create todos in a specific container
    updateDisplay(arr:Todo[]) : void {
        this.clearContent();

        // create div for project entries
        const projContainer = document.getElementById(this.projectContainer);
        
        // update projects by getting unique values from array
        if(projContainer){
            const projects: string[] = [];
            arr.forEach(e => {      
                projects.push(e.project);
            });

            // reduce the projects down to unique names
            let unique: string[] = [];
            unique = projects.filter((val,idx,self) => {
            return self.indexOf(val) === idx;
            });

            unique.forEach(e => {
                const project = document.createElement('div');
                project.innerText = `${e}`;
                projContainer?.appendChild(project);     
            });

            //render button
            let btnDiv = document.createElement('div');
            let btn = document.createElement('button');
            btn.innerText = 'Create New Todo';
            btnDiv.appendChild(btn);
            projContainer.appendChild(btnDiv);

        }

        // update todos
        const container = document.getElementById(this.todoContainer);
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

