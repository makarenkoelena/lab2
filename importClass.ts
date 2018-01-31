import{myQueue} from "./interface";//no need to put the extension
class myClass implements myQueue{
    
tasks: Array<string> = ["task1", "task2", "task3"];// no "let" word

addTask(task:string):number{ // get rid of the word "function"...
    this.tasks.push(task);
    return this.tasks.length;
}
//2c
listAllTasks(){//...here as well..
    for(let i of this.tasks){
    console.log(i)
    }
}
//2d
deleteTask(task:string):number{//...and here
    let index: number = this.tasks.indexOf(task);
    
    if(index > -1){
        this.tasks.splice(index, 1);//start at index of the element, delete the number of elements
        console.log("We have deleted ", task);
    }
    return this.tasks.length;
}
}//end of class

let newClass = new myClass();
newClass.listAllTasks();
console.log("Count after adding: ", newClass.addTask("task4"));
newClass.listAllTasks();

console.log("Count after delete: ", newClass.deleteTask("task2"));
newClass.listAllTasks();