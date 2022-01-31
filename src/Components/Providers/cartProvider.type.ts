export type cartItemType = {
    id: number | string;
    name: string;
    image: string;
  };
  
  export type cartType = {
    loading: boolean;
    error: null | string;
    cart: cartItemType[];
  };
  
  export type AddType = {
    type: string;
    payload: cartItemType;
  };
  
  export type incDecType = {
    type: string;
    payload: number | string;
  };
  
export type actionType = AddType | incDecType;  