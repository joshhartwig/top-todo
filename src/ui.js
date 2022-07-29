export class UI {
    static createTodos(id, arr){
        this.resetContent(id);

        const container = document.getElementById(id);
        arr.forEach(e => {
            const todo = document.createElement('div');
            todo.innerHTML = `
            <ul>
                <li>${e.title}</li>
                <li>${e.description}</li>
                <li>${e.dueDate}</li>
            </ul>
            `;
            container.appendChild(todo);
        });
    }

    static resetContent(id){
        const container = document.getElementById(id);
        container.innerHTML = "";
    }

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
            project.innerText = `${e}`;
            container.appendChild(project);
        });
    }
}