export interface Istore {
  id: number;
  id_1c: string;
  name_1c: string;
  address: string;
  link_2gis?: string;
  phone: string;
  city: string;
  image_path: string;
  public: boolean;
  working_hours?: {
    d01: string;
    d02: string;
    d03: string;
    d04: string;
    d05: string;
    d06: string;
    d07: string;
    [key: string]: string; 
  };
  yandex_widget_url?: string;
  doublegis_widget_url?: string;
  registrator_id: number;
  create_date: string;
  changed_date: string;
}
