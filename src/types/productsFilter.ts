import { IproductGroup } from './product_group';
import { IvidModeli } from './vid_modeli';

export interface IproductsFilter {
  size: { id: number; name_1c: string }[];
  product_group: IproductGroup[];
  vid_modeli: IvidModeli[];
  brend: { id: number; name_1c: string }[];
  store: { id: number; name_1c: string }[];
}
