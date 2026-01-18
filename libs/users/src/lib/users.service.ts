import { Injectable } from '@nestjs/common';
import { PrismaService } from '@in-mood4-music/prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
      },
    });
  }
}
