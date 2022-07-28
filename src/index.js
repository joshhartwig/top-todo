export default class Todo {
    id;
    priority;
    title;
    description;
    dueDate;
    done;
    constructor (id, title, description, priority, dueDate, done){
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.done = done;
    }

}