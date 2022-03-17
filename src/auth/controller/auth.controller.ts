import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { authDto } from '../dto/auth.dto';
import { UserService } from 'src/services/users.service';
import { AuthService } from '../services/auth.service';
@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @Post('singup')
  signup(@Body() user: authDto, @Res() res: Response) {
    this.usersService.addUser(user);
    res.send('Usuario criado');
  }
}
