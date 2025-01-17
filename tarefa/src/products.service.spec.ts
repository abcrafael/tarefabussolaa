import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './products.service';

describe('ProductsService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should defined', () => {
    expect(service).toBeDefined();
  });
});