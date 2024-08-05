import { Test, TestingModule } from '@nestjs/testing';
import { ChaingptService } from './chaingpt.service';

describe('ChaingptService', () => {
  let service: ChaingptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChaingptService],
    }).compile();

    service = module.get<ChaingptService>(ChaingptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
