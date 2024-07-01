import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    deleteTaskById(id: string) {
        throw new Error('Method not implemented.');
    }
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

    deleteById(id: string): void{
        let listaDeTarefas:Task[] = [];
        listaDeTarefas = this.tasks.filter((task) => task.id !== id)
        this.tasks = listaDeTarefas
    }

   


}

// find -> usamos para pesquisar algo que é único
// === estritamente igual: procurando o que está vindo e qual seu tipo.