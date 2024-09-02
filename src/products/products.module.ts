import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsSchema } from 'src/models/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Products', schema: ProductsSchema }]),
  ],
  providers: [ProductsService],
  controllers: [],
  exports: [ProductsService],
})
export class ProductsModule {}
