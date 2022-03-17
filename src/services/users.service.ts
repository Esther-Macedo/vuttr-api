import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authUserInterface } from 'src/auth/interfaces/auth-user.inerface';
import { Users } from 'src/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  @InjectRepository(Users) private userRepo: Repository<Users>;

  async getUser(username: string) {
    console.log('rodou o service');
    console.log(username);
    const user = await this.userRepo.findOne({ where: { username } });
    console.log(user);
    return user;
  }

  async addUser({ name, username, password }: authUserInterface) {
    try {
      const toadd = this.userRepo.create({ name, username, password });
      await this.userRepo.save(toadd);
    } catch (e) {
      throw new Error('Ops');
    }
  }
}
