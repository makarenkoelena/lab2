let colors: string[] = ["red", "green", "yellow"];

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
function addTask(task:string):number{
    let numOfElements: number = colors.push(task);
    return numOfElements;
}
console.log("Count after add: ", addTask("black"));

function listAllTasks(){
    for(let i of colors){
    console.log(i)
    }
}
listAllTasks();

function deleteTask(task:string):number{
    let key: string = task;
    let index: number = colors.indexOf(key, 0);
    
    if(index > -1){
        colors.splice(index, 1);
    }
    return colors.length;;
}

let count: number = deleteTask("red");
console.log("Count after delete: ", count);
listAllTasks();