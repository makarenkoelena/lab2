"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass() {
        this.tasks = ["task1", "task2", "task3"];
    }
    myClass.prototype.addTask = function (task) {
        this.tasks.push(task);
        return this.tasks.length;
    };
    //2c
    myClass.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    //2d
    myClass.prototype.deleteTask = function (task) {
        var key = task;
        var index = this.tasks.indexOf(key, 0);
        if (index > -1) {
            this.tasks.splice(index, 1); //start at index of the element, delete the number of elements
            console.log("We have deleted ", task);
        }
        return this.tasks.length;
    };
    return myClass;
}()); //end of class
var newClass = new myClass();
newClass.listAllTasks();
console.log("Count after add: ", newClass.addTask("task4"));
newClass.listAllTasks();
console.log("Count after delete: ", newClass.deleteTask("task2"));
newClass.listAllTasks();
