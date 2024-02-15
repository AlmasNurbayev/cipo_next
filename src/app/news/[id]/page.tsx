import { cipoGetNews } from '@/api/cipo.api';
import { config } from '@/config/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import 'server-only'

type Props = {
  params: { id: string }
  // searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const product = (await cipoGetNews(params.id)).data
  return {
    title: 'Новости / ' + product.title,
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const news = (await cipoGetNews(params.id)).data;
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
