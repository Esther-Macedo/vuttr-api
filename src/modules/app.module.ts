import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { Tool } from 'src/entity/tools.entity';
import { Users } from 'src/entity/users.entity';
import { AuthModule } from '../auth/module/auth.module';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ToolsModule } from './tools.module';
import { UserModule } from './users.module';

//note to self: colocar variaveis de ambiente.

@Module({
  imports: [TypeOrmModule.forRoot(config),
  ConfigModule.forRoot({
    isGlobal:true
  }),
  ToolsModule, UserModule, AuthModule],

})
export class AppModule {}
