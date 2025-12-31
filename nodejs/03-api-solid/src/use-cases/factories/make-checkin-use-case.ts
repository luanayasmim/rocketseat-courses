import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository.js'
import { CheckInUseCase } from '../check-in.js'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository.js'

export function makeCheckInUseCase() {
  const useCase = new CheckInUseCase(
    new PrismaCheckInsRepository(),
    new PrismaGymsRepository(),
  )

  return useCase
}
