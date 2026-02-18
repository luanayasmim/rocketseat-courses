export class Order {
  public customerDocument: string;
  public total: number
  public createdAt: Date;

  constructor(customerDocument: string, total: number) {
    this.customerDocument = customerDocument;
    this. total = total;
    this.createdAt = new Date();
  }

}