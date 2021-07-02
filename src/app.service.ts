import { Injectable } from '@nestjs/common';
import { UserEntity } from './db/entities/user.entity';

@Injectable()
export class AppService {
  getHello(): { name: string } {
    // UserEntity.findOne();
    return { name: 'Hello World!' };
  }
}
