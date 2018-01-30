"use strict";
var colors = ["red", "green", "yellow"];
//alternative way of declaring arrays
/*let names: Array<string> = ["Tom", "Bob", "Alice"];
console.log(names[1]);  // Bob */
/*function addTask(task:string):number{
    let newArray: string[];
    newArray =  colors.concat(task);
    let numOfElements: number;
    numOfElements = newArray.length;
    return numOfElements;
}*/
//push adds and returns the number of elements straight away
function addTask(task) {
    var numOfElements = colors.push(task);
    return numOfElements;
}
console.log("Count after add: ", addTask("black"));
function listAllTasks() {
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var i = colors_1[_i];
        console.log(i);
    }
}
listAllTasks();
function deleteTask(task) {
    var key = task;
    var index = colors.indexOf(key, 0);
    if (index > -1) {
        colors.splice(index, 1);
    }
    return colors.length;
    ;
}
var count = deleteTask("red");
console.log("Count after delete: ", count);
listAllTasks();
