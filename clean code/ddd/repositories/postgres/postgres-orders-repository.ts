import { Order } from "../../domain/purchases/order";
import { OrdersRepository } from "../orders-repository";

export class PostgresOrdersRepository implements OrdersRepository {
  create(order: Order): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}