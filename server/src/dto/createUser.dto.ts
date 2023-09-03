export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export interface CreateUserDto {
  USERNAME: string;
  PASSWORD: string;
  NAME: string;
  Phone_Number: string;
  ROLE: Role.ADMIN | Role.USER;
}
