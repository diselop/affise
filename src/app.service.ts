import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { User } from './entity/Users';
import { Performance } from './entity/Performance';

@Injectable()
export class AppService {
  constructor(
    // @InjectRepository(User)
    // private usersRepository: Repository<User>,
    @InjectRepository(Performance)
    private performaceRepository: Repository<Performance>,
  ) {}
  async findResult() {
    const result = await this.performaceRepository.find();

    return result;
  }
  // getHello(): string {
  //   return 'Hello World!';
  // }

}
