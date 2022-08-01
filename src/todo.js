export class Todo {
    id;
    priority;
    title;
    dueDate;
    done;
    project;
    constructor (id, title, priority, dueDate, done, project){
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.done = done;
        this.project = project;
    }

}