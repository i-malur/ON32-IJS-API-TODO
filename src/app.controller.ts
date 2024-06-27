import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// rotas no controlador
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //definindo rota
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


