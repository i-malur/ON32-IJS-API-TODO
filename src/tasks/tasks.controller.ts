import { Body, Controller, HttpStatus, Get, Post, HttpException, Param, Delete, Put, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';


@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService){}

    @Post("criar")
    createTask(@Body() body: {titulo: string, descricao: string}){
        const task = this.taskService.createTask(body.titulo, body.descricao)
        return {
            statusCode: HttpStatus.CREATED,
            mensage: 'Task criada com sucesso',
            data: task
        }
    }

    @Get()
    getAll(){
        const tasks = this.taskService.getAllTasks();

        return {
            statusCode: HttpStatus.OK,
            message: 'Todas as Tasks retornadas com sucesso',
            data: tasks
        }
    }

    @Get(':id')
    getById(@Param('id') id: string){
        const task = this.taskService.getTaskById(id);
        if(!task){
            throw new HttpException('Task não encontrada', HttpStatus.NOT_FOUND)
        }

        return{
            statusCode: HttpStatus.OK,
            message: 'Todas as Tasks retornadas com sucesso',
            data: task
        }
    }

    @Delete(':id')
    deleteById(@Param('id') id:string){
            this.taskService.deleteTaskById(id);
            return{
                statusCode: HttpStatus.OK,
                message: 'Task excluída com sucesso',
            }
        }
    
    @Put(':id')
    updateTask(
        @Param('id')  id:string,
        @Body() body: {titulo:string, descricao:string, status: 'ABERTA' | 'FEITA'},
    ){
        const task = this.taskService.updateTask(id, body.titulo, body.descricao, body.status)

        if(!task){
            throw new HttpException('Task não encontrada', HttpStatus.NOT_FOUND)
        }
        return{
            statusCode: HttpStatus.OK,
            message: 'Task editada com sucesso',
            data: task
        }

    }

    @Patch('/edit/:id')
    patchTask(
        @Param('id') id:string,
        @Query() updates: Partial<Task>
    ){
        const task = this.taskService.patchTask(id, updates)
        return{
            statusCode: HttpStatus.OK,
            message: 'Task editada com sucesso',
            data: task
        }

    }
}
