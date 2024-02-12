import { title } from 'process';
import styles from './page.module.css';
import Link from 'next/link';
import { cipoListNews, cipoListStores, cipoProductNews } from '@/api/cipo.api';
import { Istore } from '@/types/store';
import { Inews } from '@/types/news';
import { IproductNew } from '@/types/productsNews';
import Image from 'next/image';
import { config } from '@/config/constants';

export default async function Home() {
  const news = (await cipoListNews()).data;
  const stores = (await cipoListStores()).data;
  const newProducts = (await cipoProductNews()).data;

  return (
    <main className={styles.main}>
      <h1>clean main page</h1>
      <div>
        <h3>news</h3>
        <ul>
          {news.map((item: Inews) => (
            <li key={item.id}>
              <Link href={'/news/' + item.id}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>stores</h3>
        <ul>
          {stores.map((item: Istore) => (
            <li key={item.id}>
              <div>
                <Link href={'/stores/' + item.id}>{item.name_1c}</Link>
              </div>
              <div>{item.address}</div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>new products</h3>
        <ul>
          {newProducts.map((item: IproductNew) => (
            <li key={item.product_id + item.product_name}>
              {item.product_name}
              {item.artikul}
              {item.image_active_path}
              <Image
                src={config.backendUrl + '/' + item.image_active_path}
                width={100}
                height={100}
                alt={item.product_name}
              />
            </li>
          ))}
        </ul>
      </div>

      <h1>
        <Link href="/posts_server/">Posts_server</Link>
      </h1>
      <h1>
        <Link href="/posts_mix/">Posts_mix</Link>
      </h1>
      <h1>
        <Link href="/goods/">Goods</Link>
      </h1>
    </main>
  );
}
