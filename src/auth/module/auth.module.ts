import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/users.module';
import { AuthController } from '../controller/auth.controller';
import { AuthService } from '../services/auth.service';
import { LocalStrategy } from '../strategy/local.strategy';
import{PassportModule} from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../strategy/jwt.strategy';
import { jwtConstant } from '../constant/constatnts';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
    secret:jwtConstant.secret,
    signOptions:{expiresIn:'100s'}
  })],
  providers: [LocalStrategy, AuthService,JwtStrategy],
  controllers:[AuthController],
  exports:[LocalStrategy, AuthService]
})
export class AuthModule {}