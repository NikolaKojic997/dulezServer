import { Test, TestingModule } from '@nestjs/testing';
import { SubtypeController } from './subtype.controller';

describe('Subtype Controller', () => {
  let controller: SubtypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubtypeController],
    }).compile();

    controller = module.get<SubtypeController>(SubtypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
