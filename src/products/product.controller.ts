import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';

import { ProductsService } from './products.service';
import { ProductsDTO } from './products.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductsService) {}

  @Post('add')
  //@UseGuards(AuthGuard('jwt'))
  async add(@Body() productDTO: ProductsDTO) {
    const product = await this.productService.create(productDTO);

    return { product };
  }
}
