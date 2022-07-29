import { Project } from './project';
import { Todo } from './todo';
import { UI } from './ui';

export class TodoController {
    projects = [];
    currentProjectIndex;
    constructor(){
        this.currentProjectIndex = 0;
        this.seedProject();
        UI.createTodos('todo-container',this.projects[this.currentProjectIndex].todos);
    }

    addProject(title){
        if(this.projects.length == 0){
            this.projects.push(new Project(title))
        }
    }

    seedProject(){
        const project = new Project('default');
        const todo1 = new Todo(1,'Clean Dishes','Clean Dishes',1,'10/10/2025',false);
        const todo2 = new Todo(2,'Laundry','Clean clothes',1,'10/10/2025',false);
        const todo3 = new Todo(3,'Pack Suitcases','Business Travel',1,'10/10/2025',false);
        project.addTodo(todo1);
        project.addTodo(todo2);
        project.addTodo(todo3);
    }

}