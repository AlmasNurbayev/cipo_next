import { config } from '@/config/constants';
import { handleResponse } from './handle.api';
import { Inews } from '@/types/news';
import { Istore } from '@/types/store';
import { IproductNew } from '@/types/productsNews';
import { IproductsFilter } from '@/types/productsFilter';
import { IproductList } from '@/types/product_list';
import { IproductFull } from '@/types/product_full';

export async function cipoListGoods(params?: {
  [key: string]: string | string[] | undefined;
}) {
  // on server
  // Logger.info(params);
  let stringParams = '';
  for (const param in params) {
    if (params[param] !== undefined && params[param] !== '') {
      stringParams += `&${param}=${params[param]}`;
    }
  }
  const url =
    config.backendUrl +
    '/api/products/' +
    (stringParams !== '' ? '?' + stringParams : '');
  // Logger.info(url);
  const res = await fetch(url, {
    next: { tags: ['goods'], revalidate: 0 },
  });
  return await handleResponse<IproductList>(res, url);
}

export async function cipoFilterList() {
  // on server
  const url = config.NEXT_PUBLIC_frontUrl + '/api/productsFilter';
  const res = await fetch(url, { cache: 'no-store' });
  return await handleResponse<IproductsFilter>(res, url);
}

export async function cipoListStores() {
  // on server
  const url = config.backendUrl + '/api/stores';
  const res = await fetch(url, { next: { revalidate: 60 } });
  return await handleResponse<Istore[]>(res, url);
}

export async function cipoListNews() {
  // on server
  const url = config.backendUrl + '/api/news?news=5';
  // Logger.info(url);
  const res = await fetch(url, { next: { revalidate: 60 } });
  return await handleResponse<Inews[]>(res, url);
}

export async function cipoGetNews(id: string) {
  // on server
  const url = config.backendUrl + '/api/newsID?id=' + id;
  const res = await fetch(url, { next: { revalidate: 60 } });
  return await handleResponse<Inews>(res, url);
}

export async function cipoGetProduct(id: string) {
  // on server
  const url = config.backendUrl + '/api/product?id=' + id;
  const res = await fetch(url, { next: { revalidate: 60 } });
  return await handleResponse<IproductFull>(res, url);
}

export async function cipoProductNews() {
  // on server
  const url = config.backendUrl + '/api/productsNews?news=10';
  const res = await fetch(url, { next: { revalidate: 60 } });
  // бэкенд отдает не точное кол-во продуктов, а после группировки.
  // поэтому запрашиваем больше и отдаем сколько надо
  // TODO - на бэкенде изменить алгоритм
  const manyProducts = await handleResponse<IproductNew[]>(res, url);
  manyProducts.data = manyProducts.data.slice(0, 6);
  return manyProducts;
}
