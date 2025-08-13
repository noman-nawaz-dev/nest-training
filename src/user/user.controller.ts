import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard';
import { GetUser } from './decorator';
import { User } from '@prisma/client';

@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
