import * as bcrypt from 'bcrypt';
import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { LoginDto, LoginRespDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(register: RegisterDto): Promise<LoginRespDto> {
    const user = await this.userService.create(register);
    const payload = { sub: user.id };
    const token = this.jwtService.sign(payload);
    const loginResp: LoginRespDto = {
      username: user.username,
      token,
    };
    return loginResp;
  }

  async login(loginInfo: LoginDto): Promise<LoginRespDto> {
    const user = await this.userService.findByName(loginInfo.username);
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
    const payload = { sub: user.id };
    const token = this.jwtService.sign(payload);
    const loginResp: LoginRespDto = {
      username: user.username,
      token,
    };
    return loginResp;
  }
}
