export type cartItemType = {
  id: number | string;
  name: string;
  image: string;
  quantity?: number;
};

export type cartType = {
  loading: boolean;
  error: null | string;
  cart: cartItemType[];
};

export type actionType = {
  type: string;
  payload?: cartItemType;
};

export enum cartCases {
  GETDATA = "GETDATA",
  INCREMENTFOOD = "INCREMENTFOOD",
  REMOVEFOOD = "REMOVEFOOD",
  DECREMENTFOOD = "DECREMENTFOOD",
}
