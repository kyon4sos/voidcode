import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { AuthModule, passportModule } from './auth/auth.module';
import { GlobalExceptionFilter } from './exception/global.excepition';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    passportModule,
    UserModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'demo',
      models: [User],
      synchronize: true,
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
