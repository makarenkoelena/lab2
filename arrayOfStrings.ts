//2a
let tasks: Array<string> = ["task1", "task2", "task3"];

//2b push adds and returns the number of elements straight away
function addTask(task:string):number{
    let count: number = tasks.push(task);
    console.log("Item " + task + " added to array");
    return count;
}
console.log(addTask("task4"));

//2c
function listAllTasks(){
    for(let i of tasks){//"in" will give back the index; "of" will give back the actual element itself
    console.log(i)
    }

/*tasks.forEach(function(task){
    console.log(task)
})*/
}
listAllTasks();

//2d
function deleteTask(task:string):number{
    let index: number = tasks.indexOf(task);//start at the index of the elemnt you pass, if this element exists in the array, its position will be greater than -1
    if(index > -1){//if the element is in the array we go into here
        tasks.splice(index, 1);//start at index of the element, delete the number of elements
        console.log("We have deleted ", task);
    }
    return tasks.length;;
}

console.log("Count after delete: ", deleteTask("task2"));
listAllTasks();