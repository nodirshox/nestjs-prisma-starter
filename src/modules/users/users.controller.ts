import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() userDetails: CreateUserDto): Promise<User> {
    return this.userService.createUser(userDetails);
  }
}
