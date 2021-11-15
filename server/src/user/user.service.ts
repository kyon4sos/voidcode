import { JsonResult } from './../base/index';
import { LoginDto, RegisterDto } from './../auth/dto/index';
import { User } from './user.model';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findOne({
      where: { id },
    });
  }

  async findByName(username: string): Promise<User> {
    return this.userModel.findOne({
      where: { username },
    });
  }

  async create(userInfo: RegisterDto): Promise<boolean> {
    let user = await this.findByName(userInfo.username);
    if (user) {
      throw new HttpException('用户名已注册', 400);
    }
    user = this.userModel.build();
    user = Object.assign(user, userInfo);
    user.save();
    return true;
  }
  async removeById(id: string): Promise<void> {
    const user = await this.findById(id);
    await user.destroy();
  }

  async login(loginInfo: LoginDto): Promise<User> | null {
    const user = await this.findByName(loginInfo.username);
    if (!user) {
      throw new HttpException('用户名或密码错误', 400);
    }
    if (user.password != loginInfo.password) {
      throw new HttpException('用户名或密码错误', 400);
    }
    if (user.isActive && !user.isLock) {
      return user;
    }
    if (user.isLock) {
      throw new HttpException('user lock', 400);
    }
    if (!user.isActive) {
      throw new HttpException('user is not active', 400);
    }

    return null;
  }
}
