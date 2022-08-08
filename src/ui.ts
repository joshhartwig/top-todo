import { Todo } from "./todo";

export class UI {

    // open our modal dialog
    static openModal(id:string) :void {
        const modal = document.getElementById(id);
        if(modal){
            modal.style.display = 'block';
        }
    }

    // close our modal dialog
    static closeModal(id:string) : void {
        const modal = document.getElementById(id);
        if(modal){
            modal.style.display = 'none';
        }
    }

    // clears content dynamically generated
    static clearContent(tdContainerId:string, prjContainerId:string){
        const projContainer = document.getElementById(prjContainerId);
        const todoContainer = document.getElementById(tdContainerId);

        if(projContainer && todoContainer){
            projContainer.innerHTML = '';
            todoContainer.innerHTML = '';
        }
    }

    // create todos in a specific container
    static updateDisplay(tdContainerId:string, prjContainerId:string, arr:Todo[]) : void {
        
        // update projects by getting unique values from array
        const projContainer = document.getElementById(prjContainerId);
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
        }

        // update todos
        const container = document.getElementById(tdContainerId);
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