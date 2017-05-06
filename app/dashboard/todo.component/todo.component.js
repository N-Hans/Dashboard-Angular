"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TodosService_1 = require("../../services/todos_service/TodosService");
var TodoComponent = (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) { return _this.todos = todos; });
    };
    TodoComponent.prototype.addTask = function (event, newTaskValue) {
        var _this = this;
        event.preventDefault();
        this.todoService.addTodo(newTaskValue).then(function (todos) { return _this.todos = todos; });
    };
    TodoComponent.prototype.toggle = function (todo) {
        var _this = this;
        this.todoService.toggleTodo(todo).then(function (todos) { return _this.todos = todos; });
    };
    TodoComponent.prototype.delete = function (todo) {
        var _this = this;
        this.todoService.deleteTodo(todo).then(function (todos) { return _this.todos = todos; });
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    core_1.Component({
        selector: "todo",
        template: "<div align = 'center'>\n                    <form (submit) = \"addTask($event, taskInput.value); taskInput.value=''\" style=\"display:inline-flex\">\n                        <input type=\"text\" #taskInput placeholder=\"Next important task\" style=\"width: 25vw\"><button type=\"submit\" class=\"add-button\">\n                                <i class=\"material-icons\">add</i>\n                            </button>\n\n                    </form>\n                    <div *ngIf=\"todos.length\">\n                        <div class=\"todo-item\" width='30vw' *ngFor=\"let todo of todos\" style=\"display:inline-flex\">\n                            <div style=\"float:left; width:5vw\">\n                                <button class=\"icon-button\" (click)=\"toggle(todo)\">\n                                    <i class=\"material-icons\">{{todo.isCompleted ? 'check_box' : 'check_box_outline_blank'}}</i>\n                                </button>\n                            </div>\n                            <div style=\"float:left; width:25vw; word-break: break-all\">\n                                <span [class.striken]=\"todo.isCompleted\">{{todo.taskText}}</span>\n                            </div>\n                            <div style=\"float:right; width:5vw\">\n                                <button class=\"icon-button\" (click)=\"delete(todo)\" style=\"float:right\">\n                                    <i class=\"material-icons\">delete</i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>"
    }),
    __metadata("design:paramtypes", [TodosService_1.TodosService])
], TodoComponent);
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map