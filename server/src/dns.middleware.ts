import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

export function DnsMiddleware(req, res, next) {
  const { hostname } = req as Request;

  console.log('dns================', hostname);
  next();
}
