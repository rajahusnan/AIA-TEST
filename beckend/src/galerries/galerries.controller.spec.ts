import { Test, TestingModule } from '@nestjs/testing';
import { GalerriesController } from './galerries.controller';
import { GalerriesService } from './galerries.service';

describe('GalerriesController', () => {
  let controller: GalerriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalerriesController],
      providers: [GalerriesService],
    }).compile();

    controller = module.get<GalerriesController>(GalerriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
