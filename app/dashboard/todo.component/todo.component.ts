import {Injectable, Component} from '@angular/core';
import {Todo} from './Todo';

@Component({
    selector: "todo",
    template: `<div align = 'center'>
                    <form (submit) = "addTask($event, taskInput.value); taskInput.value=''">
                        <input type="text" #taskInput placeholder="Наступна важлива задача" style="width: 25vw"><button type="submit" class="add-button">
                                <i class="material-icons">add</i>
                            </button>

                    </form>
                    <div *ngIf="todos.length">
                        <div class="todo-item" width='30vw' *ngFor="let todo of todos">
                            <button class="icon-button" (click)="toggle(todo)">
                                <i class="material-icons">{{todo.isCompleted ? 'check_box' : 'check_box_outline_blank'}}</i>
                            </button>
                            <span [class.striken]="todo.isCompleted">{{todo.text}}</span>
                            <button class="icon-button" (click)="delete(todo)" style="float:right">
                                <i class="material-icons">delete</i>
                            </button>
                        </div>
                    </div>
                </div>`
})
export class TodoComponent{
    todos: Todo[] = [new Todo("Стара важлива задача")];

    addTask(event:Event, newTaskValue:string){
        event.preventDefault();
        this.todos.push(new Todo(newTaskValue))
    }

    toggle(todo:Todo){
        todo.isCompleted = !todo.isCompleted;
    }

    delete(todo: Todo){
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
}