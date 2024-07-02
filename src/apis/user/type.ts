export type UsersResponse = {
  users: UserType[];
};

export type UserType = {
  id: number;
  name: string;
  gcn: string;
  coin_balance: number;
};

export type GrantCoinRequest = {
  user_ids: number[];
  amount: number;
};
