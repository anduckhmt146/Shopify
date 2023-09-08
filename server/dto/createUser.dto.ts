export enum Role {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}

export interface CreateUserDto {
  username: string;
  password?: string;
  name: string;
  email?: string;
  phone: string;
  role: Role;
}
