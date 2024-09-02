import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { ProductController } from './products/product.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    UserModule,
    ProductsModule,
    AuthModule,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
