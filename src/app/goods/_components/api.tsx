import { config } from '@/config/constants';
import { getErrorData } from '@/shared/helpers';
import { Logger } from '@/shared/logger';

export async function cipoListGoods(params: {
  [key: string]: string
}) {
  // on server
  let stringParams = '';
  for (const param in params) {
    if (params[param] !== undefined && params[param] !== '') {
      stringParams += `&${param}=${params[param]}`
    }
  }

  let url = '';
  url = config.backendUrl + '/api/products/' + (stringParams !== '' ? '?' + stringParams : '');

  const res = await fetch(url, {
    next: { tags: ['goods'], revalidate: 60 },
  });
  if (res.status === 200) {
    const data = await res.json()
    return {status: res.status, statusText: res.statusText, data: data.data, url};
  } else {
    Logger.error(getErrorData(res));
    throw new Error('не удалось получить данные ' + url);
  }
}

export async function cipoFilterList() {
  // on client
  const url = config.NEXT_PUBLIC_backendUrl + '/api/productsFilter';
  const res = await fetch(url, { next: { revalidate: 60 } }).then((res) =>
    res.json()
  );
  console.log('cipoFilterList', res);
  return res;
}
