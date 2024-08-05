import { Test, TestingModule } from '@nestjs/testing';
import { ChaingptController } from './chaingpt.controller';
import { ChaingptService } from './chaingpt.service';

describe('ChaingptController', () => {
  let controller: ChaingptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChaingptController],
      providers: [ChaingptService],
    }).compile();

    controller = module.get<ChaingptController>(ChaingptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
