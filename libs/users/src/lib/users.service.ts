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

  async findOne(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async createUser(data: {
    username: string;
    email: string;
    passwordHash: string;
  }) {
    return this.prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        passwordHash: data.passwordHash,
      },
    });
  }
}
