import { Injectable } from '@nestjs/common';

// lógica
@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá, bele! ';
  }
}
