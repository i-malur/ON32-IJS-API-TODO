import { Body, Controller, HttpStatus, Get, Post, HttpException, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';


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
                message: 'Todas as Tasks retornadas com sucesso',
            }
        }
}
