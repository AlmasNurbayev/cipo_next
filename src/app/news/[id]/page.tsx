import { config } from '@/config/constants';
import Image from 'next/image';
import React from 'react';

async function genNewsById(id: string) {
  const res = fetch(`${config.backendUrl}/api/newsID?id=${id}`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err.message);
    });
  return res;
}

export default async function page({ params }: { params: { id: string } }) {
  const news: any = await genNewsById(params.id);
  return (
    <div className="main">
      <div>id : {params.id}</div>
      <div>title: {news.title}</div>
      <div dangerouslySetInnerHTML={{ __html: news.data}}></div>
      <Image
        src={config.backendUrl + '/' + news.image_path}
        width={300}
        height={300}
        alt={news.title}
      />
    </div>
  );
}
