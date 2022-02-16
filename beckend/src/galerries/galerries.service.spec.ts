import { Test, TestingModule } from '@nestjs/testing';
import { GalerriesService } from './galerries.service';

describe('GalerriesService', () => {
  let service: GalerriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GalerriesService],
    }).compile();

    service = module.get<GalerriesService>(GalerriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
