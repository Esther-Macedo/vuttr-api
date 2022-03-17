import { Injectable } from "@nestjs/common";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { jwtConstant } from "../constant/constatnts";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey:jwtConstant.secret
            
        });
    }

    async validate(payload: any) {
        return{ id:payload.sub, username:payload.username};
    }
}