import { Test, TestingModule } from '@nestjs/testing';
import { PeosonController } from './peoson.controller';
import { PeosonService } from './peoson.service';

describe('PeosonController', () => {
  let controller: PeosonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeosonController],
      providers: [PeosonService],
    }).compile();

    controller = module.get<PeosonController>(PeosonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
