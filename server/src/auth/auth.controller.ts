import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto';

@Controller()
export class AuthController {
  @Post('/login')
  async login(@Body() login: LoginDto) {
    return { ok: 200 };
  }
}
