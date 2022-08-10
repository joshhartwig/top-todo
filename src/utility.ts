import { Todo } from "./todo";

export class Utility {

    static exportToLocalStorage(id:string,arr:any){
        const stringifiedArray = JSON.stringify(arr);
        localStorage.setItem(id,stringifiedArray);
    }

    static retrieveFromLocalStorage(id:string,arr:any) :Todo[] {
        let tmp: any = localStorage.getItem(id);
        return JSON.parse(tmp);
    }

}