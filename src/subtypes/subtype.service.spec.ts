import { Test, TestingModule } from '@nestjs/testing';
import { SubtypeService } from './subtype.service';

describe('SubtypeService', () => {
  let service: SubtypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubtypeService],
    }).compile();

    service = module.get<SubtypeService>(SubtypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
