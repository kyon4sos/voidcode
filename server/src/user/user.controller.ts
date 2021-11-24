import { Request } from 'express';
import { BaseController } from './../base/index';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController extends BaseController {
  constructor() {
    super();
    console.log('user', new Date());
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async index(@Req() req: Request) {
    const user = this.getCurrentUser(req);
    return this.ok({ user, name: 'user' });
  }
}
