import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { ProductController } from 'src/products/product.controller';

@Module({
  imports: [UserModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController, ProductController],
})
export class AuthModule {}
