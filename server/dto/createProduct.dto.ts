export enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

export interface CreateProductDto {
  code: string;
  name: string;
  category: string;
  price: string;
  sale: string;
  material: string;
  description: string;
  image: string[];
  size: Size[];
  color: string[];
}
