export interface CreateOrderDto {
  userID: string;
  name: string;
  paymentMethod: string;
  note?: string;
  phone: string;
  address: string;
  totalCost: number;
  totalProduct: number;
}
