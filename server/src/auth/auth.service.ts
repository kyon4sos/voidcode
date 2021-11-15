import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validate(username: string, password: string): Promise<any> {
    const user = await this.userService.findByName(username);

    if (user && user.password == password) {
      return user;
    }
    return null;
  }
}
