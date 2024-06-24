import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductsDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;
  @Prop()
  value: number;
  @Prop()
  quantity: number;
}

export const ProductsSchema = SchemaFactory.createForClass(Product);