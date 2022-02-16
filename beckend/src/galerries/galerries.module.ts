import { Module,HttpModule } from '@nestjs/common';
import { GalerriesService } from './galerries.service';
import { GalerriesController } from './galerries.controller';

@Module({
  imports: [HttpModule],
  controllers: [GalerriesController],
  providers: [GalerriesService]
})
export class GalerriesModule {}
