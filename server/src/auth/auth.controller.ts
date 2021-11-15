import { JsonResult } from './../base/index';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto';

@ApiTags('登录')
@Controller()
export class AuthController {
  @ApiOperation({
    summary: '登录',
  })
  @Post('/login')
  async login(@Body() login: LoginDto): Promise<JsonResult> {
    return JsonResult.err(40001, '请登录');
  }
}
