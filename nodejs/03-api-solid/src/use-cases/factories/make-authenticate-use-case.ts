import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository.js'
import { AuthenticateUseCase } from '../authenticate.js'

export function makeAuthenticateUseCase() {
  const useCase = new AuthenticateUseCase(new PrismaUsersRepository())

  return useCase
}
