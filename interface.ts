export interface myQueue {
    tasks: Array <string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTasks(task:string):number;
}