import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@in-mood4-music/users';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    password: string
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordValid = await bcrypt.compare(password, user.passwordHash);
    if (!passwordValid) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(
    username: string,
    email: string,
    password: string
  ): Promise<{ id: number; username: string }> {
    const existingUser = await this.usersService.findOne(username);
    if (existingUser) {
      throw new UnauthorizedException('Username already taken');
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await this.usersService.createUser({
      username,
      email,
      passwordHash,
    });
    return { id: newUser.id, username: newUser.username };
  }
}
