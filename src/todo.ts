export class Todo {
    id: number;
    title: string;
    dueDate: string;
    isDone: boolean;

    constructor(id:number, title:string, dueDate: string, isDone: boolean){
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }
}