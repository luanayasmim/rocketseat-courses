import { GetUserMetricsUseCase } from '../get-user-metrics.js'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository.js'

export function makeGetUserMetricsUseCase() {
  const useCase = new GetUserMetricsUseCase(new PrismaCheckInsRepository())

  return useCase
}
