import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/types/user';
import { ProductsDTO } from './products.dto';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from 'src/auth/login.dto';
import { Payload } from 'src/types/payload';
import { Products } from 'src/types/products';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Products') private productModel: Model<Products>) {}

  async create(AddProductDTO: ProductsDTO) {
    const { name } = AddProductDTO;
    const product = await this.productModel.findOne({ name });
    if (product) {
      throw new HttpException('Product already exists', HttpStatus.BAD_REQUEST);
    }
    const createdProduct = new this.productModel(AddProductDTO);

    await createdProduct.save();
    return createdProduct;
  }
}
