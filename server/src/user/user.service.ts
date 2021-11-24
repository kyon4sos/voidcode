import * as bcrypt from 'bcrypt';
import { Injectable, HttpException } from '@nestjs/common';
import { LoginDto, LoginRespDto, RegisterDto } from './../auth/dto/index';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';

const saltRounds = 10;

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

  async create(userInfo: RegisterDto): Promise<User> {
    let user = await this.findByName(userInfo.username);
    if (user) {
      throw new HttpException('用户名已注册', 400);
    }
    user = this.userModel.build();
    userInfo.password = await bcrypt.hash(userInfo.password, saltRounds);
    user = Object.assign(user, userInfo);
    await user.save();
    return user;
  }
  async removeById(id: string): Promise<void> {
    const user = await this.findById(id);
    await user.destroy();
  }

  async login(loginInfo: LoginDto): Promise<LoginRespDto> | null {
    const user = await this.findByName(loginInfo.username);
    if (!user) {
      throw new HttpException('用户名或密码错误', 400);
    }
    const match = await bcrypt.compare(loginInfo.password, user.password);
    if (!match) {
      throw new HttpException('用户名或密码错误', 400);
    }
    if (user.isLock) {
      throw new HttpException('user lock', 400);
    }
    if (!user.isActive) {
      throw new HttpException('user is not active', 400);
    }
    const loginResp: LoginRespDto = {
      username: user.username,
      token: '',
    };
    return loginResp;
  }
}
