"use strict";
//2a
var tasks = ["task1", "task2", "task3"];
//2b push adds and returns the number of elements straight away
function addTask(task) {
    var count = tasks.push(task);
    console.log("Item " + task + " added to array");
    return count;
}
console.log(addTask("task4"));
//2c
function listAllTasks() {
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var i = tasks_1[_i];
        console.log(i);
    }
    /*tasks.forEach(function(task){
        console.log(task)
    })*/
}
listAllTasks();
//2d
function deleteTask(task) {
    var index = tasks.indexOf(task); //start at the index of the elemnt you pass, if this element exists in the array, its position will be greater than -1
    if (index > -1) {
        tasks.splice(index, 1); //start at index of the element, delete the number of elements
        console.log("We have deleted ", task);
    }
    return tasks.length;
    ;
}
console.log("Count after delete: ", deleteTask("task2"));
listAllTasks();
