import { PostgresOrdersRepository } from './repositories/postgres/postgres-orders-repository';
import { SubmitOrder } from './use-cases/submit-order';

const submitOrder = new SubmitOrder(
  new PostgresOrdersRepository(),
)