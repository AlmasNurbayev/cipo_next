export interface IproductNew {
  product_id: number;
  product_name: string;
  sum: number;
  product_create_date: string,
  qnt_price: IqntPriceRegistry[];
  name: string;
  artikul: string;
  description: string | null;
  material_up: string | null;
  material_inside: string | null;
  material_podoshva: string | null;
  sex: string | null;
  product_group_name: string;
  vid_modeli_name: number;
  vid_modeli_id: number;
  image_registry: IshortImageRegistry[];
  image_active_path: string | null;
}

interface IqntPriceRegistry {
  size: string;
  qnt: number;
  sum: number;
  store_id: number[];
}

export interface IshortImageRegistry {
  id: number;
  name: string;
  full_name: string;
  active: boolean;
  main: boolean;
}