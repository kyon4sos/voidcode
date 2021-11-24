import { JsonResult } from './../base/index';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from './dto';
import { AuthService } from './auth.service';

@ApiTags('用户登录注册')
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({
    summary: '登录',
  })
  @Post('/login')
  async login(@Body() login: LoginDto): Promise<JsonResult> {
    const user = await this.authService.login(login);
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
    const user = await this.authService.register(register);
    if (user) {
      return JsonResult.ok(user);
    }
  }
}
