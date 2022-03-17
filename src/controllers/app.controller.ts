import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Response } from 'express';
import { incomingTool } from 'src/dtos/tool.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('tools')
  async getTools(@Res() res: Response) {
    const tools = await this.appService.getTools();
    console.log(tools);
    res.json(tools);
  }

  @UseGuards(JwtAuthGuard)
  @Post('tools')
  async addTool(@Body() newtool: incomingTool, @Res() res: Response) {
    await this.appService.addTools(newtool);
    res.json(newtool);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('tools/:id')
  async deleteTool(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const deleting = await this.appService.deleteTools(id);
    if (!deleting) {
      res.send('Ops, algo deu errado').status(500);
    } else {
      res.send('Ferramenta deletada');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('tools/:tag')
  async filterTool(@Param('tag') tag: string, @Res() res: Response) {
    const filteredtools = await this.appService.filterTools(tag);

    res.json(filteredtools);
  }
}
