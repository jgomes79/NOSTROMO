import { Get, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { User } from './user.entity';
import { UserService } from './user.service';

/**
 * Controller for handling project-related HTTP requests.
 */
@ApiTags('Users Service')
@Controller('users-service')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getById(): Promise<Partial<User>> {
    return {};
  }
}
