export class UI {

    // create a div for each todo item in our container
    static createTodos(id, arr){
        this.resetContent(id);

        const container = document.getElementById(id);
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

    // reset all html content in specified container
    static resetContent(id){
        const container = document.getElementById(id);
        container.innerHTML = "";
    }

    // creates a div for projects in specific container, only one item per title found
    static createProjects(id, arr){
        this.resetContent(id);

        let projects = new Set();
        arr.forEach(e => {
            projects.add(e.project);
            console.log(e.project);
        })

        const container = document.getElementById(id);
        projects.forEach(e => {
            const project = document.createElement('div');
            project.classList.add('project');
            project.innerText = `#${e}`;
            container.appendChild(project);
        });
    }
}