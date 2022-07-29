export class Todo {
    id;
    priority;
    title;
    description;
    dueDate;
    done;
    project;
    constructor (id, title, description, priority, dueDate, done, project){
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.done = done;
        this.project = project;
    }

}