import { Test, TestingModule } from '@nestjs/testing';
import { PeosonService } from './peoson.service';

describe('PeosonService', () => {
  let service: PeosonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeosonService],
    }).compile();

    service = module.get<PeosonService>(PeosonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
