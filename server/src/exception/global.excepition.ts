import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  BadRequestException,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    console.log(exception);
    if (exception instanceof IntersectionObserver) {
    }
    if (exception instanceof BadRequestException) {
      const badreq = (exception as BadRequestException).getResponse();
      response.status(status).json({
        code: status,
        msg: badreq['message'].toString(),
        timestamp: new Date().toISOString(),
        path: request.url,
      });
      return;
    }
    if (exception instanceof ForbiddenException) {
      response.status(200).json({
        code: status,
        msg: '未授权',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
      return;
    }
    if (exception instanceof UnauthorizedException) {
      response.status(200).json({
        code: status,
        msg: '请登录',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
      return;
    }
    response.status(status).json({
      code: status,
      msg: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
