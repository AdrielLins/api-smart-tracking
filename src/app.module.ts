import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { JogadoresService } from './jogadores/jogadores.service';
import { JogadoresController } from './jogadores/jogadores.controller';

@Module({
  imports: [JogadoresModule],
  controllers: [JogadoresController],
  providers: [JogadoresService],
})
export class AppModule { }
