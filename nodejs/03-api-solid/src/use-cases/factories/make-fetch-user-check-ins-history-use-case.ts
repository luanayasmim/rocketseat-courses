import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository.js'
import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history.js'

export function makeFetchUserCheckInsHistoryUseCase() {
  const useCase = new FetchUserCheckInsHistoryUseCase(
    new PrismaCheckInsRepository(),
  )

  return useCase
}
