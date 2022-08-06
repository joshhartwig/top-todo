export class Todo {
    id: number;
    title: string;
    dueDate: string;
    isDone: boolean;
    project: string;

    constructor(id:number, title:string, dueDate: string, isDone: boolean, project: string){
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.isDone = isDone;
        this.project = project;
    }
}