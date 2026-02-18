// SOLID

/**
 * SRP - single responsibility principle
 * OCP - open-closed principle
 * LSP - liskov substitution principle
 * ISP - interface segregation principle
 * DIP - dependency inversion principle
 */

interface Card {
  number: number;
  cvv: number;
  expiration: number;
}

interface PaymentMethod {
  getDiscountAmount: (amount: number) => number;
}

// billet, credit or debit
class Billet implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.1;
  }
}

class Credit implements PaymentMethod, Card {
  private installments: number;
  number: number;
  cvv: number;
  expiration: number;

  constructor(installments: number, number: number, cvv: number, expiration: number) {
    this.installments = installments;
    this.number = number;
    this.cvv = cvv;
    this.expiration = expiration;
  }

  getDiscountAmount(amount: number): number {
    if (this.installments === 1)
      return amount * 0.05;

    if (this.installments <= 6)
      return amount * 0.02;

    return 0;
  }
}

class Debit implements PaymentMethod, Card {
  number: number;
  cvv: number;
  expiration: number;

  constructor(number: number, cvv: number, expiration: number) {
    this.number = number;
    this.cvv = cvv;
    this.expiration = expiration;
  }

  getDiscountAmount(amount: number): number {
    return amount * 0.05;
  }
}

class Pix implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.2;
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod
  }
  public execute(amount: number) {
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(
  new Credit(5, 1234567890, 123, 2020)
)

calculateOrderDiscount.execute(2000)

class SubmitOrderInvoice {
  public execute() {
    //emissão da nota
  }
}

class CreateOrder {
  public execute() {
    // CalculateOrderDiscount
    // SubmitOrderInvoice
  }
}