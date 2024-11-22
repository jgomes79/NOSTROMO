import { Module } from "@nestjs/common";

import { DatabaseModule } from "@/database/database.module";
import { userProviders } from "@/user/user.providers";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";

/**
 * Module that provides user-related services and controllers.
 */
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
