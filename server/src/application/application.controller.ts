import { JsonResult } from './../base/index';
import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class ApplicationController {
  @Get()
  async index() {
    return JsonResult.ok(null);
  }
}
