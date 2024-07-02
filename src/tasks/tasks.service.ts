import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    /*deleteTaskById(id: string) {
        throw new Error('Method not implemented.');
    }*/
    private tasks: Task[] = [];

    createTask(titulo: string, descricao: string): Task{
        const newTask = new Task(titulo, descricao);
        this.tasks.push(newTask);
        return newTask;
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find((task) => task.id === id)
    }

    deleteTaskById(id: string): void{
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }

    updateTask(id: string, titulo: string, descricao: string, status: 'ABERTA' | 'FEITA'): Task{
        const task = this.getTaskById(id);
        if(!task){
            return null;
        }
        task.titulo = titulo;
        task.descricao = descricao;
        task.status = status;
        return task;
    }

    patchTask(id: string, updates: Partial<Task>): Task{
        const task = this.getTaskById(id);
        if(!task){
            return null;
        }

        const camposLiberados = ['titulo', 'descricao', 'status']

        Object.keys(updates).forEach((key) => {
            if(camposLiberados.includes(key)){
                task[key] = updates[key]
            }
        });

    }

   


}

// find -> usamos para pesquisar algo que é único
// === estritamente igual: procurando o que está vindo e qual seu tipo.