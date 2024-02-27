import { cipoGetNews } from '@/api/cipo.api';
import { config } from '@/config/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import 'server-only';
import './page.css';

type Props = {
  params: { id: string };
  // searchParams: { [key: string]: string | string[] | undefined }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = (await cipoGetNews(params.id)).data;
  return {
    title: 'Новости / ' + product.title,
  };
}

export default async function NewPage({ params }: { params: { id: string } }) {
  const news = (await cipoGetNews(params.id)).data;

  return (
    <main className="newPage _container">
      <div className="title">
        <h1>{news.title}</h1>
      </div>

          <Image
            src={config.staticPath + '/' + news.image_path}
            width={300}
            height={300}
            alt={news.title}
          />
          <div dangerouslySetInnerHTML={{ __html: news.data }}></div>


    </main>
  );
}
