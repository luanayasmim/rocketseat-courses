import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository.js'
import { ValidateCheckInUseCase } from '../validate-check-in.js'

export function makeValidateCheckInUseCase() {
  const useCase = new ValidateCheckInUseCase(new PrismaCheckInsRepository())

  return useCase
}
