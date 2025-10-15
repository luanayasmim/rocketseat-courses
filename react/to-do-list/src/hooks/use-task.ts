import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";

export default function UseTask(){
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [isUpdatingTasks, setIsUpdatingTasks] = React.useState(false);
    const [isDeletingTasks, setIsDeletingTasks] = React.useState(false);

    function prepareTask(){
        setTasks([
            ...tasks, 
            {
                id: Math.random().toString(36).substring(2, 9),
                title: "",
                state: TaskState.Creating,
            }
        ]);
    }

    async function updateTask(id:string, payload:{title:Task["title"]}){
        setIsUpdatingTasks(true);

        await delay(1000);

        setTasks(
            tasks.map(
                (task) => task.id === id ? 
                    {
                        ...task, 
                        state:TaskState.Created, 
                        ...payload
                    }
                    : task
                )
            );

        setIsUpdatingTasks(false);
    }

    function updateTaskStatus(id: string, concluded: boolean){
        setTasks(
            tasks.map(
                (task) => task.id === id ? 
                    {
                        ...task, 
                        concluded
                    }
                    : task
                )
            );
    }

    async function deleteTask(id: string){
        setIsDeletingTasks(true);

        await delay(1000);

        setTasks(tasks.filter((task) => task.id !== id));

        setIsDeletingTasks(false);
    }

    return {prepareTask, updateTask, updateTaskStatus, deleteTask, isUpdatingTasks, isDeletingTasks};
}