import { UserService } from './../user/user.service';
import { JsonResult } from './../base/index';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from './dto';

@ApiTags('登录')
@Controller()
export class AuthController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({
    summary: '登录',
  })
  @Post('/login')
  async login(@Body() login: LoginDto): Promise<JsonResult> {
    const user = await this.userService.login(login);
    if (user) {
      return JsonResult.ok(user);
    }
    return JsonResult.err(40001, '用户名密码错误');
  }
  @ApiOperation({
    summary: '注册',
  })
  @Post('/register')
  async register(@Body() register: RegisterDto): Promise<JsonResult> {
    const user = await this.userService.create(register);
    if (user) {
      return JsonResult.ok(user);
    }
  }
}
