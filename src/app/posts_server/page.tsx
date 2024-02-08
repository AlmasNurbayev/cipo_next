
import React, { useDeferredValue, useEffect, useState } from 'react';
import PostServer from './_components/PostServer';

async function apiDummyGet({ q, limit }: { q?: string, limit?: string }) {
  let params = '';
  if (q) params += `&q=${q}`; 
  if (limit) params += `&limit=${limit}`; 

  let url = '';
  if (q) {
    // почему-то поиск по тексту требует дополнительного сегмента search
    url = 'https://dummyjson.com/products/search?' + (params ? params : '') 
  } else {
    // а пагинация про пути без search
    url = 'https://dummyjson.com/products/' + (params ? '?' + params : '')
  }



  const res = await fetch(url).then((res) => res.json());
  return res.products;
}

export default async function Page({searchParams}: {searchParams: {q?: string, limit?: string, skip?: string}}) {
  console.log(searchParams);
  if (!searchParams.limit) searchParams.limit = '4' // default
  
  const posts = await apiDummyGet({
    q: searchParams.q ? searchParams.q : undefined,
    limit: searchParams.limit ? searchParams.limit : undefined,
  });

  return (
    <div>
      <form>
        <input
          type="text"
          name='q'
          defaultValue={searchParams.q}
        />
        <input
          type="text"
          name='limit'
          defaultValue={searchParams.limit}
        />
        <button type='submit'>Submit</button>
      </form>
      Список постов:
      {posts.map((item: any) => (
        <PostServer key={item.id} item={item} />
      ))}
    </div>
  );
}
