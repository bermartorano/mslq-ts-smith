export type Product = {
  id: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type User = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type UserToLogin = {
  username: string,
  password: string,
};
