import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { access } from "fs";
import { UserService } from "src/services/users.service";
import { authDto } from "../dto/auth.dto";


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService : JwtService,
    ){}

  async validate(username:string, password:string){
      const user = await this.userService.getUser(username);
      console.log('rodou o validate')
      if (user && user.password === password) {
        console.log('rodou o if')
          const {password, ...rest} = user
          return rest
      } else{
        return null
      }

      
  }

  async login(user:any){
    const payload = {username: user.username, sub:user.id}
    return { access_token: this.jwtService.sign(payload) }

  }
}