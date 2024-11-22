import { Get, Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { User } from "./user.entity";
import { UserService } from "./user.service";

/**
 * Controller for handling project-related HTTP requests.
 */
@ApiTags("Users Service")
@Controller("users-service")
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Retrieves a user by their wallet address.
   *
   * @param {string} wallet - The wallet address of the user to retrieve.
   * @returns {Promise<Partial<User>>} A promise that resolves to a partial user object.
   */
  @Get("/user/:wallet")
  async getUser(@Param("wallet") wallet: string): Promise<Partial<User>> {
    console.log({ wallet });
    return {};
  }

  /**
   * Registers a new user by their wallet address.
   *
   * @param {string} wallet - The wallet address of the user to register.
   * @returns {Promise<Partial<User>>} A promise that resolves to a partial user object.
   */
  @Post("/user/:wallet")
  async register(@Param("wallet") wallet: string): Promise<Partial<User>> {
    console.log({ wallet });
    return {};
  }
}
