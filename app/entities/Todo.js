"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = (function () {
    function Todo(taskText, isCompleted) {
        if (isCompleted === void 0) { isCompleted = false; }
        this.taskText = taskText;
        this.isCompleted = isCompleted;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map