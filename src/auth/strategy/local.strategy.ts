import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport'
import {Strategy} from  'passport-local'
import { authDto } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService){
        super(); //olhar a dom=cumentação para fazer algo que presta aqui
    }

    async validate(username:string, password:string): Promise<any> {
        const maybeuser = await this.authService.validate(username, password)
        
        if(!maybeuser){
            throw new UnauthorizedException()
        }
        
        return maybeuser;
        
    }

}