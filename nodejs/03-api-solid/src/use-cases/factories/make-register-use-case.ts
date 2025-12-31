import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository.js'
import { RegisterUseCase } from '../register.js'

export function makeRegisterUseCase() {
  const useCase = new RegisterUseCase(new PrismaUsersRepository())

  return useCase
}
