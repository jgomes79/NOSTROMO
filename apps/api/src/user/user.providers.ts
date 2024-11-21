import { User } from '@/user/user.entity';

/**
 * Provides UserRepository with User model.
 */
export const userProviders = [
  {
    provide: 'UserRepository',
    useValue: User,
  },
];
