import { Inject, Injectable } from "@nestjs/common";

import { User } from "@/user/user.entity";

@Injectable()
export class UserService {
  constructor(
    @Inject("UserRepository")
    private userRepository: typeof User,
  ) {}

  /**
   * Retrieves a User by its ID.
   *
   * @param {string} id - The ID of the project to retrieve.
   * @returns {Promise<User>} A promise that resolves to the user with the specified ID.
   */
  async getById(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
