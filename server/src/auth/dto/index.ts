import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  username: string;
  @ApiProperty()
  @IsNotEmpty({
    message: '密码不能为空',
  })
  password: string;
}

export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  username: string;
  @ApiProperty()
  @IsNotEmpty({
    message: '密码不能为空',
  })
  password: string;
}

export class LoginRespDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  token: string;
}
