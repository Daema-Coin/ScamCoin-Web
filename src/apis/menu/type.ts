export type MenuResponse = {
  menu: MenuType[];
};

export type MenuType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  sell_count: number;
  is_open: boolean;
};

export type CreateMenuRequest = {
  name: string;
  description: string;
  price: number;
  image_url: string;
};
