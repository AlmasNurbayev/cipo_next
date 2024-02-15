import './NewsCard.css';
import { Inews } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';
import { config } from '@/config/constants';

export default function NewsCard({ item }: { item: Inews }) {
  const slicedData = item.data.length > 100 ? item.data.slice(0, 100) + '...' : item.data;

  return (
    <div className="NewsCard">
      <Link href={'/news/' + item.id}>
        <h2>{item.title}</h2>
        <div className="top">
          <Image
            src={config.backendUrl + '/' + item.image_path}
            alt={item.title}
            width={250}
            height={250}
          ></Image>
        </div>
        <div className="down">
          <div dangerouslySetInnerHTML={{ __html: slicedData}}></div>
        </div>
      </Link>
    </div>
  );
}
