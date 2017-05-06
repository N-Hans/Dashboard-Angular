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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TodosService = (function () {
    function TodosService(http) {
        this.http = http;
        this.apiUrl = "http://dashboardtaskservice.azurewebsites.net/api/tasks";
        //private apiUrl : string = "http://127.0.0.1:9090/api/tasks";
        this.options = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
    }
    TodosService.prototype.getTodos = function () {
        return this.http.get(this.apiUrl, this.options)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    TodosService.prototype.addTodo = function (text) {
        return this.http.post(this.apiUrl, "taskText=" + text, this.options)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    TodosService.prototype.deleteTodo = function (todo) {
        var url = this.apiUrl + "/" + todo._id;
        return this.http.delete(url, this.options)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    TodosService.prototype.toggleTodo = function (todo) {
        var url = this.apiUrl + "/" + todo._id;
        return this.http.put(url, "isCompleted=" + !todo.isCompleted, this.options)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    return TodosService;
}());
TodosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=TodosService.js.map