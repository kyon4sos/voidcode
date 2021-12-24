import { UserService } from './user.service';
import { Request } from 'express';
import { BaseController } from './../base/index';
import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('user')
export class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async index() {
    const res = await this.userService.findAll();
    return this.ok(res);
  }
}
