import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/services';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(userDetails: CreateUserDto): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: userDetails.email },
    });
    if (existingUser) {
      throw new HttpException('USER_EXISTS', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.user.create({ data: userDetails });
  }
}
