import { Injectable } from '@nestjs/common';
import { CreateDto } from './products/DTO/create.dto';
import { UpdateDto } from './products/DTO/update.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products/schemas/products.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}
  async create(createDto: CreateDto) {
    const createProduct = await this.productModel.create(createDto);
    return createProduct;
  }
  remove(id: number) {
    const deletedProduct = this.productModel.deleteOne({ id: id });
    return deletedProduct;
  }
  async findAll() {
    const allProduct = await  this.productModel.find();
    return allProduct;
  }
  async findOne(id: number) {
    const findedProduct = await this.productModel.findById(id);
    return findedProduct;
  }
  async update(id: number, updateDto: UpdateDto) {
    const newProduct = await this.productModel.findByIdAndUpdate(id);
    return newProduct;
  }

}