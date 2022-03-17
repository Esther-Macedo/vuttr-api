import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/auth/controller/auth.controller';
import { Users } from 'src/entity/users.entity';
import { UserService } from 'src/services/users.service';
@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}