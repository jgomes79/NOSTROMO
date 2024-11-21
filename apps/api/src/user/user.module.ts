import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from '@/user/user.providers';
import { DatabaseModule } from '@/database/database.module';

/**
 * Module that provides user-related services and controllers.
 */
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
