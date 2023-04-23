import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({ description: 'Email', example: 'user@mail.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Name' })
  name: string;
}
