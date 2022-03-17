import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tool } from 'src/entity/tools.entity';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tool])],
  controllers: [AppController],
  providers: [AppService],
  exports:[AppService]
})
export class ToolsModule {}