export interface IProduct {
  id?: number;
  orderId: number | string;
  description: string;
  amount: number | string;
  price: number | string;
  discount: number | string;
  value: number | string;
}

export interface ISimpleInvoice
  extends Pick<IProduct, "id" | "orderId" | "description" | "amount" | "discount" | "value" | "price"> {}
