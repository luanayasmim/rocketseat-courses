import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository.js'
import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms.js'

export function makeFetchNearbyGymsUseCase() {
  const useCase = new FetchNearbyGymsUseCase(new PrismaGymsRepository())

  return useCase
}
