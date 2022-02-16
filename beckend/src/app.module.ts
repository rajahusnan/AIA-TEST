import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalerriesModule } from './galerries/galerries.module';

@Module({
  imports: [GalerriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
