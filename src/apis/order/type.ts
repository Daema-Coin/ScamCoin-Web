export type OrderListResponse = {
  orders: OrderListType[];
};

export type OrderListType = {
  order_id: number;
  orderer_name: string;
  request: string;
  menu_list: MenuListType[];
};

export type MenuListType = {
  menu: string;
  amount: number;
  price: number;
};

export type OrderEnum = "done" | "request" | "cancel";
