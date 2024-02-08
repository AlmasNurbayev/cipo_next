import React, { useDeferredValue, useEffect, useState } from 'react';
import PostServer from './_components/PostServer';
import FilterClient from './_components/FilterClient';

async function apiDummyGet({ q, limit }: { q?: string; limit?: string }) {
  let params = '';
  if (q) params += `&q=${q}`;
  if (limit) params += `&limit=${limit}`;

  let url = '';
  if (q) {
    // почему-то поиск по тексту требует дополнительного сегмента search
    url = 'https://dummyjson.com/products/search?' + (params ? params : '');
  } else {
    // а пагинация про пути без search
    url = 'https://dummyjson.com/products/' + (params ? '?' + params : '');
  }

  const res = await fetch(url, { next: { revalidate: 60 } }).then((res) =>
    res.json()
  );
  return res.products;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string; limit?: string; skip?: string };
}) {
  console.log(searchParams);
  if (!searchParams.limit) searchParams.limit = '6'; // default

  const posts = await apiDummyGet({
    q: searchParams.q ? searchParams.q : undefined,
    limit: searchParams.limit ? searchParams.limit : undefined,
  });

  return (
    <div className="posts_mix">
      <div className="left">
        <h1>Список постов:</h1>
        {posts.map((item: any) => (
          <PostServer key={item.id} item={item} />
        ))}
      </div>
      <div className="rigth">
        <h1>Фильтры на клиенте</h1>
        <FilterClient />
      </div>
    </div>
  );
}
