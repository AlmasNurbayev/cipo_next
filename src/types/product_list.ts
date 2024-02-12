export interface IproductList {
  data: IproductOnce[];
  full_count: number,
  current_count: number
}

interface IproductOnce {
  product_id: number;
  product_create_date: string;
  sum: number;
  product_group_id: number;
  product_name: string;
  qnt_price: Iqnt_price[];
  artikul: string;
  name: string;
  description: string | null;
  material_podoshva: string | null;
  material_up: string | null;
  material_inside: string | null;
  sex: string | null;
  product_group_name: string;
  vid_modeli_name: string | null;
  vid_modeli_id: number;
  image_registry: Iimage[];
  image_active_path: string;
  create_date: string;
}

interface Iqnt_price {
  size: string;
  sum: number;
  qnt: number;
  store_id: number[];
}

interface Iimage {
  id: number;
  name: string;
  active: boolean;
  main: boolean;
  full_name: string;
}
