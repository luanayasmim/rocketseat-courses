import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository.js'
import { SearchGymsUseCase } from '../search-gyms.js'

export function makeSearchGymsUseCase() {
  const useCase = new SearchGymsUseCase(new PrismaGymsRepository())

  return useCase
}
