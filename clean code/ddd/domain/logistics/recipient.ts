export class Recipient {
  public street: string;
  public number: number;
  public zipcode: string;

  constructor(street: string, number: number, zipcode: string) {
    this.street = street;
    this.number = number;
    this.zipcode = zipcode;
  }
}