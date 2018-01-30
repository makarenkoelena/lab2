import{myQueue} from "./interface";
class myClass implements myQueue{
    
tasks: Array<string> = ["task1", "task2", "task3"];

addTask(task:string):number{
    this.tasks.push(task);
    return this.tasks.length;
}
//2c
listAllTasks(){
    for(let i of this.tasks){
    console.log(i)
    }
}
//2d
deleteTasks(task:string):number{
    let key: string = task;
    let index: number = this.tasks.indexOf(key, 0);
    
    if(index > -1){
        this.tasks.splice(index, 1);
    }
    return this.tasks.length;
}
}//end of class

let newClass = new myClass();
newClass.listAllTasks();
newClass.addTask("task4");
newClass.deleteTasks("task2");
