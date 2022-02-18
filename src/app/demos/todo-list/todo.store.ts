import { BehaviorSubject, Observable } from "rxjs";

import { map} from 'rxjs/operators';
import { Task } from "./task";

export interface State {
    todolist: Task[]
}

const state: State = {
    todolist: []
};

export class Store{
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    public GetTodoList(): Observable<Task[]>{
        return this.store
                .pipe(
                    map(store => store.todolist));
    }

    set(name: string, state: any){
        this.subject.next({
            ...this.value, [name]: state
        })
    }
}