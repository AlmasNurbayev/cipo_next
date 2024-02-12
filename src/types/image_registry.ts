export interface IimageRegistry {
  id: number;
  resolution?: number | null;
  full_name: string;
  name: string;
  path: string;
  size?: number;
  operation_date: string;
  main: boolean;
  main_change_date: string;
  active: boolean;
  active_change_date: string;
  product_id: number;
  registrator_id: number;
  create_date: string;
  changed_date: string;
}
