export type cartItemType = {
    id: number | string;
    name: string;
    image: string;
    quantity?: number;
  };
  
  export type cartType = {
    loading: boolean;
    error: null | string;
    cart: any[];
  };
  
  export type addType = {
    type: string;
    payload: cartItemType;
  };
  
  export type incDecType = {
    type: string;
    payload: number | string;
  };
  
export type actionType = {
    type: string,
    payload?: any
};  

export enum cartCases { GETDATA = "GETDATA" , ADDFOOD = "ADDFOOD", INCREMENTFOOD = "INCREMENTFOOD" }