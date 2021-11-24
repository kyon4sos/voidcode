import { Model } from 'sequelize-typescript';
import { ForbiddenException, Injectable, Req } from '@nestjs/common';
import { Request } from 'express';
import { InjectModel, SequelizeModule } from '@nestjs/sequelize';
export class JsonResult {
  code: number;
  msg: string;
  data: any;
  constructor(code: number, msg: string, data: any) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
  static ok(data: any) {
    return new JsonResult(200, 'ok', data);
  }
  static err(code: number, msg: string) {
    return new JsonResult(code, msg, null);
  }
}

export class BaseController {
  ok(data: any) {
    return JsonResult.ok(data);
  }
  err(code: number, msg: string) {
    return JsonResult.err(code, msg);
  }
  getCurrentUser(@Req() req: Request) {
    const user = req && req.user;
    if (!user) {
      throw new ForbiddenException();
    }
    return user;
  }
}
