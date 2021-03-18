import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeServiceService } from './coffee-service.service';

describe('CoffeeServiceService', () => {
  let service: CoffeeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeServiceService],
    }).compile();

    service = module.get<CoffeeServiceService>(CoffeeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
