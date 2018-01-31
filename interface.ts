export interface myQueue {
    tasks: Array <string>;
    addTask(task:string):number;
    listAllTasks():void; //in the contract you need to specify that the method doesn't return anything
    deleteTask(task:string):number;
}