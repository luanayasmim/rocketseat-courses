import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository.js'
import { GetUserProfileUseCase } from '../get-user-profile.js'

export function makeGetUserProfileUseCase() {
  const useCase = new GetUserProfileUseCase(new PrismaUsersRepository())

  return useCase
}
