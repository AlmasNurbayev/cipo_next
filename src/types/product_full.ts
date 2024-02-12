import { IimageRegistry } from './image_registry';
import { IproductGroup } from './product_group';
import { IvidModeli } from './vid_modeli';

export interface IproductFull {
  id: number;
  id_1c: string;
  name: string;
  name_1c: string;
  base_ed: string;
  artikul: string;
  material_up: string | null;
  material_inside: string | null;
  material_podoshva: string | null;
  main_color: string | null;
  description: string | null;
  sex: string | null;
  product_folder: string;
  public_web: boolean;
  product_group_id: number;
  product_vid_id: number;
  vid_modeli_id: number;
  registrator_id: number;
  brend_id: number | null;
  country_id: number | null;
  create_date: string;
  changed_date: string;
  product_group: IproductGroup;
  vid_modeli: IvidModeli;
  image_registry: IimageRegistry[];
  qnt_price_registry: IqntPriceRegistry[];
  qnt_price_registry_group: IqntPriceRegistryGroup[];
}

interface IqntPriceRegistry {
  size_id: number;
  size_name_1c: string;
  qnt: number;
  sum: number;
  store_id: number;
}

interface IqntPriceRegistryGroup {
  size_id: number;
  size_name_1c: string;
  qnt: number;
  sum: number;
  store_id: number[];
}
