import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository.js'
import { CreateGymUseCase } from '../create-gym.js'

export function makeCreateGymUseCase() {
  const useCase = new CreateGymUseCase(new PrismaGymsRepository())

  return useCase
}
