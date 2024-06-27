import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';

// módulo principal
@Module({
  imports: [],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}

/* Estrutura de módulo
@Module({}) => Decorator, indica que o arquivo se trata de um objeto de configuração, 
que define a estrutura de módulo. 
Decorator => Metadados que indicam o comportamento da estrutura.
O Decorator desse arquivo indica um módulo.

imports: [] => Se necessário, se faz a importação de outros módulos.
controllers: [AppController] => Lista de controllers - controladores usados na aplicação. 
Controladores: responsáveis por indicar a disponibilidade das rotas.
providers: [AppService] => Provedores registrados nos módulos, injeção dos componentes de services.
Provedores = services, onde estão a regra de negócio.
*/