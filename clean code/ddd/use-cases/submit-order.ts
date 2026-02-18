import { OrdersRepository } from './../repositories/orders-repository';
import { Order } from "../domain/purchases/order";

interface SubmitOrderRequest {
  customerDocument: string;
  total: number;
}

export class SubmitOrder {
  constructor(
    private ordersRepository: OrdersRepository
  ) {}

  async execute({customerDocument, total}:SubmitOrderRequest) {
    const order = new Order(customerDocument, total);

    await this.ordersRepository.create(order);
  }
}